import AttachmentIcon2 from "@repo/icons/attachment2";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../../atoms/card";
import { ScrollArea } from "../../../atoms/scroll-area";
import { AttachmentProps, useAttachment } from "../useAttachment";
import { AttachmentItem } from "./attachmentItem/attachmentItem";
import Typography from "@repo/ui/components/typography";

const AttachmentAdmin = (props: AttachmentProps) => {
  const { title, multiple = false, maxSize = 10, allowedTypes } = props;
  const { inputFileRef, handleChange, handleRemove, files, allowedTypesText } =
    useAttachment(props);
  return (
    <>
      <Card className="bg-card p-4 border-0 mb-3">
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
          <div className="flex flex-wrap justify-center w-full gap-2 flex-column">
            <Typography className="text-foreground">
              Drag & drop image to upload, or
            </Typography>
            <Typography
              onClick={() => {
                inputFileRef.current?.click();
              }}
              className="text-primary-500 hover:cursor-pointer"
            >
              browse
            </Typography>
            <Typography
              component="p"
              className="text-muted-foreground w-full text-center"
            >
              1208x840px size required in {allowedTypesText} format only.
            </Typography>
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
            <Card className="bg-card p-4 border-0 flex gap-4">
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
