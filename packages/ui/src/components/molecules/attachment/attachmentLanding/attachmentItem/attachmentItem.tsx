import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, Loader } from "lucide-react";
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
    <div
      title={file.name}
      className="rounded-lg w-[60px] h-[60px] bg-white relative flex justify-center items-center"
    >
      {file.loading ? (
        <div className="z-10 flex justify-center items-center absolute top-0 left-0 w-full h-full bg-[#000] rounded-lg opacity-60">
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
        </div>
      ) : null}
      {file.fileUrl ? (
        <Image className="rounded-lg" src={file.fileUrl} fill alt={file.name} />
      ) : (
        <strong className="text-[#737373]">{file.type}</strong>
      )}
      <Button
        onClick={handleClick}
        disabled={file.loading}
        className="p-0 flex justify-center items-center absolute top-0 bg-[#DC2626] right-0 w-[20px] h-[20px] rounded-sm hover:bg-[#DC2626]"
      >
        <Trash2 color="#fff" size={14} />
      </Button>
    </div>
  );
};

export { AttachmentItem };
