import Asset3dIcon from "@repo/icons/3dAsset";
import IconSetsIcon from "@repo/icons/icon-sets";
import IllustrationIcon from "@repo/icons/illustration";
import MockUpsIcon from "@repo/icons/mockups";
import PolygonImage from "@repo/icons/polygon";
import UiKitIcon from "@repo/icons/ui-kit";
import WireFrameIcon from "@repo/icons/wire-frame";
import Typography from "@repo/ui/components/typography";
import Link from "next/link";

const TopPartMenu = () => {
  return (
    <div className="flex flex-wrap my-[25px] gap-[12px]">
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <UiKitIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            Ui Kits
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <Asset3dIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            3D Assets
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <IconSetsIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            Icon Sets
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <IllustrationIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            Illustrations
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <WireFrameIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            Wireframe
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <PolygonImage />
        <Link
          href="#"
          className="flex flex-wrap justify-center lg:w-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <MockUpsIcon />
          <Typography variant="label/md" className="mt-[14.79px]">
            Mockups
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export { TopPartMenu };
