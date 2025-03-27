import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@repo/ui/components/button";
import Typography from "@repo/ui/components/typography";
import { Input } from "@repo/ui/components/input";
import Image from "next/image";

const HighlightSection = () => {

  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "highlights",
  });

  const handleAddHighLights = () => {
    if (fields.length < 5) {
      append({ value: "" });
    }
  };

  return (
    <div className="text-left">
      <Typography component="p" variant="label/lg" weight="bold">
        Product Highlights
      </Typography>
      <Typography component="p" variant={"label/sm"} className="text-muted-foreground">
        Enter key features and highlights of your product here (e.g., unique capabilities, special design)
      </Typography>
      {fields.length >= 5 && (
        <Typography component="p" variant={"label/sm"} className="mt-2 text-muted-foreground">
          Maximum you can enter 5 items
        </Typography>
      )}
      <div className="flex justify-center items-center mt-8 w-full mb-2">
        <Button className="w-full" variant="secondary" onClick={handleAddHighLights} disabled={fields.length >= 5}>
        Add Highlights
        </Button>
      </div>
      {fields.length === 0 && <div className="h-100 flex items-center justify-center mt-8"><img src="/images/noHighlights.svg" alt="noHighlights" /></div>}
      {fields.map((field, index) => (
        <Input
          key={field.id}
          {...register(`highlights.${index}.value`)}
          placeholder="Please write your highlight"
          iconRight={<div className="cursor-pointer" onClick={() => remove(index)}><img src="/images/trash.svg" alt="logo" /></div>}
        />
      ))}
    </div>
  );
};

export default HighlightSection;