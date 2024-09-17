import React from "react";
import SideBarDashboard from "./_compnents/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-full">
      <SideBarDashboard />
      {children}
    </div>
  );
}
