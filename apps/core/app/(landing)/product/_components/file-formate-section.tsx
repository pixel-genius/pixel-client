"use client";

import React from "react";
import { FileFormatField } from "./file-formate-field";

export const FileFormatSection: React.FC = ({}) => {
  return (
    <div className="p4">
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
            name: "After Effect",
            icon: "afterEffect",
          },
        ]}
      />
    </div>
  );
}; 