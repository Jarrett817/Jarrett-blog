<template>
  <ClientOnly> <SlidesViewer v-bind="$props" /> </ClientOnly>
</template>

<script lang="ts" setup>
import SlidesViewer from './slides-viewer.vue';

interface Props {
  visible: boolean;
}

defineProps<Props>();
</script>
