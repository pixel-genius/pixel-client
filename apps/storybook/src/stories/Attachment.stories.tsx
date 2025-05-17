import { ApiProvider } from "@repo/apis/providers/api-provider";
import {
  AttachmentAdmin,
  AttachmentLanding,
  AttachmentThumbnail,
  AttachmentProps,
  AttachmentThumbnailProps,
} from "@repo/ui/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AttachmentProps & Partial<AttachmentThumbnailProps>> = {
  title: "Components/Attachment",
  tags: ["autodocs"],

  argTypes: {
    title: { control: "text" },
    fileCategory: { control: "radio", options: ["request_author", "product"] },
    onChange: { action: "changed" },
    multiple: { type: "boolean" },
    maxSize: { type: "number" },
    disabled: { type: "boolean" },
    error: { type: "string" },
    canDeleteFile: { type: "boolean" },
    allowedTypes: { control: "object", description: "Array of strings" },
    price: { type: "number" },
    username: { type: "string" },
    priceUnit: { type: "string" },
    productName: { type: "string" },
    avatar: { type: "string" },
  },
  args: {
    multiple: false,
    allowedTypes: ["jpg", "jpeg", "png"],
    fileCategory: "request_author",
    onChange: (fileIds: number[] | []) => {
      console.log(fileIds);
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ✅ **Individual Button Stories**
export const Dashboard: Story = {
  args: {
    title: "Upload Your CV and Portfolio",
    onChange: (filesId: number[]) => {
      console.log(filesId);
    },
    fileCategory: "request_author",
  },
  render: (args) => (
    <ApiProvider>
        <AttachmentAdmin
          title={args.title}
          onChange={args.onChange}
          fileCategory={args.fileCategory}
          allowedTypes={args.allowedTypes}
        />
    </ApiProvider>
  ),
};

export const Landing: Story = {
  args: {
    title: "Upload Your CV and Portfolio",
    onChange: (filesId: number[]) => {
      console.log(filesId);
    },
    fileCategory: "request_author",
    allowedTypes: ["jpg", "jpeg", "png"],
  },
  render: (args) => (
    <ApiProvider>
      <AttachmentLanding
        title={args.title}
        onChange={args.onChange}
        fileCategory={args.fileCategory}
        allowedTypes={args.allowedTypes}
      />
    </ApiProvider>
  ),
};

export const Thumbnail: Story = {
  argTypes: {
    price: { control: "number" },
    productName: { control: "text" },
    username: { control: "text" },
  },
  args: {
    title: "Upload Your CV and Portfolio",
    onChange: (filesId: number[]) => {
      console.log(filesId);
    },
    fileCategory: "request_author",
    allowedTypes: ["jpg", "jpeg", "png"],
    price: 0,
    productName: "",
    username: "", 
  },
  render: (args) => (
    <ApiProvider>
      <AttachmentThumbnail
        price={args.price || 0}
        productName={args.productName || ""}
        username={args.username || ""}
        title={args.title}
        onChange={args.onChange}
        fileCategory={args.fileCategory}
        allowedTypes={args.allowedTypes}
      />
    </ApiProvider>
  ),
};
