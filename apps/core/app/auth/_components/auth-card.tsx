// styles
// props : children
// <authCard> form  </authCard>

import PixelIcon from "@repo/icons/pxiel";
import exp from "constants";
import { ReactNode } from "react";

const AuthCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-[#262626] w-[450px] rounded-xl ">
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <div>
          <PixelIcon size={86} color="currentColor" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;