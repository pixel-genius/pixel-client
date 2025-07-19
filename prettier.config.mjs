/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^react-(.*)$",
    "^next(.*)$",
    "^@/(.*)$",
    "^@repo/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
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
