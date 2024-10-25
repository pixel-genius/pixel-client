/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
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
