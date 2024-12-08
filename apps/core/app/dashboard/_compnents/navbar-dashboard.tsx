import { SidebarTrigger } from "@repo/ui/components/sidebar";

const NavbarDashboard = () => {
  return (
    <nav className="h-[76px] bg-gray-800 flex items-center justify-between px-1">
      <div>
        <SidebarTrigger />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
