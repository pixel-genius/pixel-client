import { AnimatePresence, motion } from "framer-motion";

import * as React from "react";

// Logo
// UI components
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@repo/ui/components/molecules/sidebar";
import PixelIcon from "@repo/icons/pxiel";
import { cn } from "@repo/ui/lib/utils";

export function LogoIconSwitcher() {
  const { open } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem
        className={"flex items-center flex-1 space-x-2 pl-2"}
        style={{
          justifyContent: open ? "flex-start" : "center",
        }}
      >
        {/* Ensure icon remains centered */}
        <div className="flex aspect-square relative z-50 size-9 shrink-0 items-center justify-center rounded-lg text-sidebar-primary-foreground">
          <PixelIcon size={46} color="currentColor" />
        </div>

        {/* Animate text visibility but maintain spacing */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="grid absolute left-12 flex-shrink text-left text-lg leading-tight overflow-hidden"
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="truncate font-semibold">PixelGenius</span>
            </motion.div>
          )}
        </AnimatePresence>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
