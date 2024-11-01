import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  plugins: [
    nprogressPlugin(),
    copyCodePlugin({}),
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    home:'/',
    logo: '/images/logo.png',
    repo: 'hujinghaoabcd/WRFDoc',
    lastUpdated: 'true',
    navbar: [
      { text: '首页', link: '/' },
      { text: '用户指南', link: '/guide/' }, // 指向 guide 文件夹
      { text: '技术手册', link: '/manual/' },
      { text: '其他资源', link: '/resources/' },
      
    ],
    sidebar: {
      '/guide/': [
        { text: '1 WRF 概述', link: '/guide/WRF概述.md' },
        { text: '2 编译指南', link: '/guide/编译指南.md' },
      ],
    },
  }),

  lang: 'zh-CN',
  title: 'WRF-ARW 中文文档',
  description: 'WRF-ARW 中文文档',
})
