import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "story",
    {
      text: "玩家文档",
      icon: "lightbulb",
      prefix: "player-guide/",
      link: "player-guide/",
      children: "structure",
    },
  ],
});