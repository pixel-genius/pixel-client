"use client";

import Infosquareroundedicon from "@repo/icons/info-square-rounded";
import { Button } from "@repo/ui/components/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@repo/ui/components/atoms/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@repo/ui/components/atoms/input-otp";
import { Switch } from "@repo/ui/components/atoms/switch";
import { Textarea } from "@repo/ui/components/atoms/textarea";
import { Typography } from "@repo/ui/components/atoms/typography";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dot } from "lucide-react";

interface VersionModalProps {
  open: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
}
interface VersionForm {
  version: string;
  versionNots: string;
  activeVersion: boolean;
}

export const VersionModal = (props: VersionModalProps) => {
  const { open, onOpenChange } = props;

  const form = useForm<VersionForm>({
    defaultValues: {
      version: "",
      versionNots: "",
      activeVersion: false,
    },
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(() => {
    form.watch();
  }, []);

  const RenderVersionInput = useCallback(
    ({ label, inputIndex }: { label: string; inputIndex: number }) => (
      <div className="inline-flex flex-col gap-3 items-center bg-input p-[8px] min-w-[102px]">
        <Infosquareroundedicon size={18} />
        <Typography variant="label/xs" className="!font-normal">
          {label}
        </Typography>
        <InputOTPSlot className="text-2xl font-bold" index={inputIndex} />
      </div>
    ),
    [],
  );
  const submitVersion = handleSubmit((data) => {});

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[618px]">
        <form onSubmit={submitVersion}>
          <DialogHeader>
            <Typography variant="label/lg" className="!font-bold">
              Update to the Latest Version
            </Typography>
            <Typography variant="label/sm" className="!font-normal">
              Please enter the new version to save your updates.
            </Typography>
          </DialogHeader>
          <div className="flex flex-col gap-[10px] py-6">
            <div className="flex flex-col p-4 gap-2 bg-card rounded-lg">
              <Typography variant="label/md">Version</Typography>
              <InputOTP
                {...register("version", { required: "Version is required!" })}
                maxLength={3}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                onChange={(value: string) => {
                  setValue("version", value);
                }}
                autoFocus
              >
                <InputOTPGroup className="gap-[13px] w-full justify-center">
                  <RenderVersionInput label="Major Version" inputIndex={0} />

                  {/* <Typography variant="display/sm">.</Typography> */}
                  <Dot strokeWidth={7} className="mt-5" />

                  <RenderVersionInput label="Minor Version" inputIndex={1} />

                  <Dot strokeWidth={7} className="mt-5" />

                  <RenderVersionInput label="Patches" inputIndex={2} />
                </InputOTPGroup>
              </InputOTP>
              <span className="text-xs text-error">
                {errors.version?.message}
              </span>
            </div>
            <div>
              <Typography className="mb-1" variant="label/xs">
                Version Nots
              </Typography>

              <Textarea
                {...register("versionNots")}
                className="bg-input min-h-[108px] resize-none"
              />
            </div>
            <div className="flex justify-between">
              <Typography variant="label/md">Active Version</Typography>
              <span className="inline-flex items-center gap-[10px]">
                <Typography
                  variant="label/sm"
                  className="text-muted-foreground"
                >
                  {form.getValues("activeVersion") ? "On" : "Off"}
                </Typography>
                <Switch
                  {...register("activeVersion")}
                  onCheckedChange={(checked: boolean) => {
                    setValue("activeVersion", checked);
                  }}
                />
              </span>
            </div>
          </div>
          <DialogFooter className="!justify-start">
            <Button variant="primary">Submit Version</Button>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
