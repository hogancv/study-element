import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/study-element/',
  title: "study-element",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
  ],
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/components/button' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速开始', link: '/quick-start' }]
      },
      {
        text: '组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          { text: 'Tooltip 文字提醒', link: '/components/tooltip' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Message 消息', link: '/components/message' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hogancv/study-element_docs' }
    ]
  }
})
