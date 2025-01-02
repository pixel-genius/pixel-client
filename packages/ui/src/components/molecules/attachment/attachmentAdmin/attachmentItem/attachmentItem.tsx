import { motion } from "framer-motion";
import { Loader, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../button";
import { FileState } from "../../useAttachment";

interface AttachmentItemProps {
  file: FileState;
  handleRemove: (name: string) => void;
}
const AttachmentItem = ({ file, handleRemove }: AttachmentItemProps) => {
  const handleClick = () => {
    handleRemove(file.name);
  };
  return (
    <div className="max-w-[155px] flex flex-wrap justify-center">
      <div className="w-[107px] h-[81px] bg-white relative flex justify-center items-center">
        <div className="z-10 flex justify-center items-center absolute top-0 left-0 w-full h-full bg-[#000000C9]">
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
          {file.loading ? null : (
            <Button
              onClick={handleClick}
              className={`p-0 flex justify-center items-center absolute top-[50%] translate-y-[-50%] bg-[#DC2626] left-[50%] translate-x-[-50%] w-[20px] h-[20px] rounded-sm hover:bg-[#DC2626]`}
            >
              <Trash2 color="#fff" size={14} />
            </Button>
          )}
        </div>
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
      <p
        title={file.name}
        className="w-full text-center flex items-center text-xs"
      >
        <span className="inline-block truncate w-[80%]">
          {file.name.slice(0, file.name.lastIndexOf(".") - 1)}
        </span>
        <span className="inline-block w-[20%]">
          {file.name.slice(file.name.lastIndexOf("."), file.name.length)}
        </span>
      </p>
      <p className="w-full text-center text-xs text-gray-500">
        {(file.size / 1024 / 1024).toFixed(2)}mb
      </p>
    </div>
  );
};

export { AttachmentItem };
