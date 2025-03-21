import Typography from "@repo/ui/components/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display/xs",
        "display/sm",
        "display/md",
        "display/lg",
        "heading/xs",
        "heading/sm",
        "heading/md",
        "heading/lg",
        "heading/xl",
        "heading/xxl",
        "label/xs",
        "label/sm",
        "label/md",
        "label/lg",
        "paragraph/xs",
        "paragraph/sm",
        "paragraph/md",
        "paragraph/lg",
        "inherit",
      ],
    },
    weight: {
      control: "select",
      options: [
        "thin",
        "extra-thin",
        "light",
        "normal",
        "medium",
        "semi-bold",
        "bold",
        "extra-bold",
        "black",
      ],
    },
    align: {
      control: "radio",
      options: ["left", "center", "right", "justify"],
    },
    transform: {
      control: "radio",
      options: ["none", "lowercase", "uppercase", "capitalize"],
    },
    decoration: {
      control: "radio",
      options: [
        "none",
        "underline",
        "lineThrough",
        "overline",
        "underlineLineThrough",
      ],
    },
    truncate: {
      control: "boolean",
    },
    component: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: "text",
      defaultValue: "Typography Component Example",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    variant: "paragraph/md",
    weight: "normal",
    align: "left",
    decoration: "none",
    truncate: false,
    component: "p",
    children: "This is a sample text using the Typography component.",
  },
};

// Display Variants
export const DisplayVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="display/xs">Display XS</Typography>
      <Typography variant="display/sm">Display SM</Typography>
      <Typography variant="display/md">Display MD</Typography>
      <Typography variant="display/lg">Display LG</Typography>
    </div>
  ),
};

// Heading Variants
export const HeadingVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="heading/xs">Heading XS</Typography>
      <Typography variant="heading/sm">Heading SM</Typography>
      <Typography variant="heading/md">Heading MD</Typography>
      <Typography variant="heading/lg">Heading LG</Typography>
      <Typography variant="heading/xl">Heading XL</Typography>
      <Typography variant="heading/xxl">Heading XXL</Typography>
    </div>
  ),
};

// Label Variants
export const LabelVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="label/xs">Label XS</Typography>
      <Typography variant="label/sm">Label SM</Typography>
      <Typography variant="label/md">Label MD</Typography>
      <Typography variant="label/lg">Label LG</Typography>
    </div>
  ),
};

// Paragraph Variants
export const ParagraphVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="paragraph/xs">Paragraph XS</Typography>
      <Typography variant="paragraph/sm">Paragraph SM</Typography>
      <Typography variant="paragraph/md">Paragraph MD</Typography>
      <Typography variant="paragraph/lg">Paragraph LG</Typography>
    </div>
  ),
};
