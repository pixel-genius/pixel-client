import { SidebarTrigger } from "@repo/ui/components/sidebar";

const NavbarDashboard = () => {
  return (
    <nav className="bg-sidebar flex items-center justify-between">
      <div className="w-full">
        <SidebarTrigger />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
