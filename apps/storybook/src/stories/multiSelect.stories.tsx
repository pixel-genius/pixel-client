import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "@repo/ui/components/multi-select";

const frameworksList = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const meta: Meta = {
  title: "Components/MultiSelect",
  tags: ["autodocs"],
  component: MultiSelect,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    chipVariant: {
      control: "radio",
      options: ["primary", "warning", "danger", "success", "info", "secondary"],
    },
    variant: {
      control: "radio",
      options: ["default", "secondary", "destructive", "inverted"],
    },
    maxCount: { control: "number" },
    disabled: { control: "boolean" },
    hasChevronIcon: { control: "boolean" },
    modalPopover: { control: "boolean" },
    asChild: { control: "boolean" },
    animation: {
      control: "number",
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    maxCount: 6,
    chipVariant: "secendery",
    disabled: false,
    animation: 2,
    placeholder: "Select options",
    hasChevronIcon: false,
    modalPopover: false,
    asChild: false,
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    variant: "default",
    options: frameworksList,
  },
};
export const DefaultValue: Story = {
  args: {
    variant: "default",
    options: frameworksList,
    defaultValue: ["next.js"],
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    options: frameworksList,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    options: frameworksList,
  },
};

export const Inverted: Story = {
  args: {
    variant: "inverted",
    options: frameworksList,
  },
};
