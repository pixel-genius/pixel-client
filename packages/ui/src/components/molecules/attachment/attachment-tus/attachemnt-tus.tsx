"use client";

import { useTus } from "./useTus";

import { PixelImgIcon } from "@repo/icons/pixel-img";

import { Typography } from "@repo/ui/components";

interface AttachmentTusProps {
  endpoint?: string;
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (url: string, fileName: string) => void;
  // eslint-disable-next-line no-unused-vars
  onAllCompleted?: (results: { url: string; fileName: string }[]) => void;
  multiple?: boolean;
}

const AttachmentTus = ({
  endpoint,
  onSuccess,
  onAllCompleted,
  multiple = false,
}: AttachmentTusProps) => {
  const {
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
  } = useTus({
    endpoint,
    onSuccess,
    onAllCompleted,
    multiple,
  });

  return (
    <div className="bg-card rounded-lg p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {/* left */}
        <div className="col-span-1 flex  items-center justify-center">
          <div className="border w-full h-full">test</div>
        </div>

        {/* ////// */}
        <div className="col-span-1 hidden">
          {files.length > 0 && (
            <div className="text-sm mb-4">
              <p>
                <span className="font-medium">
                  Selected file{files.length > 1 ? "s" : ""}:
                </span>
                {multiple ? (
                  <ul className="list-disc pl-5 mt-1">
                    {files.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        {fileStatuses[index]?.completed && (
                          <span className="text-green-600 ml-2">
                            ✓ Completed
                          </span>
                        )}
                        {fileStatuses[index]?.uploading && (
                          <span className="text-blue-600 ml-2">
                            {fileStatuses[index]?.progress.toFixed(0)}%
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  files[0] && (
                    <>
                      {" "}
                      {files[0].name}
                      <p>
                        <span className="font-medium">Size:</span>{" "}
                        {(files[0].size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </>
                  )
                )}
              </p>
            </div>
          )}

          {uploading && !multiple && (
            <div className="space-y-2 mb-4">
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

          {uploading && multiple && (
            <div className="space-y-2 mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm">
                Overall progress: {progress.toFixed(0)}%
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {uploadURLs.length > 0 && (
            <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p>Upload completed successfully!</p>
              {multiple ? (
                <ul className="list-disc pl-5 mt-1">
                  {uploadURLs.map((url, index) => (
                    <li key={index}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {fileStatuses.find((status) => status.url === url)?.file
                          .name || url}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  href={uploadURLs[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {uploadURLs[0]}
                </a>
              )}
            </div>
          )}
        </div>

        {/* right */}

        <div className="col-span-1 flex  items-center justify-center">
          <div
            className="border border-dashed rounded w-full h-40 cursor-pointer flex items-center justify-center"
            onClick={() => inputRef.current?.click()}
          >
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              multiple={multiple}
              //   onChange={handleFileChange}
              //   accept={
              //     allowedTypes?.length
              //       ? allowedTypes.map((type) => `.${type}`).join(",")
              //       : ""
              //   }
            />

            <div className="flex items-center justify-center flex-col gap-2">
              <div className="flex items-center justify-center size-16 bg-primary rounded-lg ">
                <PixelImgIcon size={36} />
              </div>
              <Typography variant="label/sm">Upload</Typography>
            </div>
          </div>
        </div>

        <div className="col-span-1 hidden">
          <h2 className="text-lg font-medium mb-2">
            Upload File{multiple ? "s" : ""}
          </h2>
          <input
            type="file"
            onChange={handleFileChange}
            ref={inputRef}
            multiple={multiple}
            className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
            disabled={uploading}
          />

          <div className="flex space-x-4 mt-4">
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

export { AttachmentTus };
