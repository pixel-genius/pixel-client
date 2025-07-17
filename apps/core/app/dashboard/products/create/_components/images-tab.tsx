import { AttachmentTus } from "@repo/ui/components/molecules/attachment/attachment-tus/attachment-tus";
import { ProductTabContentLayout } from "./product-tab-content-layout";

export const ImagesTab = () => {
  return (
    <ProductTabContentLayout title="Images">
      <div className="flex flex-col gap-6">
        <AttachmentTus
          multiple
          title="Thumbnail Image Upload"
          description="1208x840px size required in PNG or JPG format only."
          endpoint="https://tusd.tusdemo.net/files/"
        />

        <AttachmentTus
          title="4-8 required for approval"
          multiple
          description="Create image at 1800 × 1360 px. Keep images under 4MB and JPEG if possible."
        />

        <AttachmentTus
          title="Full Preview"
          multiple
          description="Create image at 2112 × 5000 px. Keep images under 3MB and JPEG if possible."
        />
      </div>
    </ProductTabContentLayout>
  );
};
