"use client";

import { RichTextEditor } from "@repo/ui/components/editor/editor";

const Page = () => {
  return (
    <div className="p-5">
      <RichTextEditor
        onChange={(html, text) => console.log(html, text)}
        defaultValue="hello"
        value="salam"
        label="badry"
        helperText="ali"
      />
    </div>
  );
};

export default Page;
