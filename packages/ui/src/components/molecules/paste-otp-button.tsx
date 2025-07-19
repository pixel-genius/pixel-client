"use client";

import { Clipboard } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../atoms/button";
import { cn } from "../../lib/utils";

interface PasteOtpButtonProps {
  /** The extracted OTP from clipboard hook */
  extractedOtp: string | null;
  /** Callback function when OTP is pasted */
  // eslint-disable-next-line no-unused-vars
  onPaste: (otp: string) => void;
  /** Loading state */
  isLoading?: boolean;
  /** Custom className for the button */
  className?: string;
  /** Button variant */
  variant?: "primary" | "secondary" | "tertiary";
  /** Custom error message when no OTP found */
  noOtpMessage?: string;
  /** Whether to show the extracted OTP in the button */
  showOtpPreview?: boolean;
}

export const PasteOtpButton = ({
  extractedOtp,
  onPaste,
  isLoading = false,
  className,
  variant = "primary",
  noOtpMessage = "No valid OTP found in clipboard.",
  showOtpPreview = true,
}: PasteOtpButtonProps) => {
  const handlePasteClick = () => {
    if (extractedOtp) {
      onPaste(extractedOtp);
    } else {
      toast.error(noOtpMessage);
    }
  };

  return (
    <Button
      type="button"
      onClick={handlePasteClick}
      variant={variant}
      isLoading={isLoading}
      disabled={!extractedOtp}
      className={cn("flex items-center gap-2 w-full", className)}
      iconLeft={<Clipboard size={16} />}
    >
      {extractedOtp && showOtpPreview ? (
        <span className="flex items-center gap-2">
          <span>Paste OTP:</span>
          <span
            className={cn(
              "font-mono text-sm px-2 py-1 rounded",
              variant === "primary" && "bg-primary",
              variant === "secondary" && "bg-secondary",
              variant === "tertiary" && "bg-tertiary",
            )}
          >
            {extractedOtp.split("").join(" - ")}
          </span>
        </span>
      ) : (
        "Paste OTP"
      )}
    </Button>
  );
};
