import IllustratorIcon from "@repo/icons/Illustrator";
import Adobexdicon from "@repo/icons/adobexd";
import AfterEffecticon from "@repo/icons/after-effects";
import Belendericon from "@repo/icons/belender";
import Cinema4DIcon from "@repo/icons/cinema4D";
import Framericon from "@repo/icons/framer";
import Htmlicon from "@repo/icons/html";
import Photoshopicon from "@repo/icons/photoshop";
import Sketchicon from "@repo/icons/sketch";
import { Typography } from "@repo/ui/components/atoms/typography";

const BottomPartMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="label/sm">Browse by most popular formats</Typography>
      <div className="flex flex-wrap gap-[6px]">
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Adobexdicon size={16} />
          <Typography variant="label/sm">Adobe XD</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Belendericon size={16} />
          <Typography variant="label/sm">Blender</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Sketchicon size={16} />
          <Typography variant="label/sm">Sketch</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <AfterEffecticon size={16} />
          <Typography variant="label/sm">After Effects</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Cinema4DIcon size={16} />
          <Typography variant="label/sm">Cinema 4D</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Framericon size={16} />
          <Typography variant="label/sm">Framer</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Htmlicon size={16} />
          <Typography variant="label/sm">HTML</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <IllustratorIcon size={16} />
          <Typography variant="label/sm">Illustrator</Typography>
        </div>
        <div className="flex items-center py-3 px-2 bg-card rounded-lg gap-[4px]">
          <Photoshopicon size={16} />
          <Typography variant="label/sm">Photoshop</Typography>
        </div>
      </div>
    </div>
  );
};

export { BottomPartMenu };
