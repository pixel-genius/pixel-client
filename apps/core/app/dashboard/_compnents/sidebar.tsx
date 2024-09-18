import PixelIcon from "@repo/icons/pxiel";

// icons
import LayoutDashboard from "../../../../../packages/icons/src/components/layout-dashboard";
import BoxPackage from "../../../../../packages/icons/src/components/box-package";
import ChartBarPopular from "../../../../../packages/icons/src/components/chart-bar-popular";
import ReportMoney from "../../../../../packages/icons/src/components/report-money";

const DASHBOARD_SIDEBAR_ITEMS = [
  {
    icon: <LayoutDashboard />,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: <BoxPackage />,
    title: "Products",
    url: "/products",
  },
  {
    icon: <ChartBarPopular />,
    title: "Sales",
    url: "/sales",
  },
  {
    icon: <ReportMoney />,
    title: "Payouts",
    url: "/payouts",
  },
];

const SideBarDashboard = () => {
  return (
    <div className="h-full basis-[355px] bg-[#181818] px-4 py-6">
      <div className="flex items-center space-x-2 mb-8">
        <PixelIcon size={46} color="currentColor" />
        <h1 className="text-base font-bold sm:text-lg md:text-lg lg:text-xl">
          PixelGenius
        </h1>
      </div>
      {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
        <div className="flex transition-all items-center space-y-1 space-x-2 p-4 hover:bg-[#282828] cursor-pointer rounded-md">
          <div>{item.icon}</div>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default SideBarDashboard;
