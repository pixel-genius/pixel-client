import { TabProvider, TabList, TabTrigger, TabContent, Typography } from "@repo/ui/components";
import { ProductCard } from "@repo/ui/components";
import Image from "next/image";
import { ProductList } from "../_constant/mock-product-list";
import { FileFormatSection } from "./_components/file-formate-section";
import { Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@repo/ui/components";
import { IconArrowsSort, IconChevronDown } from '@tabler/icons-react';

const products = ProductList;

const categories = [
  { label: "All Products", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
  { label: "Travel", value: "travel" },
  { label: "Food", value: "food" },
  { label: "Dashboard", value: "dashboard" },
];

const ProductHeader = () => (
  <div className="flex items-center gap-4 justify-end">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="md" iconRight={<IconChevronDown size={24} />}>
          Format
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4">
        <FileFormatSection />
      </DropdownMenuContent>
    </DropdownMenu>

 
  </div>
);

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2 py-56 relative" id="background-image">
        <Image
          src="/images/profile-image.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex flex-col items-center gap-2 z-10">
        <Typography variant="heading/xl" className="text-4xl font-bold text-white">UI Kits</Typography>
        <Typography variant="heading/sm" className="text-white/80">4240 premium UI Kits for mobile & web projects</Typography>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
      </div>
      <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        
      </div>
      <TabProvider defaultValue="all">
        <div className="flex flex-row gap-4 pb-10">
        <TabList>
          {categories.map((cat) => (
            <TabTrigger key={cat.value} value={cat.value}>
              {cat.label}
            </TabTrigger>
          ))}
        </TabList>
        <ProductHeader />

        </div>
        
        <TabContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </TabContent>
        {/* Add more <TabContent value="..."> for other categories if you want filtering */}
      </TabProvider>

      </div>
  
    </div>
  );
};

export default ProductPage;
