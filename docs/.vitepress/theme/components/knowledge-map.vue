<script setup lang="ts">
import { useData, type DefaultTheme, useRouter } from 'vitepress';
import { MindMapNode } from './mind-map/types';
import MindMap from './mind-map/index.vue';
import { v4 } from 'uuid';

const sidebar = useData().theme.value.sidebar as DefaultTheme.SidebarGroup[];

const formatData = (data: DefaultTheme.SidebarGroup[]): MindMapNode => {
  const root: MindMapNode = { id: 'root', name: 'root', topic: 'root', root: true, children: [] };
  root.children = data?.map(({ text, items }: DefaultTheme.SidebarGroup) => {
    return {
      name: text,
      topic: text,
      id: v4(),
      expanded: true,
      route: '',
      children: items.map(({ text, link }: DefaultTheme.SidebarItem) => ({
        name: text,
        id: v4(),
        topic: text,
        expanded: true,
        route: link
      }))
    } as MindMapNode;
  });
  return root;
};

const minMapData = formatData(sidebar);
const router = useRouter();
const handleNodeClick = ({ route }: MindMapNode) => {
  route && router.go(route);
};
</script>

<template>
  <MindMap :data="minMapData" @node-click="handleNodeClick" />
</template>
