import React from "react";
import { SidebarProvider } from "@repo/ui/components/sidebar";
import { AppSidebar } from "./_compnents/app-sidebar";
import NavbarDashboard from "./_compnents/navbar-dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <SidebarProvider className="flex h-full ">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <NavbarDashboard />
        <div className="overflow-auto px-6 py-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
