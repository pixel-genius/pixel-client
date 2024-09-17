import PixelIcon from "@repo/icons/pxiel";
import React from "react";

const DASHBOARD_ITEMS = [
  {
    icon: "",
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: "",
    title: "Products",
    url: "/products",
  },
  {
    icon: "",
    title: "Sales",
    url: "/sales",
  },
  {
    icon: "",
    title: "Payouts",
    url: "/payouts",
  },
];

export default function SideBarDashboard() {
  return (
    <div className="h-full w-[355px] bg-[#181818] px-4 py-6">
      <div className="flex items-center space-x-2 mb-8">
        <PixelIcon size={46} color="currentColor" />
        <h1 className="text-base font-bold sm:text-lg md:text-lg lg:text-xl">
          PixelGenius
        </h1>
      </div>
      {DASHBOARD_ITEMS.map((item) => (
        <div>
          <div>{item.icon}</div>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}
