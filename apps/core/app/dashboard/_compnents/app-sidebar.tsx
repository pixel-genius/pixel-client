"use client";

import * as React from "react";

//components ui
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@repo/ui/components/sidebar";
import Image from "next/image";

//icons
import LayoutDashboard from "../../../../../packages/icons/src/components/layout-dashboard";
import BoxPackage from "../../../../../packages/icons/src/components/box-package";
import ChartBarPopular from "../../../../../packages/icons/src/components/chart-bar-popular";
import ReportMoney from "../../../../../packages/icons/src/components/report-money";
//components sidebar
import { LogoIconSwitcher } from "./logo-icon-switcher";
import { NavMain } from "./nav-main";

// This is items of dashboard.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      url: "/products",
      icon: BoxPackage,
    },
    {
      title: "Sales",
      url: "/sales",
      icon: ChartBarPopular,
    },
    {
      title: "Payouts",
      url: "/payouts",
      icon: ReportMoney,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pt-5 pb-6">
        <LogoIconSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="p-0 transition-all duration-100">
        {isMobile ? (
          <Image
            src="images/clip-path-group.svg"
            width={290}
            height={117}
            alt="Picture of space"
          />
        ) : open ? (
          <Image
            src="images/clip-path-group.svg"
            width={280}
            height={117}
            alt="Picture of space"
          />
        ) : (
          <Image
            src="images/clip-path-group-sidebar.svg"
            width={49}
            height={90}
            alt="Picture of space"
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}