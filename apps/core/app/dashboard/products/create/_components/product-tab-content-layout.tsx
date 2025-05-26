import { Typography } from "@repo/ui/components";

export const ProductTabContentLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Full-width header */}
      <div className="col-span-full">
        <Typography variant="label/lg" weight="bold">
          {title}
        </Typography>
      </div>
      {children}
    </div>
  );
};
