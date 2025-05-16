"use client";

import {
  AttachmentAdmin,
  AttachmentThumbnail,
  AttachmentTus,
  useTus,
} from "@repo/ui/components";
import React from "react";

const Page = () => {
  // Using the hook directly for single file upload
  const {
    files,
    progress,
    uploading,
    uploadURLs,
    error,
    inputRef,
    handleFileChange,
    startUpload,
    resetUpload,
  } = useTus({
    onSuccess: (url, fileName) => {
      console.log(`File ${fileName} uploaded to ${url}`);
    },
  });

  // Calculate file size safely
  const fileSize =
    files.length > 0 && files[0]
      ? (files[0].size / 1024 / 1024).toFixed(2)
      : "0";

  // Get file name safely
  const fileName = files.length > 0 && files[0] ? files[0].name : "";

  return (
    <div className="flex flex-col gap-8 px-10 py-20">
      {/* Direct hook usage example */}
      <div className="border rounded-lg p-6 bg-card">
        <h2 className="text-xl font-semibold mb-4">
          Direct Hook Usage Example
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select File
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              ref={inputRef}
              className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
              disabled={uploading}
            />
          </div>

          {files.length > 0 && (
            <div className="text-sm">
              <p>
                <span className="font-medium">Selected file:</span> {fileName}
              </p>
              <p>
                <span className="font-medium">Size:</span> {fileSize} MB
              </p>
            </div>
          )}

          {uploading && (
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm">
                {progress.toFixed(0)}% Uploaded
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {uploadURLs.length > 0 && (
            <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p>Upload completed successfully!</p>
              <a
                href={uploadURLs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {uploadURLs[0]}
              </a>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={startUpload}
              disabled={files.length === 0 || uploading}
              className={`flex-1 py-2 px-4 rounded-md text-white font-medium ${
                files.length === 0 || uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {uploading ? "Uploading..." : "Start Upload"}
            </button>

            <button
              onClick={resetUpload}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
