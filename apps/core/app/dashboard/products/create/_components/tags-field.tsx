import { PostProductsRequest } from "@repo/apis/core/shop/products/post/post-products.types";
import { MultiSelect } from "@repo/ui/components/molecules/multi-select";
import { useFormContext } from "react-hook-form";

{
  /* <MultiSelect
id="tags"
label="Tags"
placeholder="Multi Select Tags"
size="md"
options={[
  { label: "Tag 1", value: "tag1" },
  { label: "Tag 2", value: "tag2" },
  { label: "Tag 3", value: "tag3" },
]}
{...register("versions.0.product_tags")}
onChange={(value) => {
  setValue("versions.0.product_tags", value);
}}
error={errors.versions?.[0]?.product_tags?.message}
/> */
}

import { useGetTags } from "@repo/apis/core/shop/tags/get/use-get-tags";
import { useMemo } from "react";

const TagsField = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<PostProductsRequest>();

  const { data: tags, isPending } = useGetTags();

  const options = useMemo(() => {
    return (
      tags?.data?.data?.map((tag) => ({
        label: tag.name,
        value: tag.id.toString(),
      })) ?? []
    );
  }, [tags]);

  console.log("options", options);

  return (
    <MultiSelect
      id="tags"
      label="Tags"
      placeholder="Multi Select Tags"
      size="md"
      loading={isPending}
      options={options}
      {...register("versions.0.product_tags")}
      onChange={(value) => {
        setValue("versions.0.product_tags", value);
      }}
      error={errors.versions?.[0]?.product_tags?.message}
    />
  );
};

export default TagsField;
