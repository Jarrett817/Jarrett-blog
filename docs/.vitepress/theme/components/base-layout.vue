<script setup>
import DefaultTheme from 'vitepress/dist/client/theme-default';
import BackTop from './back-top.vue';
import JSlides from './ppt/src/index.vue';
import Articles from './articles.vue';
import { reactive, ref, computed } from 'vue';
import { useData } from 'vitepress';
const { Layout } = DefaultTheme;
const slidesVisible = ref(false);

const actionList = computed(() => {
  const icons = [{ icon: 'bofang', click: () => (slidesVisible.value = !slidesVisible.value) }];
  if (!useData())
    return [{ icon: 'exit', click: () => (slidesVisible.value = !slidesVisible.value) }];
  if (useData().page.value.title === 'Home') return [];
  return icons;
});
</script>

<template>
  <j-slides v-if="slidesVisible" />
  <back-top :actionList="actionList" />
  <Layout v-if="!slidesVisible">
    <template #home-features>
      <articles />
    </template>
    <template #page-top> </template>
    <template #page-bottom></template>
    <template #home-footer> </template>
  </Layout>
</template>
