import { SidebarTrigger } from "@repo/ui/components";

const NavbarDashboard = () => {
  return (
    <nav className="bg-sidebar z-50 sticky top-0 flex items-center justify-between">
      <div className="w-full">
        <SidebarTrigger />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
