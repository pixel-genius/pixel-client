"use client";

import { FormProvider, useForm } from "react-hook-form";
import PriceSection from "./_components/price-section";
import { useState } from "react";
import { Switch } from "@repo/ui/components/switch";
import Typography from "@repo/ui/components/typography";
import { FileFormatSection } from "./_components/file-formate-section";

const CreateProductPage = () => {
  const [isFree, setIsFree] = useState(false);

  const methods = useForm<{ price: string; discount: number | null }>();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div className="bg-background px-6 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-card">
          <div className="flex flex-col gap-4">
            <div className="width-full h-80 text-center m-auto">
              Product Details
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 px-6">
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="flex flex-col gap-2">
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
                    <Switch
                      checked={isFree}
                      onClick={() => setIsFree((prev) => !prev)}
                    />
                  </div>
                </div>

                <PriceSection isFree={isFree} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full h-80 text-center">Highlights </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <FileFormatSection />
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full h-80">Tags </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateProductPage;
