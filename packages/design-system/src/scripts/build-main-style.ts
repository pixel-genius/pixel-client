import * as path from "path";
import * as fs from "fs";

// Paths for the output file
const outputDir = path.join(__dirname, "../styles");
const outputFilePath = path.join(outputDir, "main.scss");

// Content for the main.scss file
const generateMainScssContent = (): string => {
  return `
@use "./base/_colors-dark.scss" as *;
@use "./base/_colors-light.scss" as *;
`.trim();
};

// Function to create the main.scss file
export const buildMainScss = (): void => {
  // Generate the content
  const scssContent = generateMainScssContent();

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the content to the file
  fs.writeFileSync(outputFilePath, scssContent, "utf-8");
  console.log(`main.scss file created at: ${outputFilePath}`);
};

// Run the script
buildMainScss();
