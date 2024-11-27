import AttachmentIcon from "@repo/icons/attachment";
import { useRef } from "react";
import { Button } from "../../button";
import { Card } from "../../card";
import { AttachmentProps, useAttachment } from "../useAttachment";
import { AttachmentItem } from "./attachmentItem/attachmentItem";
import { ScrollArea } from "../../scroll-area";

const AttachmentLanding = (props: AttachmentProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { title, multiple = false, maxSize = 10, allowedTypes } = props;

  const { files, allowedTypesText, handleChange } = useAttachment(props);
  console.log(files);
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
            {files.length ? (
              <ScrollArea>
                <div className="flex flex-row gap-2">
                  {files.map((file) => (
                    <AttachmentItem
                      key={file.name + file.size}
                      name={file.name}
                    />
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <>
                <AttachmentIcon />
                <div className="flex flex-col gap-3">
                  <p className="text-sm">Select a file or drag and drop here</p>
                  <span className="text-xs text-white/40">
                    {allowedTypesText} , file size no more than {maxSize}MB
                  </span>
                </div>
              </>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-primary-500 text-primary-500 rounded-lg"
            onClick={handleClickSelect}
          >
            Select File
          </Button>
        </div>
      </Card>
    </div>
  );
};

export { AttachmentLanding };
