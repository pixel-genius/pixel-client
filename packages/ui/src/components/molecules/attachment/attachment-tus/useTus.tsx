"use client";

import { useState, useRef, RefObject } from "react";
import * as tus from "tus-js-client";

interface UseTusOptions {
  endpoint?: string;
  retryDelays?: number[];
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (url: string, fileName: string) => void;
  // eslint-disable-next-line no-unused-vars
  onAllCompleted?: (results: { url: string; fileName: string }[]) => void;
  multiple?: boolean;
}

interface FileUploadStatus {
  file: File;
  progress: number;
  uploading: boolean;
  completed: boolean;
  url: string;
  error: string;
}

interface UseTusReturn {
  files: File[];
  fileStatuses: FileUploadStatus[];
  progress: number; // Overall progress
  uploading: boolean;
  uploadURLs: string[];
  error: string;
  inputRef: RefObject<HTMLInputElement | null>;
  // eslint-disable-next-line no-unused-vars
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startUpload: () => Promise<void>;
  resetUpload: () => void;
  // Single file compatibility properties
  file: File | null;
  uploadURL: string;
}

export const useTus = (options?: UseTusOptions): UseTusReturn => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileStatuses, setFileStatuses] = useState<FileUploadStatus[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Calculate overall progress
  const progress =
    fileStatuses.length > 0
      ? fileStatuses.reduce((sum, status) => sum + status.progress, 0) /
        fileStatuses.length
      : 0;

  // Get all upload URLs
  const uploadURLs = fileStatuses
    .filter((status) => status.completed)
    .map((status) => status.url);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);

      if (options?.multiple) {
        setFiles(fileList);

        // Create file statuses for each file
        const newStatuses: FileUploadStatus[] = fileList.map((file) => ({
          file,
          progress: 0,
          uploading: false,
          completed: false,
          url: "",
          error: "",
        }));

        setFileStatuses(newStatuses);
      } else {
        // If multiple is not enabled, just take the first file
        const firstFile = fileList[0];
        // Ensure firstFile is not undefined before using it
        if (firstFile) {
          setFiles([firstFile]);

          // Create file status for the single file
          const newStatus: FileUploadStatus = {
            file: firstFile,
            progress: 0,
            uploading: false,
            completed: false,
            url: "",
            error: "",
          };

          setFileStatuses([newStatus]);
        }
      }

      setError("");
    }
  };

  const uploadFile = async (file: File, index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Make sure we have a valid status object to update
      if (index < 0 || index >= fileStatuses.length) {
        reject(new Error("Invalid file index"));
        return;
      }

      // Get a safe reference to the current status
      const currentStatus = fileStatuses[index];

      // Update status to uploading
      setFileStatuses((prev) => {
        const updated = [...prev];
        updated[index] = {
          ...currentStatus,
          uploading: true,
          error: "",
        } as FileUploadStatus; // Explicitly cast to FileUploadStatus
        return updated;
      });

      const upload = new tus.Upload(file, {
        endpoint: options?.endpoint || "https://tusd.tusdemo.net/files/",
        retryDelays: options?.retryDelays || [0, 3000, 5000, 10000, 20000],
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        onError: (error) => {
          console.error(`Upload failed for ${file.name}:`, error);
          setFileStatuses((prev) => {
            const updated = [...prev];
            if (index >= 0 && index < updated.length) {
              const status = updated[index];
              updated[index] = {
                ...status,
                uploading: false,
                error: `Upload failed: ${error.message || "Unknown error"}`,
              } as FileUploadStatus; // Explicitly cast to FileUploadStatus
            }
            return updated;
          });
          reject(error);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          setFileStatuses((prev) => {
            const updated = [...prev];
            if (index >= 0 && index < updated.length) {
              const status = updated[index];
              updated[index] = {
                ...status,
                progress: parseFloat(percentage),
              } as FileUploadStatus; // Explicitly cast to FileUploadStatus
            }
            return updated;
          });
        },
        onSuccess: function () {
          // Ensure we have a string URL
          const uploadUrl = upload.url || "";

          console.log(`Download ${file.name} from ${uploadUrl}`);
          setFileStatuses((prev) => {
            const updated = [...prev];
            if (index >= 0 && index < updated.length) {
              const status = updated[index];
              updated[index] = {
                ...status,
                uploading: false,
                completed: true,
                url: uploadUrl,
              } as FileUploadStatus; // Explicitly cast to FileUploadStatus
            }
            return updated;
          });

          if (options?.onSuccess) {
            options.onSuccess(uploadUrl, file.name);
          }

          resolve();
        },
      });

      // Check if there are any previous uploads to continue
      upload
        .findPreviousUploads()
        .then((previousUploads) => {
          if (previousUploads.length && previousUploads[0]) {
            upload.resumeFromPreviousUpload(previousUploads[0]);
          }
          upload.start();
        })
        .catch((err) => {
          console.warn("Error finding previous uploads:", err);
          upload.start();
        });
    });
  };

  const startUpload = async () => {
    if (files.length === 0) {
      setError("Please select at least one file first");
      return;
    }

    setUploading(true);
    setError("");

    try {
      // Upload files in parallel
      const uploadPromises = files.map((file, index) =>
        uploadFile(file, index),
      );
      await Promise.all(uploadPromises);

      // All uploads completed
      if (options?.onAllCompleted) {
        const completedStatuses = fileStatuses.filter(
          (status) => status.completed,
        );
        const results = completedStatuses.map((status) => ({
          url: status.url,
          fileName: status.file.name,
        }));

        options.onAllCompleted(results);
      }
    } catch (err) {
      console.error("Error during upload:", err);
    } finally {
      setUploading(false);
    }
  };

  const resetUpload = () => {
    setFiles([]);
    setFileStatuses([]);
    setUploading(false);
    setError("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // For backward compatibility with single file interface
  const file = files.length > 0 ? files[0] : null;
  const uploadURL = uploadURLs.length > 0 ? uploadURLs[0] : "";

  return {
    files,
    fileStatuses,
    progress,
    uploading,
    uploadURLs,
    error,
    inputRef,
    handleFileChange,
    startUpload,
    resetUpload,
    // Single file compatibility
    file: file as File | null,
    uploadURL: uploadURL as string,
  };
};
