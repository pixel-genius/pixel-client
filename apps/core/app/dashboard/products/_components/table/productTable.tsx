import DotsVerticalIcon from "@repo/icons/dotsVertical";
import IconHeart from "@repo/icons/heart";
import MessegeIcon from "@repo/icons/message";
import { Badge } from "@repo/ui/components/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@repo/ui/components/table";
import Typography from "@repo/ui/components/typography";
import Image from "next/image";
import { ProdcutTableHead } from "./productTableHead/productTableHead";
import { ProductTableRow } from "./productTableRow/productTableRow";

const ProductTable = () => {
  return (
    <Table>
      <TableHeader className="mb-1">
        <ProdcutTableHead />
      </TableHeader>
      <TableBody>
        <ProductTableRow
          productName="Crypite - Saas Crypto Currency website design"
          comments={20}
          likes={40}
          earning="0.00$"
          sales={0}
          status="Published"
          version="1.5.4"
          totalPrice="0.00$"
          rowIndex={1}
        />
      </TableBody>
    </Table>
  );
};
export { ProductTable };
