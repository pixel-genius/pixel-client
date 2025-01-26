import * as fs from "fs";
import * as path from "path";

// Paths for input and output files
const inputFilePath = path.join(__dirname, "../tokens/token_palette_primitive.json");
const outputFilePath = path.join(__dirname, "../tailwind/palette.ts");

// Generate TypeScript content with groups of palette colors
const generatePaletteTsContent = (tokens: Record<string, any>): string => {
  const lines: string[] = [];

  // Start the TypeScript export object
  lines.push(`export const palette = {`);

  for (const group in tokens) {
    const groupTokens = tokens[group];
    lines.push(`  "${group}": {`);
    for (const key in groupTokens) {
      const value = groupTokens[key];
      if (value.$type === "color") {
        // Add a line for each color token
        lines.push(`    "${key}": "var(--${group}-${key})",`);
      }
    }
    lines.push(`  },`); // Close the group
  }

  lines.push(`};`); // Close the object

  return lines.join("\n");
};

// Function to build and write the palette.ts file
export const buildPaletteTailwind = (): void => {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(inputFilePath, "utf-8");
  const tokens = JSON.parse(rawData);

  // Generate TypeScript content
  const tsContent = generatePaletteTsContent(tokens);

  // Ensure the output directory exists
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the TypeScript content to the file
  fs.writeFileSync(outputFilePath, tsContent, "utf-8");
  console.log(`palette.ts file created at: ${outputFilePath}`);
};

// Run the script
buildPaletteTailwind();
