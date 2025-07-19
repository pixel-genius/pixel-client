import { AttachmentTus } from "@repo/ui/components/molecules/attachment/attachment-tus/attachment-tus";

import { ProductTabContentLayout } from "./product-tab-content-layout";

export const FilesTab = () => {
  return (
    <ProductTabContentLayout title="Files">
      test
      <AttachmentTus
        title="File Product"
        description="Files must be in a ZIP format, with a maximum size of 2 GB."
        type="zip"
      />
    </ProductTabContentLayout>
  );
};
