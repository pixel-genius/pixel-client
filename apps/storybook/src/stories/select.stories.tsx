import { Select } from "@repo/ui/components";
import { Meta, StoryObj } from "@storybook/react";

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
    <Select
      size="sm"
      id="select-1"
      label="select 1"
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
        { label: "Option 4", value: "option-4" },
        { label: "Option 5", value: "option-5" },
      ]}
    />
  ),
};
export const SelectWithGroup: Story = {
  render: () => (
    <Select
      size="sm"
      id="select-2"
      label="select 2"
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "option-1", group: "Options" },
        { label: "Option 2", value: "option-2", group: "Options" },
        { label: "Option 3", value: "option-3", group: "Options" },
        { label: "Option 4", value: "option-4", group: "More Options" },
        { label: "Option 5", value: "option-5", group: "More Options" },
      ]}
    />
  ),
};

export const SelectWithError: Story = {
  render: () => (
    <Select
      size="sm"
      id="select-2"
      placeholder="Custom styling"
      error="Error Message"
      options={[
        { label: "Custom Option 1", value: "custom-option-1" },
        { label: "Custom Option 2", value: "custom-option-2" },
      ]}
    />
  ),
};
export const WithCustomStyling: Story = {
  render: () => (
    <Select
      id="select-2"
      size="sm"
      placeholder="Custom styling"
      className="bg-gray-100 border-gray-300 text-gray-700"
      options={[
        { label: "Custom Option 1", value: "custom-option-1" },
        { label: "Custom Option 2", value: "custom-option-2" },
      ]}
    />
  ),
};
