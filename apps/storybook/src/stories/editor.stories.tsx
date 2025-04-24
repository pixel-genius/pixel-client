import { RichTextEditor } from "@repo/ui/components/editor/editor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextEditor> = {
  title: "Components/RichTextEditor",
  component: RichTextEditor,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    defaultValue: { control: "text" },
    onChange: { action: "onChange" },
    className: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    id: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Rich Text Editor",
    helperText: "You can enter rich text here.",
    defaultValue: "<p>Initial content</p>",
  },
};

export const WithError: Story = {
  args: {
    label: "Rich Text Editor",
    helperText: "This editor has an error.",
    defaultValue: "<p>Initial content with error</p>",
    error: "This is an error message.",
  },
};

export const CustomClass: Story = {
  args: {
    label: "Rich Text Editor",
    helperText: "This editor has a custom class.",
    defaultValue: "<p>Initial content with custom class</p>",
    className: "custom-editor-class",
  },
};
