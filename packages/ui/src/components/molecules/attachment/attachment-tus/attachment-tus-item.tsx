"use client";

import { Typography } from "@repo/ui/components/atoms/typography";
import { motion } from "framer-motion";
import { cn } from "@repo/ui/lib/utils";
import { Trash2Icon } from "lucide-react";
import { useState, useEffect } from "react";

export interface UploadItem {
  id: string;
  file: File;
  progress: number;
  isUploading: boolean;
  uploadUrl: string | null;
  error: string | null;
}

interface AttachmentTusItemProps {
  upload: UploadItem;
  // eslint-disable-next-line no-unused-vars
  onCancel: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onDelete?: (id: string) => void;
}

export const AttachmentTusItem = ({
  upload,
  onCancel,
  onDelete,
}: AttachmentTusItemProps) => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  // Split filename and extension
  const getFileNameAndExtension = (filename: string) => {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) return { name: filename, ext: "" };

    // Handle special cases for common file types with multiple dots
    const lowerFilename = filename.toLowerCase();
    if (
      lowerFilename.endsWith(".tar.gz") ||
      lowerFilename.endsWith(".tar.bz2")
    ) {
      const secondLastDotIndex = filename.lastIndexOf(".", lastDotIndex - 1);
      return {
        name: filename.substring(0, secondLastDotIndex),
        ext: filename.substring(secondLastDotIndex),
      };
    }

    return {
      name: filename.substring(0, lastDotIndex),
      ext: filename.substring(lastDotIndex),
    };
  };

  const { name, ext } = getFileNameAndExtension(upload.file.name);

  const isCompleted = upload.uploadUrl && !upload.isUploading;

  // Calculate blur amount based on progress (10px at 0%, 0px at 100%)
  const blurAmount = isCompleted ? 0 : Math.max(10 - upload.progress / 10, 0);

  // is image
  const isImage = upload.file.type.startsWith("image/");

  // Generate and cleanup object URL
  useEffect(() => {
    if (isImage) {
      const url = URL.createObjectURL(upload.file);
      setObjectUrl(url);

      // Cleanup function to revoke the URL when component unmounts or file changes
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [upload.file, isImage]);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(upload.id);
    }
  };

  return (
    <div
      className="flex flex-col gap-1 cursor-pointer"
      onClick={() => {
        if (upload.uploadUrl) {
          window.open(upload.uploadUrl, "_blank");
        }
      }}
    >
      <div className="w-20 h-12 bg-muted relative group rounded overflow-hidden">
        {/* if type of file is image show image */}
        {isImage && objectUrl && (
          <motion.img
            src={objectUrl}
            alt={upload.file.name}
            className="w-full h-full object-cover"
            initial={{ filter: "blur(10px)" }}
            animate={{
              filter: `blur(${blurAmount}px)`,
            }}
            transition={{
              filter: { type: "spring", damping: 25, mass: 0.7 },
            }}
          />
        )}
        <motion.div
          className={cn(
            "absolute bottom-0 transition-opacity duration-500 left-0 bg-gradient-to-r from-primary/20 to-primary/40  h-full",
            {
              "group-hover:opacity-0": isImage,
            },
          )}
          initial={{ width: 0 }}
          animate={{ width: `${upload.progress}%` }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 200,
            mass: 0.7,
          }}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
            {
              "group-hover:opacity-0": isImage,
            },
          )}
        >
          {isCompleted ? (
            <Typography
              variant="paragraph/xs"
              transform="uppercase"
              className="text-[10px] "
              weight="black"
            >
              {ext.split(".")[1]}
            </Typography>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                if (upload.isUploading) {
                  onCancel(upload.id);
                }
              }}
              className="group"
            >
              <Typography
                variant="paragraph/xs"
                className="text-[10px] group-hover:hidden"
                weight="medium"
              >
                {Math.max(0, upload.progress - 1)}%
              </Typography>
              <Typography
                variant="paragraph/xs"
                className="text-[10px] hidden group-hover:block text-destructive"
                weight="bold"
              >
                Cancel
              </Typography>
            </motion.div>
          )}
        </div>
        {isCompleted && onDelete && (
          <div className="absolute -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleDelete}
              className="p-1 bg-destructive/80 rounded-bl text-white hover:bg-destructive"
              aria-label="Delete attachment"
            >
              <Trash2Icon size={12} />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-baseline max-w-20 overflow-hidden">
        <Typography variant="paragraph/xs" className="truncate">
          {name}
        </Typography>
        <Typography
          variant="paragraph/xs"
          className="text-muted-foreground whitespace-nowrap"
        >
          {ext}
        </Typography>
      </div>
      <Typography
        variant="label/xs"
        className="text-muted-foreground text-[10px]"
      >
        {(upload.file.size / (1024 * 1024)).toFixed(2)} MB
      </Typography>
      {upload.error && (
        <Typography variant="label/xs" className="text-destructive">
          Error: {upload.error}
        </Typography>
      )}
    </div>
  );
};
