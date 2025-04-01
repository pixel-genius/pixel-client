import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import { NuqsAdapter } from "nuqs/adapters/react";
import React from "react";

import "./style.css";
import "@repo/ui/globals.scss";

const preview: Preview = {
  parameters: {
    themes: {
      default: "dark",
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
  decorators: [
    (Story) => (
      <NuqsAdapter>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </NuqsAdapter>
    ),
  ],
};

export default preview;
