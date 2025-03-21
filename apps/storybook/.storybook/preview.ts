import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

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

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    docs: {
      theme: themes.dark,
    },
    story: {
      theme: themes.dark,
    },
  },
};

export default preview;
