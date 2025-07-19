import { Search } from "lucide-react";

import { Chip } from "@repo/ui/components/atoms/chip";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/components/atoms/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/atoms/table";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Input } from "@repo/ui/components/molecules/input";

// Or your icon library

const salesData = [
  {
    status: "completed",
    date: "25 Jun 2025",
    product: "Minimal UI Kit",
    tendered: "$24.00",
    earning: "$14.00",
  },
  {
    status: "completed",
    date: "26 Jun 2025",
    product: "Mobile App Template",
    tendered: "$30.00",
    earning: "$18.50",
  },
  // ...add the rest of your data here
];

const SalesPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Typography variant="heading/lg" weight="bold">
          Sales
        </Typography>
        <div className="w-80">
          <Input
            placeholder="Search Sales"
            iconRight={<Search className="w-5 h-5 text-muted-foreground" />}
          />
        </div>
      </div>
      <div className="bg-card rounded-xl p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Tendered</TableHead>
              <TableHead>Earning...</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12">
                  <Typography
                    variant="heading/lg"
                    weight="medium"
                    className="text-muted-foreground"
                  >
                    No sales found.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              salesData.map((sale, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Chip variant="success" size="sm">
                      {sale.status}
                    </Chip>
                  </TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.product}</TableCell>
                  <TableCell>{sale.tendered}</TableCell>
                  <TableCell>{sale.earning}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {salesData.length > 0 && (
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesPage;
