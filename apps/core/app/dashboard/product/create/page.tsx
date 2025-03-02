"use client";

import { FormProvider, useForm } from "react-hook-form";
import PriceSection from "./_components/price-section";
import { useState } from "react";
import { Switch } from "@repo/ui/components/switch";
import Typography from "@repo/ui/components/typography";

const CreateProductPage = () => {
  const [isFree, setIsFree] = useState(false);

  const methods = useForm<{ price: string; discount: number | null }>();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-background">
        <div className="flex flex-row justify-between items-center gap-2">
          <Typography>Free Product :</Typography>
          <Switch checked={isFree} onClick={() => setIsFree((prev) => !prev)} />
        </div>

        <PriceSection isFree={isFree} />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CreateProductPage;
