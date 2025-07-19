import { IconEye as IconEyeTabler } from "@tabler/icons-react";

import { IconProps } from "../types/types";

const IconEye = (props: IconProps) => {
  const { size = 24, color, ...resProps } = props;

  return <IconEyeTabler size={size} color={color} {...resProps} />;
};

export default IconEye;
