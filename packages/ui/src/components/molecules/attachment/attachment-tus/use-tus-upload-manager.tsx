import { useState, useCallback, useRef, useEffect } from "react";
import * as tus from "tus-js-client";

interface UploadItem {
  id: string;
  file: File;
  progress: number;
  isUploading: boolean;
  uploadUrl: string | null;
  error: string | null;
}

export interface CompletedUpload {
  url: string;
  fileName: string;
}

interface UseTusUploadManagerOptions {
  endpoint: string;
  metadata?: Record<string, string>;
  // eslint-disable-next-line no-unused-vars
  onChange?: (uploads: UploadItem[]) => void;
  [key: string]: any; // For other tus options
}

/**
 * A reusable, type-safe hook to manage resumable file uploads using tus-js-client.
 *
 * Supports both **single and multiple file uploads** with per-file state tracking, progress, error handling, cancellation, and upload URL.
 *
 * Works with `import * as tus from "tus-js-client"` and uses `new tus.Upload(...)`.
 *
 * @param {UseTusUploadManagerOptions} options - Configuration options for tus uploads.
 * @param {string} options.endpoint - The tus server upload endpoint.
 * @param {object} [options.metadata] - Optional metadata to send with each file (e.g., filename, filetype).
 * @param {function} [options.onChange] - Optional callback when uploads state changes.
 * @param {...tus.UploadOptions} [options] - Other tus-js-client upload options like `chunkSize`, `retryDelays`, etc.
 *
 * @returns {{
 *   uploads: UploadItem[];
 *   startUpload: (file: File) => void;
 *   startUploads: (files: FileList | File[]) => void;
 *   cancelUpload: (id: string) => void;
 *   clearAll: () => void;
 *   removeUpload: (id: string) => void;
 *   setInitialUploads: (uploads: CompletedUpload[]) => void;
 * }}
 *
 * @example
 * const { uploads, startUpload, startUploads, cancelUpload, clearAll } = useTusUploadManager({
 *   endpoint: 'https://your-tus-server/files/',
 * });
 *
 * // To upload a single file
 * startUpload(file);
 *
 * // To upload multiple files
 * startUploads(files);
 *
 * // To cancel a specific file
 * cancelUpload(uploadId);
 *
 * // To clear all uploads
 * clearAll();
 *
 * // Access uploads state
 * uploads.map(u => console.log(u.file.name, u.progress, u.isUploading));
 */
export function useTusUploadManager(options: UseTusUploadManagerOptions) {
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const uploadsRef = useRef<Map<string, tus.Upload>>(new Map());
  const { onChange } = options;

  // Call onChange when uploads change
  useEffect(() => {
    if (onChange) {
      onChange(uploads);
    }
  }, [uploads, onChange]);

  const createUpload = (file: File, id: string) => {
    const { endpoint, metadata, onChange: _, ...restOptions } = options;
    return new tus.Upload(file, {
      endpoint,
      ...restOptions,
      metadata: {
        filename: file.name,
        filetype: file.type,
        ...(metadata || {}),
      },
      onError: (error) => {
        setUploads((prev) =>
          prev.map((u) =>
            u.id === id
              ? { ...u, isUploading: false, error: error.message }
              : u,
          ),
        );
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = Math.floor((bytesUploaded / bytesTotal) * 100);
        setUploads((prev) =>
          prev.map((u) => (u.id === id ? { ...u, progress: percentage } : u)),
        );
      },
      onSuccess: () => {
        const uploadInstance = uploadsRef.current.get(id);
        setUploads((prev) =>
          prev.map((u) =>
            u.id === id
              ? {
                  ...u,
                  isUploading: false,
                  uploadUrl: uploadInstance?.url ?? null,
                }
              : u,
          ),
        );
      },
    });
  };

  const startUpload = useCallback(
    (file: File) => {
      const id = `${file.name}-${Date.now()}`;
      const uploadItem: UploadItem = {
        id,
        file,
        progress: 0,
        isUploading: true,
        uploadUrl: null,
        error: null,
      };

      setUploads((prev) => [...prev, uploadItem]);

      const upload = createUpload(file, id);
      uploadsRef.current.set(id, upload);
      upload.start();
    },
    [options],
  );

  const startUploads = useCallback(
    (files: FileList | File[]) => {
      Array.from(files).forEach((file) => {
        startUpload(file);
      });
    },
    [startUpload],
  );

  const cancelUpload = useCallback((id: string) => {
    const upload = uploadsRef.current.get(id);
    if (upload) {
      upload.abort();
      setUploads((prev) =>
        prev.map((u) => (u.id === id ? { ...u, isUploading: false } : u)),
      );
    }
  }, []);

  const removeUpload = useCallback((id: string) => {
    // Remove the upload from state
    setUploads((prev) => prev.filter((u) => u.id !== id));

    // Also remove from the uploads reference if it exists
    if (uploadsRef.current.has(id)) {
      uploadsRef.current.delete(id);
    }
  }, []);

  const clearAll = useCallback(() => {
    uploadsRef.current.forEach((upload) => upload.abort());
    uploadsRef.current.clear();
    setUploads([]);
  }, []);

  // Function to set initial uploads from defaultValue
  const setInitialUploads = useCallback((initialUploads: CompletedUpload[]) => {
    const fakeUploads: UploadItem[] = initialUploads.map((item) => {
      // Create a mock File object
      const fakeFile = new File([""], item.fileName, {
        type: "application/octet-stream",
      });

      const id = `${item.fileName}-${Date.now()}`;

      return {
        id,
        file: fakeFile,
        progress: 100,
        isUploading: false,
        uploadUrl: item.url,
        error: null,
      };
    });

    setUploads(fakeUploads);
  }, []);

  return {
    uploads,
    startUpload,
    startUploads,
    cancelUpload,
    clearAll,
    removeUpload,
    setInitialUploads,
  };
}
