import * as fs from "fs";
import * as path from "path";

// Paths for token files
const tokensDir = path.join(__dirname, "../tokens");
const stylesDir = path.join(__dirname, "../styles/base");
const resolveTokenReference = (value: string): string => {
  return value.replace(/{(.+?)}/g, (_, match) => `var(--${match.replace(".", "-")})`);
};

// Generate SCSS content for a given theme
const generateScssContent = (
  theme: "dark" | "light",
  tokens: Record<string, any>,
): string => {
  const lines: string[] = [];

  const selector = theme === "dark" ? ":root" : ".light";

  // Add the @use directive
  lines.push(`@use "_palette.scss" as *;\n`);

  // Start the layer and class
  lines.push(`@layer base {`);
  lines.push(`  ${selector} {`);

  // Process each token in the "color" group
  const colorTokens = tokens.color;
  for (const key in colorTokens) {
    const value = colorTokens[key].$value;

    // Convert token reference (e.g., {zinc.200}) to CSS variable (e.g., var(--zinc.200))
    const resolvedValue = resolveTokenReference(value);
    lines.push(`    --${key}: ${resolvedValue};`);
  }

  // Close the class and layer
  lines.push(`  }`);
  lines.push(`}`);

  return lines.join("\n");
};

// Function to build and write SCSS for a given theme
export const buildColorsScss = (theme: "dark" | "light"): void => {
  // Define the input and output file paths
  const partFileName = theme === "dark" ? "default" : "light";
  const inputFilePath = path.join(
    tokensDir,
    `token_color_${partFileName}.json`,
  );
  const outputFilePath = path.join(stylesDir, `_colors-${theme}.scss`);

  // Ensure the input file exists
  if (!fs.existsSync(inputFilePath)) {
    console.error(`Token file not found: ${inputFilePath}`);
    return;
  }

  // Read and parse the JSON file
  const rawData = fs.readFileSync(inputFilePath, "utf-8");
  const tokens = JSON.parse(rawData);

  // Generate SCSS content
  const scssContent = generateScssContent(theme, tokens);

  // Ensure the output directory exists
  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }

  // Write the SCSS content to the file
  fs.writeFileSync(outputFilePath, scssContent, "utf-8");
  console.log(`SCSS file created for ${theme} theme at: ${outputFilePath}`);
};

// Reusable calls for light and dark themes
buildColorsScss("light");
buildColorsScss("dark");
