import { IconProps } from "../types/types";
import { IconShoppingBag as IconShoppingBagtTabler } from "@tabler/icons-react";

const IconEye = (props: IconProps) => {
  const { size = 24, color, ...resProps } = props;

  return <IconShoppingBagtTabler size={size} color={color} {...resProps} />;
};

export default IconEye;
