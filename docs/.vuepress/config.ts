import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  theme,

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pip Manager',
      description: 'A Pip-based GUI Python Package Manager'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Pip Manager',
      description: '基于 Pip 的可视化 Python 包管理器'
    }
  },

  plugins: [
    searchProPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/zh/": {
          placeholder: "Search",
        },
      },
    }),
    redirectPlugin({
      defaultLocale: "/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      localeConfig: {
        "/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      },
      switchLocale: "modal"
    }),
  ],
});