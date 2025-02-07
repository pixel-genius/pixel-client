import Chevrondownicon from "@repo/icons/chevron-down";
import Hearticon from "@repo/icons/heart";
import { Button } from "@repo/ui/components/button";
import { FoundationColor } from "@repo/ui/components/foundation-color";
import { Input } from "@repo/ui/components/input";
import Typography from "@repo/ui/components/typography";

type ButtonGroup = {
  label: string; // Describes the group of buttons
  variants: Array<"primary" | "secondary" | "tertiary">; // The button variants
  sizes: Array<"sm" | "md" | "lg">; // The button sizes
  isLoading: boolean; // Indicates if the button is in a loading state
  disabled: boolean; // Indicates if the button is disabled
  state?: "success" | "warning" | "error"; // Optional status color
};

const buttonData: ButtonGroup[] = [
  {
    label: "Default",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: false,
    state: undefined,
  },
  {
    label: "Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: true,
    disabled: false,
    state: undefined,
  },
  {
    label: "Disabled",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: true,
    state: undefined,
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
    label: "Success Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: true,
    disabled: false,
    state: "success",
  },
  {
    label: "Success Disabled",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: true,
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
    label: "Warning Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: true,
    disabled: false,
    state: "warning",
  },
  {
    label: "Warning Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: true,
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
  {
    label: "Error Disabled",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: true,
    disabled: false,
    state: "error",
  },
  {
    label: "Error Loading",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    isLoading: false,
    disabled: true,
    state: "error",
  },
];

const Page = () => {
  return (
    <div className="container flex flex-wrap  gap-6 min-h-screen w-full  justify-center  p-10">
      <div>
        <Typography variant="heading/xs">Foundation Button</Typography>
        <div className="bg-card flex-col p-6 px-8 rounded flex gap-10">
          {buttonData.map((group, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-4">
              {/* <p className="w-20">{group.label}</p> */}
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
      </div>

      {/* Input */}

      <div>
        <Typography variant="heading/xs">Foundation Input</Typography>
        <div className="bg-card p-4 px-8 rounded flex gap-10">
          <div className="flex flex-col items-center  gap-4  justify-evenly">
            <Input placeholder="Placeholder size: sm" size="sm" />
            <Input label="label" placeholder="Placeholder size: md" size="md" />
            <Input
              placeholder="Placeholder size: lg"
              helperText="Helper Text"
              size="lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: sm"
              size="sm"
            />
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: md"
              size="md"
              error="Error Message"
            />
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: lg"
              size="lg"
              error="Error Message"
            />
          </div>
        </div>
      </div>

      <FoundationColor />
    </div>
  );
};

export default Page;
