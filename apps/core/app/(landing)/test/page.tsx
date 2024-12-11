import { AttachmentAdmin } from "@repo/ui/components/attachment/attachmentAdmin/attachmentAdmin";
import { AttachmentLanding } from "@repo/ui/components/attachment/attachmentLanding/attachmentLanding";

export default function Page() {
  return (
    <>
      <AttachmentLanding
        title="Upload Your CV and Portfolio"
        allowedTypes={["pdf", "jpg", "jpeg", "png"]}
        maxSize={10}
        multiple
        onChange={(filesId: number[]) => {}}
        fileCategory="cv"
      />
      <AttachmentAdmin
        title="Upload Your Portfolio"
        allowedTypes={["pdf", "jpg", "jpeg", "png"]}
        maxSize={10}
        multiple
        fileCategory="portfolio"
        onChange={(filesId: number[]) => {}}
      />
    </>
  );
}
