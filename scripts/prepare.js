const fs = require("fs");
const path = require("path");

console.log("🚀 Preparing project...");

const packageJsonPath = "./package.json";
const newPackageManager = "yarn@1.22.22";

try {
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Ensure packageManager is only set to Yarn
  packageJson.packageManager = newPackageManager;

  // Write back to package.json
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );

  console.log(
    `✅ Successfully updated packageManager to "${newPackageManager}" in package.json`,
  );
} catch (error) {
  console.error("❌ Error updating package.json:", error);
  process.exit(1);
}
