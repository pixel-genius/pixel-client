"use client";

import { FormProvider, useForm } from "react-hook-form";
import PriceSection from "./_components/price-section";

const CreateProductPage = () => {
  const methods = useForm<{ price: string; discount: number | null }>();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PriceSection />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CreateProductPage;
