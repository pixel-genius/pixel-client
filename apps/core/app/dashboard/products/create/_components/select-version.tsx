import { UseGetProductVersions } from "@repo/apis/core/shop/product-version/flat/get/use-get-product-versions";
import { Select } from "@repo/ui/components";

const SelectVersion = ({ productId }: { productId: string }) => {
  const { data, isLoading } = UseGetProductVersions({
    params: {
      productId,
    },
  });

  return (
    <Select
      id="version-select"
      placeholder="Select a version"
      size="lg"
      options={data?.data?.data?.map((item) => ({
        label: item.version,
        value: item.id.toString()
      })) || []}
    />
  );
};

export { SelectVersion };
