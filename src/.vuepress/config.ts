import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/BANE/",

  locales: {
    "/": {
      lang: "en-US",
      title: "BANE",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  shouldPrefetch: false,
});
