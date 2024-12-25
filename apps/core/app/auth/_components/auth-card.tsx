// styles
// props : children
// <authCard> form  </authCard>

import PixelIcon from "@repo/icons/pxiel";

import { ReactNode } from "react";

const AuthCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-[#262626] w-[calc(100% - 32px)] sm:w-[450px] rounded-xl mx-4">
      {/* logo */}
      <div className="w-full px-3 sm:p-7 py-7 flex flex-col items-center gap-4">
        <div>
          <PixelIcon size={86} color="currentColor" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
