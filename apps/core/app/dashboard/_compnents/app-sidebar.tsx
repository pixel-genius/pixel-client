// icons
import LayoutDashboard from "../../../../../packages/icons/src/components/layout-dashboard";
import BoxPackage from "../../../../../packages/icons/src/components/box-package";
import ChartBarPopular from "../../../../../packages/icons/src/components/chart-bar-popular";
import ReportMoney from "../../../../../packages/icons/src/components/report-money";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/sidebar";
import PixelIcon from "@repo/icons/pxiel";
import Image from "next/image";

// Menu items.
const items = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: BoxPackage,
    title: "Products",
    url: "/products",
  },
  {
    icon: ChartBarPopular,
    title: "Sales",
    url: "/sales",
  },
  {
    icon: ReportMoney,
    title: "Payouts",
    url: "/payouts",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center space-x-2 mb-8">
              <PixelIcon size={46} color="currentColor" />
              <h1 className="text-base font-bold sm:text-lg md:text-lg lg:text-xl">
                PixelGenius
              </h1>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Image
          src="images/clip-path-group.svg"
          width={453}
          height={300}
          alt="Picture of space"
        />
      </SidebarFooter>
    </Sidebar>
  );
}
