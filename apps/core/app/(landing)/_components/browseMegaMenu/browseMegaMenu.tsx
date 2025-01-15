import { BottomPartMenu } from "./bottomPart/bottomPartMenu";
import { TopPartMenu } from "./topPart/topPartMenu";
import { RetroGrid } from "@repo/ui/components/retroGrid";

const BrowseMegaMenu = () => {
  return (
    <div className="flex flex-wrap relative justify-evenly my-[25px] w-[95%] sm:w-[90%] lg:w-[962px] bg-card px-[20px] pb-[24px] rounded-b-lg">
      <RetroGrid className="absolute" opacity={0.1} cellSize={40} angle={50} />
      <TopPartMenu />
      <BottomPartMenu />
    </div>
  );
};

export { BrowseMegaMenu };
