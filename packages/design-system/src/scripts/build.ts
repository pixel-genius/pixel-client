import { buildPaletteTailwind } from "./build-palette-tailwind";
import { buildTailwindConfig } from "./build-config-tailwind";
import { buildColorsTailwind } from "./build-colors-tailwind";
import { buildPaletteScss } from "./build-palette-style";
import { buildColorsScss } from "./build-colors-style";
import { buildMainScss } from "./build-main-style";

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
