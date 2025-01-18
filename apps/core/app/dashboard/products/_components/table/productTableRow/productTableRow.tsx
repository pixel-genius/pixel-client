import Image from "next/image";
import IconHeart from "@repo/icons/heart";
import MessegeIcon from "@repo/icons/message";
import { TableCell, TableRow } from "@repo/ui/components/table";
import Typography from "@repo/ui/components/typography";
import { Badge } from "@repo/ui/components/badge";
import DotsVerticalIcon from "@repo/icons/dotsVertical";

interface ProductTableRowProps {
  rowIndex: number;
  imgSrc?: string;
  productName: string;
  likes?: number;
  comments?: number;
  status: string;
  sales: number;
  version: string;
  earning: string;
  totalPrice: string;
}

const ProductTableRow = (props: ProductTableRowProps) => {
  const {
    rowIndex,
    imgSrc = "/images/product-placeholder.jpg",
    productName,
    status,
    sales,
    version,
    earning,
    likes,
    comments,
    totalPrice,
  } = props;
  //   Crypite - Saas Crypto Currency website design
  return (
    <TableRow className="!bg-card">
      <TableCell className="border-b-2 border-background">
        <Typography variant="label/sm">{rowIndex}</Typography>
      </TableCell>
      <TableCell className="border-b-2 border-background">
        <div className="flex gap-[10px]">
          <div>
            <Image
              src={imgSrc}
              alt="Product Placeholder"
              width={91}
              height={61}
            />
          </div>
          <div className="flex flex-wrap -86">
            <Typography variant="label/sm">{productName}</Typography>
            <div className="flex gap-2 w-full">
              <span className="inline-flex items-center gap-1">
                <IconHeart size={20} />
                <Typography variant="label/sm">{likes || 0}</Typography>
              </span>
              <span className="inline-flex items-center gap-1">
                <MessegeIcon size={20} />
                <Typography variant="label/sm">{comments || 0}</Typography>
              </span>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="border-b-2 border-background">
        <Badge
          className={`!bg-${status === "PUBLISHED" ? "success-400" : "secondary"} p-[8px] rounded-lg`}
        >
          <Typography variant="label/sm">{status}</Typography>
        </Badge>
      </TableCell>
      <TableCell className="border-b-2 border-background">
        <Typography variant="label/sm">
          <span>{sales}</span>
          <span className="text-muted-foreground">({totalPrice})</span>
        </Typography>
      </TableCell>
      <TableCell className="border-b-2 border-background">
        <Typography variant="label/sm">{version}</Typography>
      </TableCell>
      <TableCell className="border-b-2 border-background">{earning}</TableCell>
      <TableCell className="border-b-2 border-background">
        <span className="cursor-pointer">
          <DotsVerticalIcon />
        </span>
      </TableCell>
    </TableRow>
  );
};

export { ProductTableRow };
