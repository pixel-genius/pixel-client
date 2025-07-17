"use client";

import { PixelImgIcon } from "@repo/icons/pixel-img";

import { Typography } from "@repo/ui/components/atoms/typography";
import { useRef, useEffect } from "react";
import { useTusUploadManager, CompletedUpload } from "./use-tus-upload-manager";
import { AttachmentTusItem } from "./attachment-tus-item";
import { PixelZipIcon } from "@repo/icons/pixel-zip";
import { cn } from "@repo/ui/lib/utils";
interface AttachmentTusProps {
  endpoint?: string;
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (url: string, fileName: string) => void;
  type?: "img" | "zip";
  // eslint-disable-next-line no-unused-vars
  onAllCompleted?: (results: CompletedUpload[]) => void;
  multiple?: boolean;
  accept?: string[];
  title?: string;
  description?: string;
  error?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (uploads: any[]) => void;
  defaultValue?: CompletedUpload[];
}

const AttachmentTus = ({
  endpoint,
  onSuccess,
  onAllCompleted,
  multiple = false,
  accept,
  title,
  description,
  error,
  onChange,
  defaultValue = [],
  type = "img",
}: AttachmentTusProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitializedRef = useRef(false);
  const prevUploadsRef = useRef<any[]>([]);

  const {
    uploads,
    startUpload,
    startUploads,
    removeUpload,
    setInitialUploads,
  } = useTusUploadManager({
    endpoint: endpoint || process.env.NEXT_PUBLIC_BASE_URL_ATTACHMENT || "",
    onChange,
  });

  // Initialize with default values if provided
  useEffect(() => {
    if (!isInitializedRef.current && defaultValue.length > 0) {
      setInitialUploads(defaultValue);
      isInitializedRef.current = true;
    }
  }, [defaultValue, setInitialUploads]);

  // Handle onSuccess and onAllCompleted callbacks
  useEffect(() => {
    // Find newly completed uploads
    const completedUploads = uploads.filter(
      (upload) =>
        upload.uploadUrl &&
        !upload.isUploading &&
        !prevUploadsRef.current.some(
          (prev) =>
            prev.id === upload.id &&
            prev.uploadUrl === upload.uploadUrl &&
            !prev.isUploading,
        ),
    );

    // Call onSuccess for each newly completed upload
    if (completedUploads.length > 0 && onSuccess) {
      completedUploads.forEach((upload) => {
        if (upload.uploadUrl) {
          onSuccess(upload.uploadUrl, upload.file.name);
        }
      });
    }

    // Call onAllCompleted if all uploads are completed
    const allCompleted =
      uploads.length > 0 &&
      uploads.every((upload) => upload.uploadUrl && !upload.isUploading);
    if (
      allCompleted &&
      onAllCompleted &&
      uploads.length !== prevUploadsRef.current.length
    ) {
      const results: CompletedUpload[] = uploads.map((upload) => ({
        url: upload.uploadUrl || "",
        fileName: upload.file.name,
      }));
      onAllCompleted(results);
    }

    // Update the previous uploads reference
    prevUploadsRef.current = [...uploads];
  }, [uploads, onSuccess, onAllCompleted]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      if (multiple) {
        startUploads(e.target.files);
      } else {
        startUpload(e.target.files[0]);
      }
    }
  };

  const icon =
    type === "img" ? <PixelImgIcon size={36} /> : <PixelZipIcon size={36} />;

  return (
    <div
      className={cn("bg-card rounded-lg p-4", error && "ring-2 ring-error ")}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {/* left */}
        <div className="col-span-1 flex flex-col gap-4 items-start justify-start">
          {/* title and description */}
          <div className="flex flex-col gap-2">
            <Typography variant="heading/xs" weight="medium">
              {title}
            </Typography>
            <Typography
              variant="label/sm"
              weight="light"
              className="text-muted-foreground  whitespace-normal"
            >
              {description}
            </Typography>
          </div>

          {uploads.length > 0 && (
            <div
              className="w-full overflow-x-auto"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
                scrollSnapType: "x proximity",
              }}
            >
              <div className="flex gap-4 pb-4 pr-4 transition-transform duration-300 ease-out">
                {/* attachment items */}
                {uploads.map((upload) => (
                  <div
                    key={upload.id}
                    className="scroll-snap-align-start"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <AttachmentTusItem
                      upload={upload}
                      onCancel={removeUpload}
                      onDelete={removeUpload}
                    />
                  </div>
                ))}
              </div>

              {error && (
                <Typography
                  variant="paragraph/xs"
                  className="text-destructive"
                  weight="medium"
                >
                  {error}
                </Typography>
              )}
            </div>
          )}
        </div>

        {/* right */}
        <div className="col-span-1 flex items-center justify-center">
          <div
            className={`border border-muted-foreground border-dashed rounded-xl w-full h-40 cursor-pointer flex items-center justify-center`}
            onClick={() => inputRef.current?.click()}
          >
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              multiple={multiple}
              onChange={handleUpload}
              accept={
                accept?.length ? accept.map((type) => `.${type}`).join(",") : ""
              }
            />

            <div className="flex items-center justify-center flex-col gap-4">
              <div className="flex items-center justify-center size-16 bg-primary rounded-lg ">
                {icon}
              </div>
              <div className="flex items-center justify-center gap-1">
                <Typography variant="label/sm">
                  Drag and drop to upload, or click to
                </Typography>
                <Typography
                  variant="label/sm"
                  weight="bold"
                  className="text-primary"
                >
                  browse
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AttachmentTus };
