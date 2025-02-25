"use client";

import { UsePostUploadfile } from "@repo/apis/core/base/upload/post/use-post-uploadfile";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

export interface AttachmentProps {
  title: string;
  multiple?: boolean;
  allowedTypes?: string[];
  // eslint-disable-next-line no-unused-vars
  onChange: (fileIds: number[] | []) => void;
  maxSize?: number; // in MB
  fileCategory: string;
  canDeleteFile?: boolean;
  value?: [];
  disabled?: boolean;
  error?: string;
}
export interface FileState {
  id?: number;
  name: string;
  type: string;
  size: number;
  loading?: true;
  fileUrl?: string;
  previousUploaded?: boolean;
}
export interface AttachmentItemProps {
  file: FileState;
  canDeleteFile: boolean;
  handleRemove: (arg: string | number) => void;
}

const useAttachment = ({
  allowedTypes,
  maxSize = 10,
  fileCategory,
  canDeleteFile,
  onChange,
}: AttachmentProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileState[]>([]);
  const fileUploadMutation = UsePostUploadfile({
    onSuccess: (res) => {
      const ids: number[] = [];
      const data = res.data;
      if (data.data.length) {
        data.data.forEach((item) => {
          ids.push(item.id);
        });
        setFiles((prev) =>
          prev.map((file, index: number) => {
            delete file.loading;
            ids[index] ? (file.id = ids[index]) : null;
            return file;
          }),
        );
      }
      onChange(ids);
    },
  });

  const allowedTypesText = useMemo(() => {
    let tempTxt: string = "";
    if (allowedTypes?.length) {
      allowedTypes.forEach((type, index) => {
        tempTxt +=
          type.toUpperCase() +
          (index === allowedTypes.length - 2
            ? " or "
            : index === allowedTypes.length - 1
              ? ""
              : ", ");
      });
    }
    return tempTxt;
  }, [allowedTypes]);

  const handleRemove = (arg: string | number) => {
    setFiles((prev) =>
      prev.filter(
        (file) => file[typeof arg === "string" ? "name" : "id"] !== arg,
      ),
    );
  };
  const getUploadFiles = (
    Files: Array<File>,
    e: ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
  ) => {
    let filesInput = Files;
    const includesType = filesInput.every((file) =>
      allowedTypes?.includes(
        file.type.slice(file.type.lastIndexOf("/") + 1, file.type.length),
      ),
    );
    console.log(allowedTypes);
    if (includesType) {
      const maxSizeBytes = maxSize * 1024 * 1024;
      const validSize = filesInput.every((file) => file.size <= maxSizeBytes);
      if (validSize) {
        files.forEach((file) => {
          if (filesInput.some((filesInput) => filesInput.name === file.name)) {
            toast.warning(`Some Files already exists!`);
            filesInput = filesInput.filter(
              (fileInput) => fileInput.name !== file.name,
            );
          }
        });
        setFiles((prev) => {
          filesInput.forEach((file) => {
            if (!prev.some((prevFile) => prevFile.name === file.name)) {
              const tempObj: FileState = {
                name: file.name,
                size: file.size,
                type: file.type.slice(
                  file.type.lastIndexOf("/") + 1,
                  file.type.length,
                ),
                loading: true,
              };

              console.log();
              if (file.type.includes("image"))
                tempObj.fileUrl = URL.createObjectURL(file);
              prev.push(tempObj);
            }
          });
          return [...prev];
        });
        if (filesInput.length) fileUploadMutation.mutate({ file: filesInput });
      } else {
        e.preventDefault();
        toast.warning(`File size exceeds ${maxSize}MB!`);
      }
    } else {
      e.preventDefault();
      toast.warning(`File type must be : ${allowedTypesText}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filesInput = Array.from(e.target.files || []);
    getUploadFiles(filesInput, e);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const filesInput = Array.from(e.dataTransfer.files);
    getUploadFiles(filesInput, e);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    target.style.cursor = "grabbing";
  };

  return {
    inputFileRef,
    files,
    setFiles,
    handleChange,
    handleRemove,
    handleDragOver,
    handleDrop,
    allowedTypesText,
  };
};
export { useAttachment };
