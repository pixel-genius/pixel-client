import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@repo/ui/components/select";

const meta: Meta = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
          <SelectItem value="option-3">Option 3</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>More Options</SelectLabel>
          <SelectItem value="option-4">Option 4</SelectItem>
          <SelectItem value="option-5">Option 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
