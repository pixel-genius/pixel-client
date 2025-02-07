import { IconProps } from "../types/types";
import { IconHeart as IconHeartTabler } from "@tabler/icons-react";

const IconHeart = (props: IconProps) => {
  const { size = 24, color, ...resProps } = props;

  return <IconHeartTabler size={size} color={color} {...resProps} />;
};

export default IconHeart;
