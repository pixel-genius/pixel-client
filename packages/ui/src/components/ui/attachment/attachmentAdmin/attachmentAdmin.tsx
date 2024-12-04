import { useRef } from "react";
import { Card } from "../../card";
import AttachmentIcon2 from "@repo/icons/attachment2";
import { AttachmentProps, useAttachment } from "../useAttachment";

const AttachmentAdmin = (props: AttachmentProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { title, multiple = false, maxSize = 10, allowedTypes } = props;
  const { handleChange, files, setFiles } = useAttachment(props);

  return (
    <Card className="bg-[#26262666] p-4 border-0">
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
  );
};
export { AttachmentAdmin };
