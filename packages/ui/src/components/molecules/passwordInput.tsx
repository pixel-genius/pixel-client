import * as React from "react";
import { EyeIcon, EyeClosed } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { BaseInput } from "../atoms/base-input";
import { Button } from "../atoms/button";
import { LabelWraper } from "./label-wrapper";
import { textFieldProps } from "./input";

const PasswordInput = React.forwardRef<HTMLInputElement, textFieldProps>(
  ({ className, id, label, error, helperText, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleEyeIconPosition = React.useMemo(() => {
      if (label && helperText) return "top-[40%] translate-y-[-40%]";
      else if (label) return "top-[92%] translate-y-[-92%]";
      else return "top-[50%] translate-y-[-50%]";
    }, [label, helperText]);

    return (
      <LabelWraper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={cn("relative ", className)}
      >
        <BaseInput
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="tertiary"
          size="sm"
          className={cn(
            "absolute gap-0 right-0 !ring-0 !min-w-fit h-fit hover:bg-transparent transition-none",
            handleEyeIconPosition,
          )}
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
      </LabelWraper>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
