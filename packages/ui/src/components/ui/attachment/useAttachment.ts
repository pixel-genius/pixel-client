import { useMemo, useState } from "react";
import { toast } from "sonner";

export interface AttachmentProps {
  title: string;
  multiple?: boolean;
  allowedTypes?: string[];
  onChange: (fileIds: number[] | []) => void;
  maxSize?: number; // in MB
}

const useAttachment = ({ allowedTypes, maxSize = 10 }: AttachmentProps) => {
  const [files, setFiles] = useState<File[]>([]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesInput = Array.from(e.target.files || []);
    const includesType = filesInput.every((file) =>
      allowedTypes?.includes(
        file.type.slice(file.type.lastIndexOf("/") + 1, file.type.length),
      ),
    );
    if (filesInput.length) {
      if (includesType) {
        const maxSizeBytes = maxSize * 1024 * 1024;
        const validSize = filesInput.every((file) => file.size <= maxSizeBytes);
        if (validSize) {
          const tempArr: File[] = [];
          setFiles((prev) => {
            filesInput.forEach((file) => {
              if (!prev.includes(file)) tempArr.push(file);
            });
            return [...prev, ...tempArr];
          });
        } else {
          e.preventDefault();
          toast.warning(`File size exceeds ${maxSize}MB!`);
        }
      } else {
        e.preventDefault();
        toast.warning(`File type must be : ${allowedTypesText}`);
      }
    }
  };

  return { files, setFiles, handleChange, allowedTypesText };
};
export { useAttachment };
