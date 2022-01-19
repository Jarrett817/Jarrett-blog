<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
});

onMounted(() => import('./icons/iconfont.js'));
</script>

<template>
  <svg class="j-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`"></use>
  </svg>
</template>

<style lang="scss">
.j-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
