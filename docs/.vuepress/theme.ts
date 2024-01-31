import { hopeTheme } from "vuepress-theme-hope";
import zhNavbar from "./navbar/zhNavbar";
import zhSidebar from "./sidebar/zhSidebar";
import enNavbar from "./navbar/enNavbar";
import enSidebar from "./sidebar/enSidebar";

export default hopeTheme({
  hostname: "",
  author: {
    name: "AuroraZiling",
  },
  iconAssets: "fontawesome",
  logo: "assets/icon.png",
  repo: "Pip-Manager",
  docsDir: "docs",
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Pip Manager",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "Pip Manager",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});