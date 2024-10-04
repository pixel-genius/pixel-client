import { ModalCard, ModalCardProps } from "@repo/ui/components/modal-card";
import { cn } from "@repo/ui/lib/utils";

export const ProfileCard = (props: ModalCardProps) => {
  return (
    <ModalCard
      {...props}
      className={cn("bg-gray-900 rounded-lg p-5", props.className)}
    />
  );
};
