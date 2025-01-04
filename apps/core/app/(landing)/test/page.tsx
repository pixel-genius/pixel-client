import React from "react";
import { Button } from "@repo/ui/components/button";
import Instagram from "@repo/icons/instagram";
import PixelIcon from "@repo/icons/pxiel";

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button variant='secondary' statusColor="error" size={'md'} iconLeft={PixelIcon} iconRight={Instagram}>
        Button
      </Button>
    </div>
  );
};

export default Page;
