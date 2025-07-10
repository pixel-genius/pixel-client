import {
  IconDeviceMobile,
  IconUsersGroup,
  IconEye,
  IconCube,
  IconVector,
  IconBox,
  IconLayout,
  IconMessage,
  IconTypography,
  IconDiamond,
} from "@tabler/icons-react";

const categories = [
  { label: "UI Kits", icon: <IconDeviceMobile size={22} /> },
  { label: "Mockups", icon: <IconUsersGroup size={22} /> },
  { label: "Coded Templates", icon: <IconEye size={22} /> },
  { label: "3D Assets", icon: <IconCube size={22} /> },
  { label: "Wireframe kits", icon: <IconLayout size={22} /> },
  { label: "Icon Sets", icon: <IconBox size={22} /> },
  { label: "Illustrations", icon: <IconVector size={22} /> },
  { label: "For Figma", icon: <IconMessage size={22} /> },
  { label: "Fonts", icon: <IconTypography size={22} /> },
  { label: "For Sketch", icon: <IconDiamond size={22} /> },
];

const BrowseSheet = () => (
  <div className="flex flex-col items-center w-full">
    <div className="w-12 h-1.5 bg-[#fff]/20 rounded-full mt-1 mb-4" />
    <h2 className="text-2xl font-bold text-white mb-6 w-full text-left">
      Browse
    </h2>
    <div className="grid grid-cols-2 gap-x-8 gap-y-5 w-full">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="flex items-center gap-3 text-white/90 text-base font-medium"
        >
          <span className="bg-[#232228] rounded-md p-2 flex items-center justify-center">
            {cat.icon}
          </span>
          {cat.label}
        </div>
      ))}
    </div>
  </div>
);

export default BrowseSheet;
