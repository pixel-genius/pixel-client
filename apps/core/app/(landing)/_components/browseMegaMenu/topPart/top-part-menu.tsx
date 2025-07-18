import Link from "next/link";

import { Typography } from "@repo/ui/components/atoms/typography";
import IllustrationIcon from "@repo/icons/illustration";
import WireFrameIcon from "@repo/icons/wire-frame";
import IconSetsIcon from "@repo/icons/icon-sets";
import PolygonIcon from "@repo/icons/polygon";
import MockUpsIcon from "@repo/icons/mockups";
import Asset3dIcon from "@repo/icons/3dAsset";

interface CategoryItemProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { title, icon, link } = props;
  return (
    <div className="relative flex justify-center items-center cursor-pointer">
      <PolygonIcon size={150} className="text-card" />
      <Link
        href={link}
        className="flex  flex-wrap justify-center lg:w-[80px] absolute "
      >
        {icon}
        <Typography variant="label/xs" className="mt-[14.79px]">
          {title}
        </Typography>
      </Link>
    </div>
  );
};

const TopPartMenu = () => {
  return (
    <div className="flex flex-wrap my-[25px] gap-[12px]">
      <CategoryItem
        title="3D Assets"
        icon={<Asset3dIcon size={48} />}
        link="/product"
      />
      <CategoryItem
        title="Icon Sets"
        icon={<IconSetsIcon size={48} />}
        link="#"
      />
      <CategoryItem
        title="Illustrations"
        icon={<IllustrationIcon size={48} />}
        link="#"
      />
      <CategoryItem
        title="Wireframe"
        icon={<WireFrameIcon size={48} />}
        link="#"
      />
      <CategoryItem title="Mockups" icon={<MockUpsIcon size={48} />} link="#" />
    </div>
  );
};

export { TopPartMenu };
