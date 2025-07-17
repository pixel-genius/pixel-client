import { Typography } from "@repo/ui/components/atoms/typography";
import Instagram from "@repo/icons/instagram";
import Chevronrighticon from "@repo/icons/chevron-right";
import { DesignToolIcons } from "./design-tool-icons";
import { ProductActions } from "./product-actions";

export const ProductHeader = () => {
  return (
    <div className="flex flex-col gap-4 pb-36 shrink-0 min-w-[50vw] overflow-hidden bg-background h-full justify-end px-4">
      <div className="space-y-2">
        <Typography variant="display/sm" weight="bold">
          Dyser - Finance Admin Dashboard UI Kit
        </Typography>
      </div>
      <div>
        <Typography variant="heading/sm" weight="light">
          Payment and Subscription Management Web App
        </Typography>
      </div>

      {/* Category */}
      <div className="flex items-center text-muted-foreground gap-1">
        <div className="flex items-center gap-1">
          <Instagram size={24} />
          <Typography variant="label/xs" weight="light">
            Pixeam
          </Typography>
        </div>
        <Chevronrighticon size={24} />
        <div className="flex items-center gap-1">
          <Typography variant="label/xs" weight="light">
            Figma Resources
          </Typography>
        </div>
        <DesignToolIcons />
      </div>

      <ProductActions />
    </div>
  );
};
