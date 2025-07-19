"use client";

import React from "react";

import { Typography } from "@repo/ui/components/atoms/typography";

import { FileFormatField } from "./file-format-field";

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
