import { buildColorsTailwind } from "./build-colors-tailwind.js";
import { buildColorsScss } from "./build-colors-style.js";
import { buildPaletteTailwind } from "./build-palette-tailwind.js";
import { buildPaletteScss } from "./build-palette-style.js";
import { buildTailwindConfig } from "./build-config-tailwind.js";
import { buildMainScss } from "./build-main-style.js";

const main = () => {
  try {
    console.log("🎨 Building design system...");

    // Styles
    console.log("Building SCSS styles...");
    buildPaletteScss();
    buildColorsScss("light");
    buildColorsScss("dark");
    buildMainScss();

    // Tailwind
    console.log("Building Tailwind configurations...");
    buildColorsTailwind();
    buildPaletteTailwind();
    buildTailwindConfig();

    console.log("✅ Design system built successfully!");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
};

main();
