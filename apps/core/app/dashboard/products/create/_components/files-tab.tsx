import { AttachmentTus } from "@repo/ui/components";
import { ProductTabContentLayout } from "./product-tab-content-layout";

export const FilesTab = () => {
  return (
    <ProductTabContentLayout title="Files">
      <AttachmentTus
        title="File Product"
        description="Files must be in a ZIP format, with a maximum size of 2 GB."
        // endpoint="http://pixel-core-app-w4nxid-6b3ac3-185-204-171-18.traefik.me/large_upload/"
        // endpoint="https://api.pixelgenius.ir/large_upload/"
        endpoint="http://localhost:8000/large_upload/"
      />
    </ProductTabContentLayout>
  );
};
