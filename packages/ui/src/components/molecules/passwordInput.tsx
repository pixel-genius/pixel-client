import * as React from "react";
import { EyeIcon, EyeClosed } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { Input } from "./input";
import { Button } from "../atoms/button";
import { textFieldProps } from "./input";

const PasswordInput = React.forwardRef<HTMLInputElement, textFieldProps>(
  ({ className, id, label, error, helperText, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleButton = (
      <Button
        type="button"
        variant="tertiary"
        size="sm"
        className="gap-0 !ring-0 !min-w-fit h-fit hover:bg-transparent transition-none"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <EyeClosed className="h-5 w-5" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    );

    return (
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("hide-password-toggle", className)}
        ref={ref}
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        iconRight={toggleButton}
        {...props}
      />
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
