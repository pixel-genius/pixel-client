import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from "@repo/ui/components";
import Image from "next/image";
import { IconDownload } from '@tabler/icons-react';

interface PurchaseCardProps {
  title: string;
  imageSrc: string;
  purchaseDate: string;
  versions: { value: string; label: string }[];
  onDownload?: () => void;
}

export const PurchaseCard = ({
  title,
  imageSrc,
  purchaseDate,
  versions,
  onDownload,
}: PurchaseCardProps) => {
  return (
    <div className="bg-card w-full flex gap-4 flex-row items-center justify-between rounded-lg p-4 shadow-md">
      <div className="flex flex-row gap-4">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <Typography variant="heading/sm" weight="medium">
            {title}
          </Typography>
          <div className="flex gap-2 items-center">
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {versions.map((version) => (
                      <SelectItem key={version.value} value={version.value}>
                        {version.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <Typography
                variant="label/sm"
                className="text-muted-foreground"
                weight="normal"
              >
                Purchase Date: {purchaseDate}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button iconLeft={<IconDownload />} variant="primary" onClick={onDownload}>
          Download
        </Button>
      </div>
    </div>
  );
};