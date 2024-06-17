import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "我的博客描述",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/index' },
      { text: 'English', link: '/english/index' }
    ],

    sidebar: {
      '/english/': [
        {
          text: 'English',
          items: [
            { text: 'TPO31-P1', link: '/english/TPO31-P1' },
            { text: 'TPO31-P2', link: '/english/TPO31-P2' }
          ]
        }
      ],
      '/java/': [
        {
          text: 'Config',
          items: [
            { text: 'java1', link: '/java/java1' },
            { text: 'java2', link: '/java/java2' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
