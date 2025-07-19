/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^react-(.*)$",
    "^next(.*)$",
    "^@repo/ui(.*)$",
    "^@repo/icons(.*)$",
    "^@repo/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  overrides: [
    {
      files: "*.hbs",
      options: {
        parser: "glimmer",
      },
    },
  ],
};

export default config;
