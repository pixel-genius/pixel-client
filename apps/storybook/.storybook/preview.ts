import type { Preview } from "@storybook/react";

import "./style.css";
import "@repo/ui/globals.scss";

const preview: Preview = {
  parameters: {
    themes: {
      default: "dark", // Default theme
      list: [
        { name: "light", class: "light", color: "#ffffff", default: true },
        { name: "dark", class: "dark", color: "#333333" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
