import { Typography } from "@repo/ui/components";
import { PurchaseCard } from "../_components/PurchaseCard";
import Image from "next/image";

const Purchases = () => {
  // Sample purchase data
  const purchases = [
    {
      id: 1,
      title: "News App UI KIT",
      imageSrc: "/images/product-placeholder.jpg",
      purchaseDate: "2 Days ago",
      versions: [
        { value: "1.0.4", label: "Version: 1.0.4 (Latest)" },
        { value: "0.0.4", label: "Version: 0.0.4" },
        { value: "0.0.3", label: "Version: 0.0.3" },
      ],
    },
   
    {
      id: 3,
      title: "Dashboard UI Kit",
      imageSrc: "/images/product-placeholder.jpg",
      purchaseDate: "1 Month ago",
      versions: [
        { value: "3.1.0", label: "Version: 3.1.0 (Latest)" },
        { value: "3.0.0", label: "Version: 3.0.0" },
        { value: "2.9.0", label: "Version: 2.9.0" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <Typography className="text-center text-4xl font-bold">
          Purchases
        </Typography>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {purchases.length > 0 ? (
            purchases.map((purchase) => (
              <PurchaseCard
                key={purchase.id}
                title={purchase.title}
                imageSrc={purchase.imageSrc}
                purchaseDate={purchase.purchaseDate}
                versions={purchase.versions}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <Image
                src="/images/vector.svg"
                alt="No purchases"
                width={200}
                height={200}
                className="mb-6"
              />
              <Typography className="text-center text-xl font-medium mb-2">
              No purchases yet.
              </Typography>
              <Typography className="text-center text-muted-foreground">
                You haven't made any purchases yet. Browse our marketplace to find amazing products!
              </Typography>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Purchases;
