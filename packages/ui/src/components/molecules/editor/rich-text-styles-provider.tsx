import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export const RichTextStylesProvider = ({ children }: PropsWithChildren) => {
  return <div className={cn("prose prose-sm")}>{children}</div>;
};
