import React from "react";
import SideBarDashboard from "./_compnents/sidebar";
import { SidebarProvider, SidebarTrigger } from "@repo/ui/components/sidebar";
import { AppSidebar } from "./_compnents/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    // <div className="flex h-full">
    //   <SideBarDashboard />
    //   <div className="flex-1">{children}</div>
    // </div>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
