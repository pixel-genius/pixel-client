import { UsePostFileUpload } from "@repo/apis/core/accounts/file-upload/post/use-post-file-upload";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

export interface AttachmentProps {
  title: string;
  multiple?: boolean;
  allowedTypes?: string[];
  onChange: (fileIds: number[] | []) => void;
  maxSize?: number; // in MB
  fileCategory: string;
}
export interface FileState {
  name: string;
  type: string;
  size: number;
  loading?: true;
  fileUrl?: string;
}

const useAttachment = ({
  allowedTypes,
  maxSize = 10,
  fileCategory,
  onChange,
}: AttachmentProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileState[]>([]);
  const fileUploadMutation = UsePostFileUpload();

  const allowedTypesText = useMemo(() => {
    let tempTxt: string = "";
    if (allowedTypes?.length) {
      allowedTypes.forEach((type, index) => {
        tempTxt +=
          type.toUpperCase() +
          (index === allowedTypes.length - 2 ? " or " : ", ");
      });
    }
    return tempTxt;
  }, [allowedTypes]);

  const handleRemove = (name: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  useEffect(() => {
    if (fileUploadMutation.data?.data?.ids?.length) {
      onChange(fileUploadMutation.data?.data.ids);
      setFiles((prev) =>
        prev.map((file) => {
          delete file.loading;
          return file;
        }),
      );
    }
  }, [fileUploadMutation.isSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let filesInput = Array.from(e.target.files || []);
    if (filesInput.length) {
      const includesType = filesInput.every((file) =>
        allowedTypes?.includes(
          file.type.slice(file.type.lastIndexOf("/") + 1, file.type.length),
        ),
      );

      if (includesType) {
        const maxSizeBytes = maxSize * 1024 * 1024;
        const validSize = filesInput.every((file) => file.size <= maxSizeBytes);
        if (validSize) {
          files.forEach((file) => {
            if (
              filesInput.some((filesInput) => filesInput.name === file.name)
            ) {
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
                if (file.type.includes("image"))
                  tempObj.fileUrl = URL.createObjectURL(file);
                prev.push(tempObj);
              }
            });
            return [...prev];
          });
          if (filesInput.length)
            fileUploadMutation.mutate({ fileCategory, file: filesInput });
        } else {
          e.preventDefault();
          toast.warning(`File size exceeds ${maxSize}MB!`);
        }
      } else {
        e.preventDefault();
        toast.warning(`File type must be : ${allowedTypesText}`);
      }
    }
    e.target.value = "";
  };

  return {
    inputFileRef,
    files,
    setFiles,
    handleChange,
    handleRemove,
    allowedTypesText,
  };
};
export { useAttachment };
