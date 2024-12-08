import { SidebarTrigger } from "@repo/ui/components/sidebar";

const NavbarDashboard = () => {
  return (
    <nav className="h-[76px] bg-sidebar flex items-center justify-between px-2">
      <div>
        <SidebarTrigger />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
