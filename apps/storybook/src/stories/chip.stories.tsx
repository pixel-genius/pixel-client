import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@repo/ui/components/chip";
import { CheckCircle, XCircle } from "lucide-react";

const chipData = [
  {
    label: "Default",
    variants: ["primary", "warning", "danger", "success", "info", "secendery"],
    sizes: ["sm", "md", "lg"],
    disabled: false,
  },
  {
    label: "Disabled",
    variants: ["primary", "warning", "danger", "success", "info", "secendery"],
    sizes: ["sm", "md", "lg"],
    disabled: true,
  },
];

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "warning", "danger", "success", "info", "secendery"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Chip",
    variant: "primary",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Chip",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Chip",
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    children: "Success Chip",
    variant: "success",
  },
};

export const Info: Story = {
  args: {
    children: "Info Chip",
    variant: "info",
  },
};

export const Sizes: Story = {
  args: {
    children: "Chip Size",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates different chip sizes.",
      },
    },
  },
  render: (args) => (
    <div className="flex gap-4">
      <Chip {...args} size="sm">
        Small
      </Chip>
      <Chip {...args} size="md">
        Medium
      </Chip>
      <Chip {...args} size="lg">
        Large
      </Chip>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: "Chip with Icons",
    variant: "primary",
    iconLeft: <CheckCircle size={16} />,
    iconRight: <XCircle size={16} />,
  },
};

export const DisabledState: Story = {
  args: {
    children: "Disabled Chip",
    variant: "primary",
    disabled: true,
  },
};

export const AllChips: Story = {
  render: () => (
    <div className="flex-col p-6 px-8 rounded flex gap-10">
      {chipData.map((group, groupIndex) => (
        <div key={groupIndex} className="flex items-center gap-4">
          <div className="w-32 text-right font-medium text-sm">
            {group.label}
          </div>
          {group.variants.map((variant) =>
            group.sizes.map((size) => (
              <Chip
                key={`${groupIndex}-${variant}-${size}`}
                variant={variant as any}
                size={size as any}
                disabled={group.disabled}
                iconLeft={<CheckCircle size={16} />}
                iconRight={<XCircle size={16} />}
              >
                Chip
              </Chip>
            )),
          )}
        </div>
      ))}
    </div>
  ),
};
