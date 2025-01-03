"use client";
import { AttachmentAdmin } from "@repo/ui/components/attachment/attachmentAdmin/attachmentAdmin";
import { AttachmentLanding } from "@repo/ui/components/attachment/attachmentLanding/attachmentLanding";
import { AttachmentThumbnail } from "@repo/ui/components/attachment/attachmentThumbnail/attachmentThumbnail";

export default function Page() {
  return (
    <div className="mt-[10rem]">
      <AttachmentLanding
        title="Upload Your CV and Portfolio"
        allowedTypes={["pdf", "jpg", "jpeg", "png"]}
        maxSize={10}
        multiple
        onChange={(filesId: number[]) => {
          console.log(filesId);
        }}
        fileCategory="cv"
      />
      <div style={{ height: "50px" }}></div>
      <AttachmentAdmin
        title="Upload Your Portfolio"
        allowedTypes={["pdf", "jpg", "jpeg", "png"]}
        maxSize={10}
        multiple
        fileCategory="portfolio"
        onChange={(filesId: number[]) => {
          console.log(filesId);
        }}
      />
      <div style={{ height: "50px" }}></div>
      <div className="flex justify-center mb-5">
        <div className="w-[367px]">
          <AttachmentThumbnail
            title="Upload Your Portfolio"
            maxSize={10}
            price={40}
            productName="News App UI KIT"
            username="Ali Ebrahimi Kashef"
            fileCategory="portfolio"
            onChange={(filesId: number[]) => {
              console.log(filesId);
            }}
          />
        </div>
      </div>
    </div>
  );
}
