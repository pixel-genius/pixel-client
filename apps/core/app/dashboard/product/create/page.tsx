import { Button } from "@repo/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import ProductFile from "./_componets/product-file";
import ProductGeneral from "./_componets/product-general";
import ProductImages from "./_componets/product-images";

const CreateProduct = () => {
  return (
    <div className="container mx-auto w-full ">
      <div className="pt-14">
        <div className="flex justify-between">
          <Tabs defaultValue="account" className="w-full">
            <div className="flex justify-between">
              <TabsList>
                <TabsTrigger value="General">General</TabsTrigger>
                <TabsTrigger value="Images">Images</TabsTrigger>
                <TabsTrigger value="file">file</TabsTrigger>
                <TabsTrigger value="Admin Chat">Admin Chat</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                {/* button */}
                <div>
                  <Button variant="outline" className="px-4 py-2">
                    Save as draft
                  </Button>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    className="px-4 py-2 bg-primary-600"
                  >
                    Submit for review
                  </Button>
                </div>
              </div>
            </div>
            <TabsContent className="" value="General">
              <ProductGeneral />
            </TabsContent>
            <TabsContent value="Images">
              <ProductImages />
            </TabsContent>
            <TabsContent value="file">
              <ProductFile />
            </TabsContent>
            <TabsContent value="Admin Chat">Admin Chat</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
