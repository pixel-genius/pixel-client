import AttachmentIcon2 from "@repo/icons/attachment2";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../card";
import { ScrollArea } from "../../scroll-area";
import { AttachmentProps, useAttachment } from "../useAttachment";
import { AttachmentItem } from "./attachmentItem/attachmentItem";

const AttachmentAdmin = (props: AttachmentProps) => {
  const { title, multiple = false, maxSize = 10, allowedTypes } = props;
  const { inputFileRef, handleChange, handleRemove, files } =
    useAttachment(props);

  return (
    <>
      <Card className="bg-[#26262666] p-4 border-0 mb-3">
        <div className="w-full border-dashed border-[0.76px] py-7 flex flex-wrap justify-center">
          <input
            type="file"
            ref={inputFileRef}
            className="hidden"
            multiple={multiple}
            onChange={handleChange}
            accept={
              allowedTypes?.length
                ? allowedTypes.map((type) => `.${type}`).join(",")
                : ""
            }
          />
          <AttachmentIcon2 />
          <div className="flex flex-wrap justify-center w-full gap-2">
            <h5>Drag & drop image to upload, or</h5>
            <span
              onClick={() => {
                inputFileRef.current?.click();
              }}
              className="text-primary-500 hover:cursor-pointer"
            >
              browse
            </span>
            <p className="w-full text-xs text-white/40 text-center">
              1208x840px size required in PNG or JPG format only.
            </p>
          </div>
        </div>
      </Card>
      <AnimatePresence>
        {files.length ? (
          <motion.div
            exit={{ opacity: 0, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="bg-[#26262666] p-4 border-0 flex gap-4">
              <ScrollArea>
                {files.map((file) => (
                  <motion.div
                    exit={{ opacity: 0, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AttachmentItem
                      key={file.name + file.size}
                      file={file}
                      handleRemove={handleRemove}
                    />
                  </motion.div>
                ))}
              </ScrollArea>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export { AttachmentAdmin };
