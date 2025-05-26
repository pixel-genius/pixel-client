"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import * as tus from "tus-js-client";
import { DetailedError } from "tus-js-client";
import { UploadOptions } from "tus-js-client";

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
  chunkSize?: number;
  retryDelays?: number[];
  onBeforeRequest?: () => void;
  uploadUrl?: string;
  uploadSize?: number;
  overridePatchMethod?: boolean;
  headers?: Record<string, string>;
  addRequestId?: boolean;
  onShouldRetry?: (
    // eslint-disable-next-line no-unused-vars
    error: DetailedError,
    // eslint-disable-next-line no-unused-vars
    retryAttempt: number,
    // eslint-disable-next-line no-unused-vars
    options: UploadOptions,
  ) => boolean;
  // Allow additional options but with more specific type
  [key: string]: any | undefined;
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
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo0OTAxNDYwMjQyLCJpYXQiOjE3NDc4NjAyNDIsImp0aSI6IjE0ZTZhNWUyMDNiZjQ1MmJiZjgyN2E0OGQzNzZlM2FlIiwidXNlcl9pZCI6MX0.t3P9SQl7e_xhlTOTcP_NJESnpe6-bDxIxDre8DG6aAM`,
        ...(options.headers || {}),
      },
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
      // Create a mock File object only in browser environment
      let fakeFile: File;

      if (typeof window !== "undefined" && typeof File !== "undefined") {
        // Browser environment
        fakeFile = new File([""], item.fileName, {
          type: "application/octet-stream",
        });
      } else {
        // Server environment - create a placeholder object with same interface
        fakeFile = {
          name: item.fileName,
          size: 0,
          type: "application/octet-stream",
          // Other File properties needed by the component
          lastModified: Date.now(),
          slice: () => new Blob(),
          arrayBuffer: async () => new ArrayBuffer(0),
          stream: () => new ReadableStream(),
          text: async () => "",
        } as File;
      }

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

  // Cleanup function to abort all uploads on unmount
  useEffect(() => {
    return () => {
      // Abort all active uploads when component unmounts
      uploadsRef.current.forEach((upload) => {
        if (upload && typeof upload.abort === "function") {
          upload.abort();
        }
      });
    };
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
