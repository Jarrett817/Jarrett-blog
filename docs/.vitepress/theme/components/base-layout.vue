<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import BackTop from './back-top.vue';
import JSlides from './ppt/src/index.vue';
import { ref, computed } from 'vue';
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
  <Layout v-if="!slidesVisible">
    <template #layout-bottom>
      <!-- <back-top :actionList="actionList" /> -->
    </template>
  </Layout>
</template>
