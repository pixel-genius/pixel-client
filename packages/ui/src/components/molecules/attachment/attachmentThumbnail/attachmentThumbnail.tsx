import AttachmentIcon2 from "@repo/icons/attachment2";
import Avatar from "@repo/icons/avatar";
import Refresh from "@repo/icons/refresh";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Heart, Loader } from "lucide-react";
import Image from "next/image";
import { AttachmentProps, useAttachment } from "../useAttachment";
import { useState } from "react";
import { Card } from "../../../atoms/card";
import Typography from "@repo/ui/components/typography";

export interface AttachmentThumbnailProps extends AttachmentProps {
  avatar?: string;
  price: number;
  priceUnit?: string;
  productName: string;
  username: string;
}
const AttachmentThumbnail = (
  props: Omit<AttachmentProps, "multiple" | "allowedTypes"> &
    AttachmentThumbnailProps,
) => {
  const [showRefresh, setShowRefresh] = useState<boolean>(false);
  const {
    avatar,
    allowedTypes = ["jpg", "jpeg"],
    price = 0,
    priceUnit = "$",
  } = props;
  const {
    inputFileRef,
    handleDrop,
    handleChange,
    files,
    allowedTypesText,
    handleDragOver,
  } = useAttachment({ ...props, allowedTypes: ["jpg", "jpeg"] });

  return (
    <Card
      className="bg-card py-3 px-4 border-0"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={inputFileRef}
        className="hidden"
        multiple={false}
        onChange={handleChange}
        accept={
          allowedTypes?.length
            ? allowedTypes.map((type) => `image/${type}`).join(", ")
            : ""
        }
      />
      <div
        onMouseOver={() => {
          setShowRefresh(true);
        }}
        onMouseOut={() => {
          setShowRefresh(false);
        }}
        className="flex flex-wrap relative py-9 mb-1 rounded-lg justify-center border-dashed border-[0.76px]"
      >
        <AnimatePresence>
          {files[0]?.loading ? (
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
                <Loader color="#fff" size={30} />
              </motion.span>
            </div>
          ) : null}

          {files.length ? (
            <>
              {showRefresh ? (
                <motion.div
                  className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#26262699]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "circIn",
                  }}
                >
                  <motion.span
                    className="cursor-pointer"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.1,
                      ease: "circIn",
                    }}
                  >
                    <Refresh />
                  </motion.span>
                </motion.div>
              ) : null}
              <Image
                fill
                src={files[0]?.fileUrl || ""}
                alt={files[0]?.name || ""}
              />
            </>
          ) : (
            <>
              <AttachmentIcon2 />
              <div className="flex flex-wrap justify-center w-full gap-2">
                <Typography
                  component="p"
                  className="text-sm text-card-foreground"
                >
                  Drag & drop image to upload, or
                </Typography>
                <Typography
                  onClick={() => {
                    inputFileRef.current?.click();
                  }}
                  className="text-primary text-sm hover:cursor-pointer"
                >
                  browse
                </Typography>
                <Typography
                  component="p"
                  className="w-full text-xs text-white/40 text-center"
                >
                  1208x840px size required in {allowedTypesText} format only.
                </Typography>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap justify-between text-base mb-2">
        <Typography className="text-base font-bold">News App UI KIT</Typography>
        <Typography className="text-base font-semibold">
          {price}
          {priceUnit}
        </Typography>
      </div>
      <div className="flex flex-wrap justify-between text-base">
        <div className="flex flex-wrap items-center gap-1">
          {avatar ? (
            <img className="size-4 flex-none rounded-full" src="" alt="" />
          ) : (
            <Avatar />
          )}
          <Typography className="text-[10px] font-normal">
            Ali Ebrahimi Kashef
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <span className="cursor-pointer">
            <Heart size={18} color="#6751D6" />
          </span>
          <span className="cursor-pointer">
            <Eye size={21} color="#6751D6" />
          </span>
        </div>
      </div>
    </Card>
  );
};
export { AttachmentThumbnail };
