import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "@repo/ui/components/multi-select";

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
    id: {
      control: "text",
    },
    variant: {
      control: "radio",
      options: ["default", "secondary", "destructive", "inverted"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    maxCount: { control: "number" },
    disabled: { control: "boolean" },
    hasChevronIcon: { control: "boolean" },
    modalPopover: { control: "boolean" },
    asChild: { control: "boolean" },
    animation: {
      control: "number",
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    maxCount: 6,
    size: "sm",
    chipVariant: "secendery",
    disabled: false,
    animation: 2,
    label: "Select",
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
    id: "1",
    options: frameworksList,
  },
};
export const DefaultValue: Story = {
  args: {
    id: "2",
    options: frameworksList,
    defaultValue: ["next.js"],
  },
};

export const Secondary: Story = {
  args: {
    id: "3",
    options: frameworksList,
  },
};

export const Destructive: Story = {
  args: {
    id: "4",
    options: frameworksList,
  },
};

export const Inverted: Story = {
  args: {
    id: "5",
    options: frameworksList,
  },
};

export const NoIcon: Story = {
  args: {
    id: "5",
    noChevronIcon: true,
    options: frameworksList,
  },
};
