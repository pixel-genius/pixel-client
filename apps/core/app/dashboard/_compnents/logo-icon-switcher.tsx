import * as React from "react";

//ui
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/sidebar";
//logo
import PixelIcon from "@repo/icons/pxiel";

export function LogoIconSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center space-x-2">
        <div className="flex aspect-square size-9 items-center justify-center rounded-lg text-sidebar-primary-foreground">
          <PixelIcon size={46} color="currentColor" />
        </div>
        <div className="grid flex-1 text-left text-lg leading-tight">
          <span className="truncate font-semibold">PixelGenius</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
