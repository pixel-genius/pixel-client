"use client";

import * as React from "react";

//icons
//components ui
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from "@repo/ui/components/molecules/sidebar";
import ChartBarPopular from "@repo/icons/chart-bar-popular";
import LayoutDashboard from "@repo/icons/layout-dashboard";
import ReportMoney from "@repo/icons/report-money";
import BoxPackage from "@repo/icons/box-package";
//components sidebar
import Settingsicon from "@repo/icons/settings";
import Usericon from "@repo/icons/user";

import { WalletBalanceCard } from "./wallet-balance-card";
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
