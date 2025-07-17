"use client";

import { Button } from "@repo/ui/components/atoms/button";
import { TabContent } from "@repo/ui/components/molecules/tabs/tab-content";
import { TabList } from "@repo/ui/components/molecules/tabs/tab-list";
import { TabProvider } from "@repo/ui/components/molecules/tabs/tab-provider";
import { TabTrigger } from "@repo/ui/components/molecules/tabs/tab-trigger";
import { FormProvider, useForm } from "react-hook-form";
import { AdminChatTab } from "./_components/admin-chat/admin-chat-tab";
import { FilesTab } from "./_components/files-tab";
import { GeneralTab } from "./_components/general-tab";
import { ImagesTab } from "./_components/images-tab";
import { VersionTab } from "./_components/version-tab";

const CreateProductPage = () => {
  const methods = useForm<{ price: string; discount: number | null }>();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col flex-1 "
      >
        <div className="flex-1 flex flex-col min-h-0">
          <TabProvider defaultValue="general" variant="outline">
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
            <div className="py-6 rounded-lg flex-1 flex flex-col min-h-0">
              <TabContent value="general">
                <GeneralTab />
              </TabContent>
              <TabContent value="preview">
                <ImagesTab />
              </TabContent>
              <TabContent value="file">
                <FilesTab />
              </TabContent>

              {/* For Edit Mode Only */}
              <TabContent value="version" className="bg-t">
                <VersionTab />
              </TabContent>
              <TabContent value="chat" className="flex-1 flex flex-col min-h-0">
                <AdminChatTab />
              </TabContent>
            </div>
          </TabProvider>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateProductPage;
