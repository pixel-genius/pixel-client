import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href="/dashboard/products/create">Create Product</Link>
    </div>
  );
};

export default ProductsPage;
