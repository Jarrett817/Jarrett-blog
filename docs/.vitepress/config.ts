import { defineConfigWithTheme } from 'vitepress';
// import Components from 'unplugin-vue-components/vite';
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { themeConfig } from './config/index';
// import WindiCSS from 'vite-plugin-windicss';

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
  // vite: {
  //   plugins: [
  //     WindiCSS({
  //       scan: {
  //         dirs: ['./packages', './theme', '/docs/.vitepress'], // all files in the cwd
  //         fileExtensions: ['vue', 'js', 'ts'] // also enabled scanning for js/ts
  //       }
  //     }),
  //     Components({
  //       resolvers: [NaiveUiResolver()]
  //     })
  //   ]
  // }
});
