import { useMegaMenuStore } from "../../store/mega-menu";
import { BottomPartMenu } from "./bottomPart/bottom-part-menu";
import { TopPartMenu } from "./topPart/top-part-menu";
import { RetroGrid } from "@repo/ui/components/atoms/retroGrid";

const BrowseMegaMenu = () => {
  const { closeMegaMenu } = useMegaMenuStore();
  return (
    <div className="flex flex-col relative  items-center justify-center  w-full  bg-background px-5 pb-6 rounded-b-xl">
      <div
        className="flex fixed -z-10 inset-0 w-full h-full"
        onClick={closeMegaMenu}
      ></div>
      <RetroGrid className="absolute" opacity={0.1} cellSize={40} angle={50} />
      <TopPartMenu />
      <BottomPartMenu />
    </div>
  );
};

export { BrowseMegaMenu };
