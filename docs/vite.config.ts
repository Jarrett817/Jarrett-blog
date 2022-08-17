import { defineConfig, type PluginOption } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['./.vitepress/theme']
      }
    }) as PluginOption,
    Components({
      resolvers: [NaiveUiResolver()]
    }) as PluginOption
  ]
});
