import { colors } from "./colors";
import { palette } from "./palette";

export const tailwindConfig = {
  theme: {
    extend: {
      colors: { ...colors, ...palette },
    },
  },
};