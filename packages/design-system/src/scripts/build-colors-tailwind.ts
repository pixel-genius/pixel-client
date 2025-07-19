import * as path from "path";
import * as fs from "fs";

// Paths for token files
const tokensDir = path.join(__dirname, "../tokens");
const outputDir = path.join(__dirname, "../tailwind");

// Utility to resolve token references to match the key directly
const resolveTokenReference = (key: string): string => {
  return `hsl(var(--${key}))`;
};

// Generate TypeScript content for colors
const generateColorsTsContent = (tokens: Record<string, any>): string => {
  const colorTokens = tokens.color;
  const lines: string[] = [];

  // Add the TypeScript export header
  lines.push(`export const colors = {`);

  // Process each token and use the key for the variable name
  for (const key in colorTokens) {
    lines.push(`  "${key}": "${resolveTokenReference(key)}",`);
  }

  // Close the object
  lines.push(`};`);

  return lines.join("\n");
};

// Function to build and write colors.ts
export const buildColorsTailwind = (): void => {
  const inputFilePath = path.join(tokensDir, `token_color_light.json`);
  const outputFilePath = path.join(outputDir, `colors.ts`);

  // Ensure the input file exists
  if (!fs.existsSync(inputFilePath)) {
    console.error(`Token file not found: ${inputFilePath}`);
    return;
  }

  // Read and parse the JSON file
  const rawData = fs.readFileSync(inputFilePath, "utf-8");
  const tokens = JSON.parse(rawData);

  // Generate TypeScript content
  const tsContent = generateColorsTsContent(tokens);

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the TypeScript content to the file
  fs.writeFileSync(outputFilePath, tsContent, "utf-8");
  console.log(`colors.ts file created at: ${outputFilePath}`);
};

// Build colors.ts
buildColorsTailwind();
