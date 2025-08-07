"use client";

import React from "react";

import { Typography } from "@repo/ui/components/atoms/typography";

import { PostProductsRequest } from "@repo/apis/core/shop/products/post/post-products.types";
import { FileFormatField } from "./file-format-field";
import { useFormContext } from "react-hook-form";

export const FileFormatSection = () => {
  const { setValue } = useFormContext<PostProductsRequest>();

  return (
    <div>
      <div className="mb-8">
        <Typography variant={"label/lg"} className="text-foreground mb-1">
          File Formats Included
        </Typography>
        <Typography variant={"label/sm"} className="text-muted-foreground">
          Specify the file formats that customers can download after purchase.
        </Typography>
      </div>
      <FileFormatField
        onChange={(val) => {
          console.log(val);
          setValue(
            "versions.0.file_formats",
            val.map((v) => v.id),
          );
        }}
      />
    </div>
  );
};
