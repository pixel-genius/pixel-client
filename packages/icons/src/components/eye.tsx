import { IconProps } from "../types/types";
import { IconEye as IconHeartTabler } from "@tabler/icons-react";

const IconEye = (props: IconProps) => {
  const { size = 24, color, ...resProps } = props;

  return <IconHeartTabler size={size} color={color} {...resProps} />;
};

export default IconEye;
