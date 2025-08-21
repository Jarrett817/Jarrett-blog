import { defineConfig } from 'vitepress';
import { themeConfig } from './theme-config';
import { base } from '../shared';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  lang: 'en-US',
  title: '🏠 JarrettBlog',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: '前端学习笔记',
  base,
  appearance: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: false,
    toc: { level: [1, 2, 3] },
    image: {
      lazyLoading: true
    }
  },
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: base + 'favicon.jpg' }]
  ],
  themeConfig,
  vite: {
    ssr: {
      noExternal: ['naive-ui', 'monaco-editor']
    },
    plugins: [
      UnoCSS({ configFile: './uno.config.ts' }),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      vueJsx()
    ]
  }
});
