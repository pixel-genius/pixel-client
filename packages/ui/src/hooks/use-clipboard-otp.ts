"use client";
import { useState, useEffect, useCallback } from "react";

interface UseClipboardOtpOptions {
  /** Length of OTP code (default: 6) */
  otpLength?: number;
  /** Pattern to validate OTP characters (default: alphanumeric) */
  pattern?: string | RegExp;
  /** Auto-check clipboard on mount (default: true) */
  autoCheck?: boolean;
  /** Check clipboard on window focus (default: true) */
  checkOnFocus?: boolean;
}

interface UseClipboardOtpReturn {
  /** Extracted OTP from clipboard */
  extractedOtp: string;
  /** Check clipboard manually */
  checkClipboard: () => Promise<void>;
  /** Request clipboard permission explicitly */
  requestPermission: () => Promise<boolean>;
  /** Whether clipboard checking is available */
  isSupported: boolean;
  /** Whether clipboard permission is granted */
  hasPermission: boolean | null;
  /** Whether permission request is in progress */
  isRequestingPermission: boolean;
}

export const useClipboardOtp = (
  options: UseClipboardOtpOptions = {},
): UseClipboardOtpReturn => {
  const {
    otpLength = 6,
    pattern = /^[a-zA-Z0-9]+$/,
    autoCheck = true,
    checkOnFocus = true,
  } = options;

  const [extractedOtp, setExtractedOtp] = useState<string>("");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);

  // Check if clipboard API is supported
  const isSupported =
    typeof navigator !== "undefined" && "clipboard" in navigator;

  const extractOtpFromText = useCallback(
    (text: string): string => {
      if (!text?.trim()) return "";

      // Extract numbers from the text
      const numbersOnly = text.replace(/\D/g, "");

      // Look for a sequence of the specified length
      let otpCode = "";
      if (numbersOnly.length >= otpLength) {
        // If we have enough digits, take the first N
        otpCode = numbersOnly.substring(0, otpLength);
      } else if (numbersOnly.length > 0) {
        // If we have some digits but less than required, try to extract alphanumeric
        const alphanumericMatch = text.match(
          new RegExp(`[a-zA-Z0-9]{${otpLength}}`),
        );
        if (alphanumericMatch) {
          otpCode = alphanumericMatch[0];
        }
      }

      // Validate the extracted OTP
      const regex = typeof pattern === "string" ? new RegExp(pattern) : pattern;
      if (otpCode.length === otpLength && regex.test(otpCode)) {
        return otpCode;
      }

      return "";
    },
    [otpLength, pattern],
  );

  const checkPermissions = useCallback(async (): Promise<boolean> => {
    if (!isSupported) return false;

    try {
      if (navigator.permissions && navigator.permissions.query) {
        const permission = await navigator.permissions.query({
          name: "clipboard-read" as PermissionName,
        });
        const granted = permission.state === "granted";
        setHasPermission(granted);
        console.log("permission", permission);
        return granted;
      }
      return true; // Assume granted if permissions API not available
    } catch (error) {
      setHasPermission(false);
      return false;
    }
  }, [isSupported]);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isSupported) return false;

    setIsRequestingPermission(true);

    try {
      // First check current permission state
      const currentPermission = await checkPermissions();
      if (currentPermission) {
        setIsRequestingPermission(false);
        return true;
      }

      // Request permission by attempting to read clipboard
      // This will trigger browser permission prompt if needed
      await navigator.clipboard.readText();

      // If we get here, permission was granted
      setHasPermission(true);
      setIsRequestingPermission(false);
      return true;
    } catch (error) {
      // Permission denied or error occurred
      setHasPermission(false);
      setIsRequestingPermission(false);
      return false;
    }
  }, [isSupported, checkPermissions]);

  const checkClipboard = useCallback(async (): Promise<void> => {
    if (!isSupported) return;

    try {
      // First ensure we have permission
      const permitted = hasPermission ?? (await requestPermission());
      if (!permitted) {
        setExtractedOtp("");
        return;
      }

      const clipboardText = await navigator.clipboard.readText();
      const otp = extractOtpFromText(clipboardText);
      setExtractedOtp(otp);
    } catch (error) {
      // Clipboard access failed
      setExtractedOtp("");
      setHasPermission(false);
    }
  }, [isSupported, hasPermission, requestPermission, extractOtpFromText]);

  // Listen for permission changes and auto-check clipboard when granted
  useEffect(() => {
    if (!isSupported) return;

    let permissionStatus: PermissionStatus | null = null;
    let handlePermissionChange: (() => void) | null = null;

    const setupPermissionListener = async () => {
      try {
        if (navigator.permissions && navigator.permissions.query) {
          permissionStatus = await navigator.permissions.query({
            name: "clipboard-read" as PermissionName,
          });

          handlePermissionChange = () => {
            const granted = permissionStatus?.state === "granted";
            setHasPermission(granted);
            console.log("permission changed", permissionStatus);

            // Auto-check clipboard when permission is granted
            if (granted) {
              checkClipboard();
            }
          };

          // Listen for permission changes
          permissionStatus.addEventListener("change", handlePermissionChange);

          // Set initial permission state
          handlePermissionChange();
        }
      } catch (error) {
        console.error("Error setting up permission listener:", error);
      }
    };

    setupPermissionListener();

    return () => {
      // Clean up permission listener
      if (permissionStatus && handlePermissionChange) {
        permissionStatus.removeEventListener("change", handlePermissionChange);
      }
    };
  }, [isSupported, checkClipboard]);

  useEffect(() => {
    if (!isSupported || !autoCheck) return;

    // Check clipboard on component mount
    checkClipboard();

    if (!checkOnFocus) return;

    // Check clipboard when window gains focus
    const handleFocus = () => {
      checkClipboard();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [isSupported, autoCheck, checkOnFocus, checkClipboard]);

  return {
    extractedOtp,
    checkClipboard,
    requestPermission,
    isSupported,
    hasPermission,
    isRequestingPermission,
  };
};
