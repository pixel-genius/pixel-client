import { buildColorsTailwind } from "./build-colors-tailwind.js";
import { buildColorsScss } from "./build-colors-style.js";
import { buildPaletteTailwind } from "./build-palette-tailwind.js";
import { buildPaletteScss } from "./build-palette-style.js";
import { buildTailwindConfig } from "./build-config-tailwind.js";
import { buildMainScss } from "./build-main-style.js";

const main = () => {
  // Styles
  buildPaletteScss();
  buildColorsScss("light");
  buildColorsScss("dark");
  buildMainScss();

  // Tailiwnd 
  buildColorsTailwind();
  buildPaletteTailwind();
  buildTailwindConfig();
};

main();
