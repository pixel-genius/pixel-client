import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import Typography from "@repo/ui/components/typography";
import { useState } from "react";

interface ProductTablePageProps {
  page?: number;
  limit: number;
  total: number;
  onChange?: (pageNum: string) => void;
}

const ProductTablePages = (props: ProductTablePageProps) => {
  const { page = 1, total, limit, onChange } = props;
  const [selectPage, setSelectPage] = useState<string>(String(page));
  const getPages = () => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / limit); i++) {
      pages.push(i);
    }
    return pages;
  };
  return total === 0 ? null : (
    <div className="flex items-center gap-[16px]">
      <Typography variant="label/sm" component="span">
        Page
      </Typography>
      <Select
        value={selectPage}
        onValueChange={(value) => {
          setSelectPage(value);
          onChange?.(value);
        }}
      >
        <SelectTrigger className="max-w-[65px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {getPages().map((number) => (
            <SelectItem value={String(number)}>{number}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Typography variant="label/sm">Of {total}</Typography>
    </div>
  );
};
export { ProductTablePages };
