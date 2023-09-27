import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    theme,
    lang: 'zh-CN',
    title: 'Pip Manager',
    description: 'Document for Pip Manager',
});