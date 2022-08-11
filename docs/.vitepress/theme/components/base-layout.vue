<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import JSlides from './ppt/src/index.vue';
import { ref, onMounted } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';
import { PlayOutline, Maximize } from '@vicons/carbon';

const { Layout } = DefaultTheme;
const slidesVisible = ref(false);

const theme = ref<'dark' | 'light'>('light');
const APPEARANCE_KEY = 'vitepress-theme-appearance';

const setTheme = (isDark: boolean) => {
  theme.value = isDark ? 'dark' : 'light';
};
onMounted(() => {
  listenThemeChange();
  setTheme(isDarkMode());
});

const isDarkMode = () => {
  // 监听vitepress设置的主题
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  let userPreference = localStorage.getItem(APPEARANCE_KEY) || 'auto';
  return userPreference === 'auto' ? query.matches : userPreference === 'dark';
};

const listenThemeChange = () => {
  const buttonEl = document.querySelector('.VPSwitchAppearance');
  buttonEl && buttonEl.addEventListener('click', () => setTheme(isDarkMode()));
};

const openFullScreenMode = () => {
  const mainContent: HTMLElement = document.querySelector('main.main') || document.body;

  if (mainContent) {
    type Styles = Partial<Omit<CSSStyleDeclaration, 'parentRule' | 'length'>>;
    const styles: Styles = {
      padding: '40px',
      overflow: 'auto',
      backgroundColor: 'var(--vp-c-bg)',
      color: 'var(--vp-c-text-1)'
    };
    for (const key in styles) {
      mainContent.style[key] = styles[key] as string;
    }
    mainContent.requestFullscreen();
  }
  mainContent;
};
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : lightTheme">
    <j-slides v-if="slidesVisible" />
    <Layout v-show="!slidesVisible">
      <template #aside-bottom>
        <!-- <n-button quaternary circle type="info" size="large" @click="slidesVisible = true">
          <template #icon>
            <n-icon size="26"><PlayOutline /></n-icon>
          </template>
        </n-button> -->
        <n-button quaternary circle type="info" size="large" @click="openFullScreenMode">
          <template #icon>
            <n-icon size="20"><Maximize /></n-icon>
          </template>
        </n-button>
      </template>
      <template #layout-bottom>
        <n-back-top />
      </template>
    </Layout>
  </n-config-provider>
</template>
