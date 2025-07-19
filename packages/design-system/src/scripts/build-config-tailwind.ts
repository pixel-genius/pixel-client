import * as path from "path";
import * as fs from "fs";

// Paths for the output file
const outputDir = path.join(__dirname, "../tailwind");
const outputFilePath = path.join(outputDir, "config.ts");

// Content for the tailwindConfig.ts file
const generateTailwindConfigContent = (): string => {
  return `
import { colors } from "./colors";
import { palette } from "./palette";

export const tailwindConfig = {
  theme: {
    extend: {
      colors: { ...colors, ...palette },
    },
  },
};
`.trim();
};

// Function to create the tailwindConfig.ts file
export const buildTailwindConfig = (): void => {
  // Generate the content
  const configContent = generateTailwindConfigContent();

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the content to the file
  fs.writeFileSync(outputFilePath, configContent, "utf-8");
  console.log(`tailwindConfig.ts file created at: ${outputFilePath}`);
};

// Run the script
buildTailwindConfig();
