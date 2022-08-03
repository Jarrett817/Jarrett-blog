import { defineConfigWithTheme } from 'vitepress';
import { themeConfig } from './config/index';

export default defineConfigWithTheme({
  lang: 'en-US',
  title: '🏠 JarrettBlog',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: '前端学习笔记',
  base: '/Jarrett-blog/',
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ]
  ],
  themeConfig
});
