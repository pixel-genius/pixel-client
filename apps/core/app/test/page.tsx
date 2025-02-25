import { Input } from "@repo/ui/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

const Page = () => {
  return (
    <div className="container flex flex-wrap gap-6 min-h-screen w-full justify-center p-10">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Release date</SelectLabel>
            <SelectItem value="Popularity">Popularity</SelectItem>
            <SelectItem value="Highest price">Highest price</SelectItem>
            <SelectItem value="Lowest price">Lowest price</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input label="Label" placeholder="Placeholder" helperText="Helper Text" />
    </div>
  );
};

export default Page;
