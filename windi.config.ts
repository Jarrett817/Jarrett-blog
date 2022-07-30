import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  extract: {
    include: ['.vitepress/theme/**/*.{ts,vue}']
    // exclude: ['node_modules', '.git']
  }
});
