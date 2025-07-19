import { useState } from "react";

import { Typography } from "@repo/ui/components/atoms/typography";
import { Switch } from "@repo/ui/components/atoms/switch";
import { cn } from "@repo/ui/lib/utils";

export interface VersionItemProps {
  title: string;
  description: string;
  version: string;
  checked: boolean;
  isLastItem?: boolean;
}

export const VersionItem = (props: VersionItemProps) => {
  const [checked, setChecked] = useState<{ checked: boolean }>({
    checked: props.checked,
  });

  return (
    <div
      className={cn(
        "border-b border-solid border-border flex flex-row gap-12 py-6",
        props.isLastItem && "border-b-0",
      )}
      key={props.title}
    >
      <div>
        <Typography variant={"label/lg"} className="font-bold">
          {props.title}
        </Typography>
        <Typography
          variant={"label/lg"}
          weight="normal"
          className="text-foreground"
        >
          {props.version}
        </Typography>
      </div>
      <div>
        <Typography variant={"label/lg"} className="font-bold">
          Version Nots
        </Typography>
        <Typography
          variant="label/sm"
          weight="normal"
          className="text-foreground whitespace-normal"
        >
          {props.description}
        </Typography>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Typography variant={"label/sm"} className="font-medium">
          Deactivate
        </Typography>
        <Switch
          checked={checked.checked}
          onCheckedChange={(value) =>
            setChecked((prev) => ({ ...prev, checked: value }))
          }
        />
        <Typography variant={"label/sm"} className="font-medium">
          Active
        </Typography>
      </div>
    </div>
  );
};
