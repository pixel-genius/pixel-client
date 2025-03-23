import { Table, TableBody, TableHeader } from "@repo/ui/components/table";
import { ProdcutTableHead } from "./product-table-head/product-table-head";
import { ProductTableRow } from "./product-table-row/product-table-row";
import { ProductTablePages } from "./product-table-pages/product-table-pages";

const ProductTable = () => {
  return (
    <>
      <Table className="mb-4">
        <TableHeader>
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
      <ProductTablePages page={1} limit={10} total={20} />
    </>
  );
};
export { ProductTable };
