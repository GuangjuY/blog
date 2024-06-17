import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "我的博客描述",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'English', link: '/english/index' }
    ],
    aside: false,
    sidebar: {
      '/english/': [
        {
          text: 'English',
          items: [
            { text: 'TPO31-P1', link: '/english/TPO31-P1' },
            { text: 'TPO31-P2', link: '/english/TPO31-P2' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuangjuY' }
    ]
  }
})
