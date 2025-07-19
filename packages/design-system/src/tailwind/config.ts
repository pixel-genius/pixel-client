import { palette } from "./palette";
import { colors } from "./colors";

export const tailwindConfig = {
  theme: {
    extend: {
      colors: { ...colors, ...palette },
    },
  },
};
