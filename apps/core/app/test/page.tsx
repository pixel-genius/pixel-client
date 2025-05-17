"use client";

import {
  AttachmentAdmin,
  AttachmentThumbnail,
  AttachmentTus,
} from "@repo/ui/components";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-8 px-10 py-20">
      <h1 className="text-3xl font-bold">TUS Upload Examples</h1>

      {/* Single file upload using the component */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">
          Single File Upload (Component) backend Endpoint
        </h2>
        <AttachmentTus
          type="zip"
          endpoint="http://pixel-core-jot2od-ba9dbe-185-204-171-18.traefik.me/large_upload"
          title="Thumbnail Image Upload"
          description="1208x840px size required in PNG or JPG format only."
          onSuccess={(url, fileName) => {
            console.log(`File ${fileName} uploaded to ${url}`);
          }}
          onAllCompleted={(results) => {
            console.log("All files uploaded:", results);
          }}
          // accept={["jpg", "png"]}
          error="Upload failed. Please try again."
          onChange={(uploads) => {
            console.log("Uploads changed:", uploads);
          }}
          defaultValue={[
            {
              url: "https://example.com/sample.jpg",
              fileName: "sample.jpg",
            },
          ]}
        />
      </div>

      {/* Multiple file upload using the component */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">
          Multiple File Upload (Component)
        </h2>
        <AttachmentTus
          title="Multiple Image Upload"
          multiple
          description="Create image at 1800 × 1360 px. Keep images under 4MB and JPEG if possible."
          onSuccess={(url, fileName) => {
            console.log(`File ${fileName} uploaded to ${url}`);
          }}
          onAllCompleted={(results) => {
            console.log(`All files uploaded:`, results);
          }}
        />
      </div>
    </div>
  );
};

export default Page;
