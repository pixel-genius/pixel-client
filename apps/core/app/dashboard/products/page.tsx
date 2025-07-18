"use client";

import {
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconHeart,
  IconMessage,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/components/atoms/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/atoms/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/atoms/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/atoms/table";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Button } from "@repo/ui/components/atoms/button";
import { Chip } from "@repo/ui/components/atoms/chip";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <Typography variant="heading/md" weight="bold" className="mb-2">
        No Products Found
      </Typography>
      <Typography
        variant="paragraph/sm"
        className="text-muted-foreground text-center mb-6"
      >
        Get started by creating your first product. You can add details, images,
        and set up pricing.
      </Typography>
      <Button iconRight={<IconPlus size={16} />} variant="primary" size="md">
        <Link href="/dashboard/products/create">Create Your First Product</Link>
      </Button>
    </div>
  );
};

const ProductsPage = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [products] = useState<number[]>([]); // Empty array for demonstration

  const handleDeleteClick = (productId: number) => {
    setProductToDelete(productId);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Here you would typically make an API call to delete the product
    console.log("Deleting product:", productToDelete);
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  // const hasProducts = products.length > 0;
  const hasProducts = true;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center gap-4">
          <Typography variant="heading/md" weight="bold" className="">
            Products List
          </Typography>
        </div>
        {hasProducts && (
          <div className="flex items-center gap-2">
            <Button
              iconRight={<IconPlus size={16} />}
              variant="primary"
              size="md"
            >
              <Link href="/dashboard/products/create">Create Product</Link>
            </Button>
          </div>
        )}
      </div>
      <div className="pb-2"></div>

      {!hasProducts ? (
        <div className="bg-card rounded-lg">
          <EmptyState />
        </div>
      ) : (
        <>
          <Table className="bg-card rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Earning</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((id, idx) => (
                <TableRow key={id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          position: "relative",
                          width: 60,
                          height: 60,
                          marginRight: 16,
                        }}
                      >
                        <Image
                          src="/images/product-placeholder.jpg"
                          alt="Product"
                          fill
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500 }}>
                          Crypite - Saas Crypto...
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: 12,
                            color: "#aaa",
                            fontSize: 14,
                            marginTop: 4,
                          }}
                        >
                          <span className="flex items-center gap-2">
                            {" "}
                            <IconHeart size={16} color="#aaa" /> 40
                          </span>
                          <span className="flex items-center gap-2">
                            {" "}
                            <IconMessage size={16} color="#aaa" /> 20
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {idx % 2 === 0 ? (
                      <Chip variant="success" size="sm">
                        Published
                      </Chip>
                    ) : (
                      <Chip variant="secondary" size="sm">
                        Draft
                      </Chip>
                    )}
                  </TableCell>
                  <TableCell>0(0.00$)</TableCell>
                  <TableCell>
                    {["1.5.4", "1.2.5", "0.0.2", "1.2.1"][idx]}
                  </TableCell>
                  <TableCell>0.00$</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <span style={{ cursor: "pointer" }}>
                          <IconDotsVertical size={24} />
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <IconEdit size={16} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconEye size={16} className="mr-2" />
                          View Product
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => handleDeleteClick(id)}
                        >
                          <IconTrash size={16} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" size="md" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="md" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="md">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="md">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" size="md" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 justify-end">
            <Button
              variant="secondary"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              className="bg-destructive hover:bg-destructive/90"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
