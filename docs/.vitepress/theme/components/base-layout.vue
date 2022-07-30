<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import JSlides from './ppt/src/index.vue';
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';
import { darkTheme, lightTheme } from 'naive-ui';
import { PlayOutline } from '@vicons/carbon';

const { Layout } = DefaultTheme;
const slidesVisible = ref(false);

const theme = ref<'dark' | 'light'>('light');

onMounted(() => {
  listenThemeChange();
});

const listenThemeChange = () => {
  const buttonEl = document.querySelector('.VPSwitchAppearance');
  buttonEl &&
    buttonEl.addEventListener('click', () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
    });
};
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : lightTheme">
    <j-slides v-if="slidesVisible" />
    <Layout v-if="!slidesVisible">
      <template #aside-bottom>
        <div class="relative"></div>
        <n-button quaternary circle type="info" size="large" @click="slidesVisible = true">
          <template #icon>
            <n-icon size="40"><PlayOutline /></n-icon>
          </template>
        </n-button>
      </template>
      <template #layout-bottom>
        <n-back-top />
      </template>
    </Layout>
  </n-config-provider>
</template>
