"use client";

import { File } from "lucide-react";

import React, { useEffect, useState } from "react";

import AfterEffectIcon from "@repo/icons/after-effects";
import { Chip } from "@repo/ui/components/atoms/chip";
import CircleXIcon from "@repo/icons/circle-x";
import BlenderIcon from "@repo/icons/belender";
import FigmaIcon from "@repo/icons/figma";

import { UseGetFileFormats } from "@repo/apis/core/shop/file-formats/get/use-get-file-formats";

export type FielFromatIcons = "figma" | "belender" | "afterEffect";

export interface FileFormatFieldOption {
  id: number;
  name: string;
  icon: FielFromatIcons;
}

export interface FileFormatFieldProps {
  isLoading?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: FileFormatFieldOption[]) => void;
  defaultValue?: FileFormatFieldOption[];
  value?: FileFormatFieldOption[]; // Controlled
}

const getFileFormatIcon = (iconName: FielFromatIcons) => {
  const MAP_ICON = {
    figma: <FigmaIcon size={16} />,
    belender: <BlenderIcon size={16} />,
    afterEffect: <AfterEffectIcon size={16} />,
  };

  return MAP_ICON[iconName] ?? <File size={16} />;
};

export const FileFormatField: React.FC<FileFormatFieldProps> = ({
  onChange,
  defaultValue = [],
  value,
}) => {
  const { data: fileFormats, isPending } = UseGetFileFormats();

  console.log("fileFormats", fileFormats);

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

  if (isPending) {
    return (
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Chip key={index} size="sm" variant="secondary" isLoading={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {fileFormats?.data?.data?.map((option) => {
        const isSelected = currentSelected.some(
          (item) => item.id === option.id,
        );

        return (
          <Chip
            key={option.id}
            size="sm"
            iconLeft={getFileFormatIcon(option.icon as FielFromatIcons)}
            iconRight={isSelected ? <CircleXIcon size={16} /> : null}
            variant={isSelected ? "primary" : "secondary"}
            className="cursor-pointer"
            onClick={() =>
              toggleOption({
                id: option.id,
                name: option.name,
                icon: option.icon as FielFromatIcons,
              })
            }
          >
            {option.name}
          </Chip>
        );
      })}
    </div>
  );
};
