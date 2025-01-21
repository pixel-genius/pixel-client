import { Table, TableBody, TableHeader } from "@repo/ui/components/table";
import { ProdcutTableHead } from "./productTableHead/productTableHead";
import { ProductTableRow } from "./productTableRow/productTableRow";
import { ProductTablePages } from "./productTablePages/productTablePages";

const ProductTable = () => {
  return (
    <>
      <Table className="mb-4">
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
      <ProductTablePages page={1} limit={10} total={20}/>
    </>
  );
};
export { ProductTable };
