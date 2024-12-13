"use client";
import { AttachmentAdmin } from "@repo/ui/components/attachment/attachmentAdmin/attachmentAdmin";
import { AttachmentLanding } from "@repo/ui/components/attachment/attachmentLanding/attachmentLanding";

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
    </div>
  );
}
