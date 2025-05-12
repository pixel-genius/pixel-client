import { UseGetProductVersions } from "@repo/apis/core/shop/product-version/flat/get/use-get-product-versions";
import { Select, SelectValue, SelectTrigger, SelectLabel, SelectContent, SelectGroup, SelectItem } from "@repo/ui/components";

const SelectVersion = ({ productId }: { productId: string }) => {
  const { data, isLoading } = UseGetProductVersions({
    params: {
      productId,
    },
  });

  return (
  <Select>
    <SelectTrigger loading={isLoading}>
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
        <SelectGroup>
          {data?.data?.data?.map((item) => (   
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.version}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    )
        
};

export { SelectVersion };
