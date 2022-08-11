<template>
  <div class="knowledge-map">
    <div id="mind-map" class="w-full h-full relative" />
  </div>
</template>

<script setup lang="ts">
import MindElixir from 'mind-elixir';
import { onMounted, ref } from 'vue';
import { MindMapNode } from './types';
const emits = defineEmits(['node-click']);

interface Props {
  data: MindMapNode | null;
}

const props = withDefaults(defineProps<Props>(), {
  data: null
});

const isClicked = ref(false);

onMounted(() => {
  if (!props.data) return;
  console.log(props.data);

  const mind = new MindElixir({
    el: '#mind-map',
    direction: MindElixir.RIGHT,
    draggable: true, // default true
    contextMenu: false, // default true
    toolBar: true, // default true
    nodeMenu: false, // default true
    keypress: false, // default true,
    contextMenuOption: {
      focus: true,
      link: true,
      extend: [
        {
          name: 'Node edit',
          onclick: () => {
            alert('extend menu');
          }
        }
      ]
    }
  });
  mind.bus.addListener('selectNode', (node: MindMapNode) => {
    emits('node-click', node);
  });
  mind.init({
    nodeData: props.data,
    linkData: {}
  });
});
</script>

<style lang="postcss">
.map-container .lt {
  width: 40px;
}

.knowledge-map {
  @apply relative w-full h-screen-sm overflow-auto;
}
</style>
