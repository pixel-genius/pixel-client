"use client";
import CirclePlusIcon from "@repo/icons/circle-plus";
import { Button } from "@repo/ui/components/button";
import Typography from "@repo/ui/components/typography";
import { useState } from "react";
import { ProductTabs } from "./_components/tabs/productTabs";
import { ProductTable } from "./_components/table/productTable";

const tabs = [
  { value: "all", label: "Products" },
  { value: "drafts", label: "Drafts" },
];

const ProductsListPage = () => {
  const [productTab, setProductTab] = useState<string>(tabs[0]?.value || "");

  return (
    <div className="py-5">
      <Typography variant="heading/md" className="mb-4">
        Products
      </Typography>
      <div className="flex flex-row justify-between items-center w-full mb-4">
        <ProductTabs tabs={tabs} setProductTab={setProductTab} />
        <Button variant="primary" size="lg">
          <CirclePlusIcon />
          Add Product
        </Button>
      </div>
      <ProductTable />
    </div>
  );
};
export default ProductsListPage;
