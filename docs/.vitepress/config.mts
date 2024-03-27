import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Pip Manager",
  description: "基于 Pip 的可视化 Python 包管理器",
  lang: "zh-CN",
  themeConfig: {
    logo: "/assets/icon.webp",
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/introduction' },
      { text: '下载', link: '/download' },
      { text: '计划', link: '/roadmap' },
      { text: '常见问题', link: '/guide/faq' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '简介',
          items: [
            { text: '有关 Pip Manager', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        },
        {
          text: '功能',
          items: [
            { text: '库', link: '/guide/feature-library'},
            { text: '任务', link: '/guide/feature-action'},
            { text: '搜索', link: '/guide/feature-search'},
            { text: '工具箱', link: '/guide/feature-tools'},
            { text: '环境', link: '/guide/feature-environment'},
            { text: '设置', link: '/guide/feature-settings'}
          ]
        },
        {
          text: '开发',
          items: [
            { text: '环境设置', link: '/guide/development-environment'},
            { text: '贡献代码', link: '/guide/development-contribute'}
          ]
        },
        {
          text: '问题反馈',
          items: [
            { text: 'FAQ', link: '/guide/faq'},
            { text: '提交 Bug 报告', link: '/guide/bug-report'}
          ]
        },
        {
          text: '关于',
          items: [
            { text: 'MIT 许可证', link: '/guide/license'},
            { text: '声明', link: '/guide/announcements'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AuroraZiling/PipManager' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2024 AuroraZiling'
    }
  }
})
