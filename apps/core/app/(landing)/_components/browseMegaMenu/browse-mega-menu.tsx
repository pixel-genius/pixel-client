import { BottomPartMenu } from "./bottomPart/bottom-part-menu";
import { TopPartMenu } from "./topPart/top-part-menu";
import { RetroGrid } from "@repo/ui/components/retroGrid";

const BrowseMegaMenu = () => {
  return (
    <div className="flex flex-col relative  items-center justify-center  w-full  bg-background px-5 pb-6 rounded-b-xl">
      <RetroGrid className="absolute" opacity={0.1} cellSize={40} angle={50} />
      <TopPartMenu />
      <BottomPartMenu />
    </div>
  );
};

export { BrowseMegaMenu };
