import { IconProps } from "../types/types";
import { IconEye as IconEyeTabler } from "@tabler/icons-react";

const IconEye = (props: IconProps) => {
  const { size = 24, color, ...resProps } = props;

  return <IconEyeTabler size={size} color={color} {...resProps} />;
};

export default IconEye;
