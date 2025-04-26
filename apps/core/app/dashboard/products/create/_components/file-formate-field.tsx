"use client";

import React, { useEffect, useState } from "react";
import AfterEffecticon from "@repo/icons/after-effects";
import Belendericon from "@repo/icons/belender";
import Circlxicon from "@repo/icons/circle-x";
import Figmaicon from "@repo/icons/figma";
import { Chip } from "@repo/ui/components";
import { File } from "lucide-react";
import { FileFormatFieldLoading } from "./file-formate-field-loading";

export type FielFromatIcons = "figma" | "belender" | "afterEffect";

export interface FileFormatFieldOption {
  id: number;
  name: string;
  icon: FielFromatIcons;
}

export interface FileFormatFieldProps {
  options: FileFormatFieldOption[];
  isLoading?: boolean;
  onChange: (value: FileFormatFieldOption[]) => void;
  defaultValue?: FileFormatFieldOption[];
  value?: FileFormatFieldOption[]; // Controlled
}

const getFileFormatIcon = (iconName: FielFromatIcons) => {
  const MAP_ICON = {
    figma: <Figmaicon size={16} />,
    belender: <Belendericon size={16} />,
    afterEffect: <AfterEffecticon size={16} />,
  };

  return MAP_ICON[iconName] ?? <File size={16} />;
};

export const FileFormatField: React.FC<FileFormatFieldProps> = ({
  options,
  isLoading,
  onChange,
  defaultValue = [],
  value,
}) => {
  const isControlled = value !== undefined;

  const [selected, setSelected] =
    useState<FileFormatFieldOption[]>(defaultValue);

  useEffect(() => {
    if (!isControlled && defaultValue.length > 0) {
      setSelected(defaultValue);
    }
  }, [defaultValue]);

  const currentSelected = isControlled ? value! : selected;

  const toggleOption = (option: FileFormatFieldOption) => {
    const isSelected = currentSelected.some((item) => item.id === option.id);
    let newSelected: FileFormatFieldOption[];

    if (isSelected) {
      newSelected = currentSelected.filter((item) => item.id !== option.id);
    } else {
      newSelected = [...currentSelected, option];
    }

    if (!isControlled) {
      setSelected(newSelected);
    }

    onChange(newSelected);
  };

  if (isLoading) {
    return <FileFormatFieldLoading count={5} />;
  }

  return (
    <div className="flex gap-2">
      {options.map((option) => {
        const isSelected = currentSelected.some(
          (item) => item.id === option.id,
        );

        return (
          <Chip
            key={option.id}
            size="sm"
            iconLeft={getFileFormatIcon(option.icon)}
            iconRight={isSelected ? <Circlxicon size={16} /> : null}
            variant={isSelected ? "primary" : "secondary"}
            className="cursor-pointer"
            onClick={() => toggleOption(option)}
          >
            {option.name}
          </Chip>
        );
      })}
    </div>
  );
};
