import { Input } from "@repo/ui/components/input";
import { useFormContext } from "react-hook-form";
import { DollarSign, ArrowRight, Percent } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { type FC, useEffect, useState } from "react";
import Typography from "@repo/ui/components/typography";
import { Switch } from "@repo/ui/components/switch";

const CUSTOM_VALUE = null;

const DISCOUNT_OPTIONS = [
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
  { label: "30%", value: 30 },
  { label: "40%", value: 40 },
  { label: "50%", value: 50 },
];

interface PriceSectionProps {
  isFree: boolean;
}

const PriceSection: FC<PriceSectionProps> = (props) => {
  const { isFree } = props;

  const { register, formState, setValue, watch } = useFormContext<{
    price: string;
    discount: number | null;
  }>();

  const discount = watch("discount");
  const price = watch("price");

  const [isCustomDiscount, setIsCustomDiscount] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);

  const onChangeDiscount = (value: number | null) => {
    setIsCustomDiscount(value === CUSTOM_VALUE);
    setValue("discount", value);
  };

  const getDiscountedValue = (value: number, discount: number) => {
    // Check with backend
    return value * (discount / 100);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isFree) {
      setValue("price", "0");
      setValue("discount", 0);
      setIsCustomDiscount(false);
      setHasDiscount(false);
    }
  }, [isFree]);

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Price"
        {...register("price")}
        error={formState.errors.price?.message}
        iconRight={<DollarSign size={20} />}
        disabled={isFree}
        value={isFree ? 0 : price}
      />

      {/* Discount Chip */}

      <div className="flex flex-row justify-between items-center gap-2">
        <Typography
          variant="label/sm"
          weight="light"
          className="text-foreground"
        >
          Set a discount:
        </Typography>
        <Switch
          checked={hasDiscount}
          disabled={isFree}
          onClick={() => setHasDiscount((prev) => !prev)}
        />
      </div>

      {hasDiscount && (
        <div className="flex flex-row justify-start items-center gap-2">
          {isCustomDiscount ? (
            <Input
              placeholder="custom"
              {...register("discount")}
              onChange={(e) => {
                const value = +e.target.value;
                setValue("discount", value);
              }}
              type="number"
              error={formState.errors.price?.message}
              className="-mt-2"
              iconRight={<Percent size={20} />}
            />
          ) : (
            DISCOUNT_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChangeDiscount(option.value);
                }}
                className={cn(
                  "flex flex-row items-center gap-2 rounded-lg border border-gray-500 h-12 p-2",
                  { "bg-primary": discount === option.value },
                )}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onChangeDiscount(option.value);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal">{option.label}</p>
                </div>
              </button>
            ))
          )}
          {/* convert input UI same as chip */}
          <button
            type="button"
            onClick={() => setIsCustomDiscount((prev) => !prev)}
            className={cn(
              "flex flex-row items-center gap-2 rounded-lg border border-gray-500 h-12 p-2",
              isCustomDiscount ? "bg-primary" : "",
            )}
          >
            {isCustomDiscount ? "Return" : "Custom"}
          </button>
        </div>
      )}
      {/* Result */}

      {discount ? (
        <div
          className={cn(
            "px-4 py-2",
            "bg-background rounded-lg flex flex-row justify-start items-center gap-2 w-fit h-full",
          )}
        >
          <Typography
            variant="label/md"
            weight="medium"
            className="text-foreground"
          >
            After Discount:
          </Typography>
          <Typography
            variant="label/md"
            weight="medium"
            decoration="lineThrough"
          >
            {price || 0}
          </Typography>
          <Typography variant="label/md" weight="medium">
            <ArrowRight size={24} />
          </Typography>
          <Typography variant="label/md" weight="medium">
            {` ${+price - getDiscountedValue(+price, discount)} $`}
          </Typography>
        </div>
      ) : (
        <>
          {price ? (
            <Typography variant="label/md" weight="medium">
              {price} $
            </Typography>
          ) : (
            <></>
          )}
        </>
      )}

      {/* Custom Discount Input */}
    </div>
  );
};

export default PriceSection;
