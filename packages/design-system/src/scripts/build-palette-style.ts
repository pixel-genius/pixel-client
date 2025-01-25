import * as fs from 'fs';
import * as path from 'path';
import { hexToHsl } from './utills.js';

// Paths for input and output files
const inputFilePath = path.join(__dirname, '../tokens/token_palette_primitive.json');
const outputFilePath = path.join(__dirname, '../styles/base/_palette.scss');

// Generate SCSS content with groups separated by an empty line
const generateScssContent = (tokens: Record<string, any>): string => {
  const lines: string[] = [];

  for (const group in tokens) {
    const groupTokens = tokens[group];
    for (const key in groupTokens) {
      const value = groupTokens[key];
      if (value.$type === 'color') {
        lines.push(`  --${group}-${key}: ${hexToHsl(value.$value)};`);
      }
    }
    lines.push(''); // Add an empty line after each group
  }

  return `
@layer base {
  :root {
${lines.join('\n')}
  }
}
`.trim();
};

// Function to build and write SCSS content
export const buildPaletteScss = (): void => {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(inputFilePath, 'utf-8');
  const tokens = JSON.parse(rawData);

  // Generate SCSS content
  const scssContent = generateScssContent(tokens);

  // Ensure the output directory exists
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the SCSS content to the file
  fs.writeFileSync(outputFilePath, scssContent, 'utf-8');
  console.log(`SCSS file created at: ${outputFilePath}`);
};

// Run the script
buildPaletteScss();
