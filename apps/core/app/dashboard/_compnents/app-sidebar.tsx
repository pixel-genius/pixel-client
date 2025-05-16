"use client";

import * as React from "react";

//components ui
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@repo/ui/components";

//icons
import BoxPackage from "@repo/icons/box-package";
import ChartBarPopular from "@repo/icons/chart-bar-popular";
import LayoutDashboard from "@repo/icons/layout-dashboard";
import ReportMoney from "@repo/icons/report-money";
import Usericon from "@repo/icons/user";

//components sidebar
import Settingsicon from "@repo/icons/settings";
import { LogoIconSwitcher } from "./logo-icon-switcher";
import { NavMain } from "./nav-main";
import { WalletBalanceCard } from "./wallet-balance-card";


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
      url: "/dashboard/products",
      icon: BoxPackage,
      children: [
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
      ],
    },
    {
      title: "Sales",
      url: "/dashboard/sales",
      icon: ChartBarPopular,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: Usericon,
    },
    {
      title: "Transactions",
      url: "/dashboard/transactions",
      icon: ReportMoney,
    },
    {
      title: "Settings",
      url: "/dashboard/setting",
      icon: Settingsicon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="" {...props}>
      <SidebarHeader className="pt-5 pb-6">
        <LogoIconSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
      <div className="p-4">
        <WalletBalanceCard />
      </div>
    </Sidebar>
  );
}
