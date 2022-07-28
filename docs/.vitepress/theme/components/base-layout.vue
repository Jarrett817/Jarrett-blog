<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import JSlides from './ppt/src/index.vue';
import { ref, computed, onMounted } from 'vue';
import { useData } from 'vitepress';
import { darkTheme, lightTheme } from 'naive-ui';
const { Layout } = DefaultTheme;
const slidesVisible = ref(false);

const theme = ref<'dark' | 'light'>('light');

const listenThemeChange = () => {
  const buttonEl = document.querySelector('.VPSwitchAppearance');
  buttonEl &&
    buttonEl.addEventListener('click', () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
    });
};

onMounted(() => {
  listenThemeChange();
});
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : lightTheme">
    <j-slides v-if="slidesVisible" />
    <Layout v-if="!slidesVisible">
      <template #layout-bottom>
        <n-back-top />
      </template>
    </Layout>
  </n-config-provider>
</template>
