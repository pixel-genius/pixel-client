"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";

import { PostProductsRequest } from "@repo/apis/core/shop/products/post/post-products.types";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Input } from "@repo/ui/components/molecules/input";
import { Button } from "@repo/ui/components/atoms/button";

export const HighlightSection = () => {
  const { control, register, getValues } =
    useFormContext<PostProductsRequest>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "versions.0.highlights",
  });

  const handleAddHighLights = () => {
    if (fields.length < 5) {
      append({ value: "" });
    }
  };

  return (
    <div className="text-left">
      <Typography
        component="p"
        variant="label/lg"
        weight="bold"
        className="mb-1"
      >
        Product Highlights
      </Typography>
      <Typography
        component="p"
        variant={"label/sm"}
        className="text-muted-foreground whitespace-normal "
      >
        Enter key features and highlights of your product here (e.g., unique
        capabilities, special design)
      </Typography>

      {fields.length >= 5 && (
        <Typography
          component="p"
          variant={"label/sm"}
          className="mt-2 text-muted-foreground"
        >
          Maximum you can enter 5 items
        </Typography>
      )}

      <div className="flex justify-center items-center mt-6 lg:mt-10 w-full mb-2">
        <Button
          className="w-full"
          variant="secondary"
          onClick={handleAddHighLights}
          disabled={fields.length >= 5}
        >
          Add Highlights
        </Button>
      </div>

      {fields.length === 0 && (
        <div className="h-100 flex items-center justify-center mt-8">
          <Image
            height="123"
            width="217"
            src="/images/noHighlights.svg"
            alt="noHighlights"
          />
        </div>
      )}

      <AnimatePresence initial={false}>
        {fields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, height: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, height: "auto", scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <Input
              {...register(`versions.0.highlights.${index}.value`)}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  const value = getValues(
                    `versions.0.highlights.${index}.value`,
                  );
                  if (!value) remove(index);
                }
              }}
              placeholder="Please write your highlight"
              iconRight={
                <div className="cursor-pointer" onClick={() => remove(index)}>
                  <Trash2Icon />
                </div>
              }
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
