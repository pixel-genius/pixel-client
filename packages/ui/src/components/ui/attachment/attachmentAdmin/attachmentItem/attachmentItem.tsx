import { motion } from "framer-motion";
import { Loader, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../button";
import { AttachmentItemProps } from "../../useAttachment";

const AttachmentItem = ({
  file,
  canDeleteFile,
  handleRemove,
}: AttachmentItemProps) => {
  const handleClick = () => {
    handleRemove(file.id || file.name);
  };
  File;
  return (
    <div
      title={file.name}
      className="max-w-[155px] flex flex-wrap justify-center"
    >
      <div className="w-[107px] h-[81px] bg-white relative rounded-lg flex justify-center items-center">
        <div
          className={`z-10 flex justify-center items-center absolute top-0 left-0 w-full h-full ${file.loading ? "bg-[#000000C9]" : "bg-[#26262666]"}`}
        >
          {file.loading ? (
            <motion.span
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Loader color="#fff" size={22} />
            </motion.span>
          ) : null}
        </div>
        {file.loading || (!canDeleteFile && file?.previousUploaded) ? null : (
          <Button
            onClick={handleClick}
            disabled={file.loading}
            className={`p-0 flex justify-center z-10 items-center absolute top-0 bg-[#DC2626] right-0 w-[20px] h-[20px] rounded-sm hover:bg-[#DC2626] `}
          >
            <Trash2 color="#fff" size={14} />
          </Button>
        )}
        {file.fileUrl ? (
          <Image
            className="rounded-lg"
            src={file.fileUrl}
            fill
            alt={file.name}
          />
        ) : (
          <strong className="text-[#737373]">{file.type}</strong>
        )}
      </div>
    </div>
  );
};

export { AttachmentItem };
