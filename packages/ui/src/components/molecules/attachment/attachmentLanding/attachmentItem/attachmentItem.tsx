import { motion } from "framer-motion";
import { Loader, Trash2 } from "lucide-react";
import Image from "next/image";
import { AttachmentItemProps } from "../../useAttachment";
import { Button } from "../../../../atoms/button";
import Typography from "@repo/ui/components/typography";

const AttachmentItem = ({
  file,
  canDeleteFile,
  handleRemove,
}: AttachmentItemProps) => {
  const handleClick = () => {
    handleRemove(file.id || file.name);
  };
  return (
    <div
      title={file.name}
      className="rounded-lg w-[60px] h-[60px] bg-white relative flex justify-center items-center"
    >
      {file.loading ? (
        <div className="z-10 flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-60">
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
        <Typography className="text-foreground">{file.type}</Typography>
      )}
      {file.loading || (!canDeleteFile && file?.previousUploaded) ? null : (
        <Button
          onClick={handleClick}
          className="p-0 flex justify-center items-center absolute top-0 bg-error right-0 w-[20px] h-[20px] rounded-sm hover:bg-error"
        >
          <Trash2 color="#fff" size={14} />
        </Button>
      )}
    </div>
  );
};

export { AttachmentItem };
