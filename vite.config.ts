import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';
import ViteRestart from 'vite-plugin-restart';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '.vitepress/theme')}/`
    }
  },

  plugins: [
    WindiCSS(),
    Components({
      resolvers: [NaiveUiResolver()],
      dirs: ['.vitepress/theme/components'],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true
    }),
    ViteRestart({
      restart: '.vitepress/config/*.*'
    })
  ]
});
