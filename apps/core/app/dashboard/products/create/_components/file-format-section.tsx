"use client";

import React from "react";
import { FileFormatField } from "./file-format-field";
import { Typography } from "@repo/ui/components";

export const FileFormatSection: React.FC = ({}) => {
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
        }}
        options={[
          {
            id: 1,
            name: "Figma",
            icon: "figma",
          },
          {
            id: 2,
            name: "afterEffect",
            icon: "afterEffect",
          },
        ]}
      />
    </div>
  );
};
