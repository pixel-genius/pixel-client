"use client";

import { ArrowLeft } from "lucide-react";

import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@repo/ui/components/atoms/button";
import PixelIcon from "@repo/icons/pxiel";

const AuthCard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-card w-[calc(100% - 32px)] sm:w-[450px] rounded-xl mx-4">
      {/* add back button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="tertiary"
          size="icon"
          onClick={handleBackClick}
          className="hover:bg-secondary/50"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </Button>
      </div>

      {/* logo */}
      <div className="w-full px-3 sm:p-7 py-8 flex flex-col items-center gap-4">
        <div>
          <PixelIcon size={86} color="currentColor" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
