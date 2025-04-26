"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  TabProvider ,
  TabContent,
  TabList,
  TabTrigger,
} from "@repo/ui/components";
import { Button } from "@repo/ui/components";
import { TabGeneral } from "./_components/tabGeneral";

const CreateProductPage = () => {
  const methods = useForm<{ price: string; discount: number | null }>();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabProvider defaultValue="general">
          <div className="flex  justify-between items-center  mb-4">
            <TabList className="mb-0">
              <TabTrigger value="general">General</TabTrigger>
              <TabTrigger value="preview">Images & Previews</TabTrigger>
              <TabTrigger value="file">Files</TabTrigger>
              <TabTrigger value="version">Version</TabTrigger>
              <TabTrigger value="chat">Admin Chat</TabTrigger>
            </TabList>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <div>select version</div>
              <Button variant="secondary">Save as Draft</Button>
              <Button type="submit">Submit to Review</Button>
            </div>
          </div>
          {/* Content */} 
          <div className="bg-card px-4 py-6 rounded-lg">
            <TabContent value="general">
              <TabGeneral />
            </TabContent>
            <TabContent value="preview">preview</TabContent>
            <TabContent value="file">Files</TabContent>
            <TabContent value="version">Version</TabContent>
            <TabContent value="chat">Admin Chat</TabContent>
          </div>
        </TabProvider>
      </form>
    </FormProvider>
  );
};

export default CreateProductPage;
