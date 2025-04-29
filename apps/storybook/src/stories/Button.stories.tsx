import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/components";
import Chevrondownicon from "@repo/icons/chevron-down";
import Hearticon from "@repo/icons/heart";
import { Typography } from "@repo/ui/components";

type ButtonGroup = {
  label: string;
  variants: Array<"primary" | "secondary" | "tertiary">;
  sizes: Array<"sm" | "md" | "lg">;
  isLoading: boolean;
  disabled: boolean;
  state?: "success" | "warning" | "error";
};

const buttonData: ButtonGroup[] = [
  {
    label: "Default",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: false,
  },
  {
    label: "Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: true,
    disabled: false,
  },
  {
    label: "Disabled",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: true,
  },
  {
    label: "Success",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: false,
    state: "success",
  },
  {
    label: "Warning",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: false,
    state: "warning",
  },
  {
    label: "Error",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: false,
    state: "error",
  },
];

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    state: {
      control: "radio",
      options: [undefined, "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ✅ **Individual Button Stories**
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

export const Sizes: Story = {
  args: {
    children: "Button Size",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates different button sizes.",
      },
    },
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: "Button with Icons",
    variant: "primary",
    iconLeft: <Hearticon />,
    iconRight: <Chevrondownicon />,
  },
};

export const LoadingState: Story = {
  args: {
    children: "Loading...",
    variant: "primary",
    isLoading: true,
  },
};

export const DisabledState: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const SuccessState: Story = {
  args: {
    children: "Success",
    variant: "primary",
    state: "success",
    iconLeft: <Hearticon />,
  },
};

export const WarningState: Story = {
  args: {
    children: "Warning",
    variant: "primary",
    state: "warning",
    iconLeft: <Hearticon />,
  },
};

export const ErrorState: Story = {
  args: {
    children: "Error",
    variant: "primary",
    state: "error",
    iconLeft: <Hearticon />,
  },
};

export const AllButtons: Story = {
  render: () => (
    <div className="flex-col p-6 px-8 rounded flex gap-10">
      {buttonData.map((group, groupIndex) => (
        <div key={groupIndex} className="flex items-center gap-4">
          <Typography
            className="w-32"
            component="p"
            align="right"
            variant="label/xs"
          >
            {group.label}
          </Typography>
          {group.variants.map((variant) =>
            group.sizes.map((size) => (
              <Button
                key={`${groupIndex}-${variant}-${size}`}
                variant={variant}
                size={size}
                isLoading={group.isLoading}
                disabled={group.disabled}
                state={group.state}
                iconLeft={<Hearticon />}
                iconRight={<Chevrondownicon />}
              >
                Button
              </Button>
            )),
          )}
        </div>
      ))}
    </div>
  ),
};
