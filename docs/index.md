---
layout: home

hero:
  name: "Pip Manager"
  text: "基于 Pip 的图形化 Python 包管理器"
  tagline: 现代设计，多环境适配，直观易用
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 文档
      link: /guide/introduction
  image:
    src: https://loli.tc/images/icon.webp
    alt: Pip Manager

features:
  - icon: <?xml version="1.0" encoding="utf-8"?><svg fill="#4bcfff" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>windows</title><path d="M14.687 16.75h16.309v14.246l-16.12-2.251zM1.004 16.75h12.184v11.81l-12.184-1.69zM14.687 3.44l16.309-2.436v14.246h-16.309zM1.004 5.314l12.184-1.686v11.81h-12.184z"></path></svg>
    title: Fluent Design
    details: 基于 WPF 技术的 Fluent 风格图形化应用体验
  - icon: 🗂
    title: 多环境支持
    details: 轻松管理、切换不同的 Pip 环境
  - icon: 🔍
    title: 在线搜索
    details: 高效查询并获取所需的包
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #46ba86 30%, #41d1ff);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>