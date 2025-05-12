import { UseGetProductVersions } from "@repo/apis/core/shop/product-version/flat/get/use-get-product-versions";
import { Select } from "@repo/ui/components";

const SelectVersion = ({ productId }: { productId: string }) => {
  const { data, isLoading } = UseGetProductVersions({
    params: {
      productId,
    },
  });

  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <Select
      id="version-select"
      onValueChange={handleChange}
      placeholder="Select a version"
      size="lg"
      loading={isLoading}
      options={data?.data?.data?.map((item) => ({
        label: item.version,
        value: item.id.toString()
      })) || []}
    />
  );
};

export { SelectVersion };
