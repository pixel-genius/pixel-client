import { motion } from "framer-motion";
import AttachmentIcon from "@repo/icons/attachment";
import { Button } from "../../../atoms/button";
import { AnimatePresence } from "framer-motion";
import { Card } from "../../../atoms/card";
import { ScrollArea } from "../../../atoms/scroll-area";
import { AttachmentProps, useAttachment } from "../useAttachment";
import { AttachmentItem } from "./attachmentItem/attachmentItem";

const AttachmentLanding = (props: AttachmentProps) => {
  const { title, multiple = false, maxSize = 10, allowedTypes } = props;

  const { inputFileRef, files, allowedTypesText, handleChange, handleRemove } =
    useAttachment(props);

  const handleClickSelect = () => {
    inputFileRef.current?.click();
  };
  return (
    <div className="flex flex-wrap gap-2">
      <h5 className="w-full">{title}</h5>
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
      <Card className="w-full border-dashed border-[0.76px] p-3">
        <div className="flex flex-row flex-flex-wrap items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <AnimatePresence>
              {files.length ? (
                <ScrollArea>
                  <div className="flex flex-row gap-2">
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
                  </div>
                </ScrollArea>
              ) : (
                <>
                  <AttachmentIcon />
                  <div className="flex flex-col gap-3">
                    <p className="text-sm">
                      Select a file or drag and drop here
                    </p>
                    <span className="text-xs text-white/40">
                      {allowedTypesText} , file size no more than {maxSize}MB
                    </span>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
          <Button variant="primary" size="sm" onClick={handleClickSelect}>
            Select File
          </Button>
        </div>
      </Card>
    </div>
  );
};

export { AttachmentLanding };
