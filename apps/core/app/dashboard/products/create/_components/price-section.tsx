import { ArrowRight, DollarSign, Percent } from "lucide-react";

import { type FC, useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

import { Button } from "@repo/ui/components/atoms/button";
import { Chip } from "@repo/ui/components/atoms/chip";
import { Switch } from "@repo/ui/components/atoms/switch";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Input } from "@repo/ui/components/molecules/input";
import { cn } from "@repo/ui/lib/utils";

const CUSTOM_VALUE = null;

const DISCOUNT_OPTIONS = [
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
  { label: "30%", value: 30 },
  { label: "40%", value: 40 },
  { label: "50%", value: 50 },
];

const PriceSection = () => {
  const { register, formState, setValue, watch } = useFormContext<{
    price: number | null;
    discount: number | null;
  }>();

  const discount = watch("discount");
  const price = watch("price");

  const [isFree, setIsFree] = useState(false);
  const [isCustomDiscount, setIsCustomDiscount] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);

  const onChangeDiscount = (value: number | null) => {
    console.log("value", value);

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
      setValue("price", null);
      setValue("discount", null);
      setIsCustomDiscount(false);
      setHasDiscount(false);
    }
  }, [isFree]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col gap-1">
          <Typography
            variant="label/lg"
            weight="bold"
            className="text-foreground"
          >
            Choose the right price!
          </Typography>
          <Typography
            variant="label/sm"
            weight="normal"
            className="text-muted-foreground"
          >
            Remember, the right pricing can bring you more sales.
          </Typography>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <Typography
            variant="label/sm"
            weight="medium"
            className="text-muted-foreground"
          >
            Free Product
          </Typography>
          <Switch checked={isFree} onClick={() => setIsFree((prev) => !prev)} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          label="Price"
          type="number"
          className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
          {...register("price")}
          onChange={(e) => {
            let value = +e.target.value;
            if (value < 0) value = 0;
            setValue("price", value);
          }}
          error={formState.errors.price?.message}
          iconRight={<DollarSign size={20} />}
          disabled={isFree}
          value={isFree ? 0 : price?.toString()}
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
                  let value = +e.target.value;
                  if (value > 100) value = 100;
                  if (value < 0) value = 0;

                  setValue("discount", value);
                }}
                type="number"
                error={formState.errors.price?.message}
                className="-mt-2"
                iconRight={<Percent size={20} />}
              />
            ) : (
              DISCOUNT_OPTIONS.map((option) => (
                <Chip
                  key={option.value}
                  onClick={() => {
                    onChangeDiscount(option.value);
                  }}
                  className={cn({ "bg-secondary": discount !== option.value })}
                  tabIndex={0}
                >
                  <Typography>{option.label}</Typography>
                </Chip>
              ))
            )}
            {/* convert input UI same as chip */}

            {!isCustomDiscount ? (
              <Chip
                onClick={() => setIsCustomDiscount((prev) => !prev)}
                className={"bg-secondary"}
              >
                Custom
              </Chip>
            ) : (
              <Button onClick={() => setIsCustomDiscount((prev) => !prev)}>
                Return
              </Button>
            )}
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
              {` ${(price || 0) - getDiscountedValue(price || 0, discount)} $`}
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
    </div>
  );
};

export default PriceSection;
