import { motion } from "framer-motion";
import { Loader, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../../atoms/button";
import { FileState } from "../../useAttachment";
import Typography from "./../../../../atoms/typography";

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
              className={`p-0 min-w-auto flex justify-center items-center absolute top-[50%] translate-y-[-50%] bg-error left-[50%] translate-x-[-50%] w-[20px] h-[20px] rounded-sm hover:bg-error`}
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
          <Typography className="text-foreground">{file.type}</Typography>
        )}
      </div>
      <p title={file.name}>
        <Typography variant="paragraph/xs" className="truncate text-center">
          {file.name}
        </Typography>
      </p>
      <p className="w-full text-center text-xs text-gray-500">
        {(file.size / 1024 / 1024).toFixed(2)}mb
      </p>
    </div>
  );
};

export { AttachmentItem };
