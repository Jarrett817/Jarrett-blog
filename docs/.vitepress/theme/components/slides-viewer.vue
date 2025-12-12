<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/plugin/highlight/zenburn.css';
import { useRoute } from 'vitepress';
import { data as markdownData } from '../../data/markdown.data';
import { base } from '../../shared/index';
import { Close } from '@vicons/carbon';

interface Props {
  visible: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
}>();

const route = useRoute();
const containerRef = ref<HTMLElement | null>(null);
const revealRef = ref<HTMLElement | null>(null);
const themeContainerRef = ref<HTMLElement | null>(null);
const themeHovered = ref(false);
const currentTheme = ref('black');
const markdownContent = ref('');
let revealInstance: Reveal.Api | null = null;

// 主题 CSS 模块映射（按字母顺序）
const themeCSSModules = {
  beige: () => import('reveal.js/dist/theme/beige.css' as any),
  black: () => import('reveal.js/dist/theme/black.css' as any),
  'black-contrast': () => import('reveal.js/dist/theme/black-contrast.css' as any),
  blood: () => import('reveal.js/dist/theme/blood.css' as any),
  dracula: () => import('reveal.js/dist/theme/dracula.css' as any),
  league: () => import('reveal.js/dist/theme/league.css' as any),
  moon: () => import('reveal.js/dist/theme/moon.css' as any),
  night: () => import('reveal.js/dist/theme/night.css' as any),
  serif: () => import('reveal.js/dist/theme/serif.css' as any),
  simple: () => import('reveal.js/dist/theme/simple.css' as any),
  sky: () => import('reveal.js/dist/theme/sky.css' as any),
  solarized: () => import('reveal.js/dist/theme/solarized.css' as any),
  white: () => import('reveal.js/dist/theme/white.css' as any),
  'white-contrast': () => import('reveal.js/dist/theme/white-contrast.css' as any),
  'white-contrast-compact-verbatim-headers': () =>
    import('reveal.js/dist/theme/white_contrast_compact_verbatim_headers.css' as any)
};

// 当前加载的主题 CSS 模块
let currentThemeModule: any = null;

// Reveal.js 主题列表（与 themeCSSModules 保持一致）
const themes = [
  { label: '米色 (Beige)', value: 'beige' },
  { label: '黑色 (Black)', value: 'black' },
  { label: '黑色高对比 (Black Contrast)', value: 'black-contrast' },
  { label: '血液 (Blood)', value: 'blood' },
  { label: 'Dracula', value: 'dracula' },
  { label: '联盟 (League)', value: 'league' },
  { label: '月亮 (Moon)', value: 'moon' },
  { label: '夜晚 (Night)', value: 'night' },
  { label: '衬线 (Serif)', value: 'serif' },
  { label: '简约 (Simple)', value: 'simple' },
  { label: '天空 (Sky)', value: 'sky' },
  { label: 'Solarized', value: 'solarized' },
  { label: '白色 (White)', value: 'white' },
  { label: '白色高对比 (White Contrast)', value: 'white-contrast' },
  {
    label: '白色高对比紧凑 (White Contrast Compact)',
    value: 'white-contrast-compact-verbatim-headers'
  }
];

// 切换主题
const loadTheme = async (themeName: string) => {
  if (revealRef.value) {
    // 移除所有主题类
    const themeClasses = themes.map(t => `theme-${t.value}`);
    revealRef.value.classList.remove(...themeClasses);
    // 添加新主题类
    revealRef.value.classList.add(`theme-${themeName}`);
  }

  // 动态加载对应的主题 CSS
  const themeLoader = themeCSSModules[themeName as keyof typeof themeCSSModules];
  if (themeLoader) {
    try {
      // 加载新主题 CSS（Vite 会自动处理 CSS 的加载和卸载）
      currentThemeModule = await themeLoader();
    } catch (error) {
      console.error(`Failed to load theme ${themeName}:`, error);
    }
  }

  // 保存到 localStorage
  localStorage.setItem('reveal-theme', themeName);
  currentTheme.value = themeName;
};

// 初始化主题
const initTheme = async () => {
  const savedTheme = localStorage.getItem('reveal-theme') || 'black';
  await loadTheme(savedTheme);
};
// 从构建时加载的数据中获取当前页面的原始 Markdown
const getPageMarkdown = (): string => {
  // 获取当前路由路径
  const currentPath = route.path.replace(base, '') || '/index';

  // 在构建时加载的数据中查找匹配的页面
  const page = markdownData.find(item => {
    // 匹配 URL，例如 /front-end/quill 对应 front-end/quill.md
    return item.url === currentPath;
  });
  return page?.src || '';
};

// 初始化 Reveal.js
const init = async () => {
  if (!containerRef.value || !revealRef.value) return;

  // 清理之前的实例
  if (revealInstance) {
    try {
      revealInstance.destroy();
    } catch (e) {
      // 忽略销毁错误
    }
    revealInstance = null;
  }

  // 从构建时加载的数据中获取原始 Markdown 内容
  const pageMarkdown = getPageMarkdown();
  if (pageMarkdown) {
    markdownContent.value = pageMarkdown;
  } else {
    console.warn('No markdown content found for current page');
    return;
  }

  // 等待 DOM 更新
  await nextTick();

  // 初始化主题（必须在初始化 Reveal.js 之前）
  await initTheme();

  // 再次等待，确保主题类已应用
  await nextTick();

  // 初始化 Reveal.js - 使用正确的 API
  revealInstance = new Reveal(revealRef.value, {
    plugins: [Markdown, Highlight],
    hash: true,
    controls: true,
    progress: true,
    center: true,
    touch: true,
    keyboard: true,
    overview: true,
    transition: 'slide',
    backgroundTransition: 'fade',
    markdown: {
      smartypants: true
    },
    highlight: {
      highlightOnLoad: true
    }
  });

  try {
    await revealInstance.initialize();
    // 初始化后再次确保主题正确
    if (revealRef.value) {
      loadTheme(currentTheme.value);
    }
  } catch (error) {
    console.error('Failed to initialize Reveal.js:', error);
  }
};

// 关闭幻灯片
const closeSlides = () => {
  if (revealInstance) {
    try {
      revealInstance.destroy();
    } catch (e) {
      // 忽略销毁错误
    }
    revealInstance = null;
  }
  emit('close');
};

// 监听 visible 变化
watch(
  () => props.visible,
  async newVal => {
    if (newVal) {
      await nextTick();
      await init();
    } else {
      closeSlides();
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="containerRef"
      :class="`theme-${currentTheme} reveal-container w-screen h-screen`"
    >
      <div ref="revealRef" class="reveal">
        <div class="slides">
          <section data-markdown>
            <textarea data-template>{{ markdownContent }}</textarea>
          </section>
        </div>
      </div>
    </div>
    <!-- 主题切换区域（左上角，鼠标悬停显示） -->
    <div
      v-if="visible"
      ref="themeContainerRef"
      class="absolute top-0 left-0 shadow-sm w-full h-15 z-[10001] flex justify-between p-4 opacity-0 hover:opacity-100 transition-all duration-300"
    >
      <n-select
        v-if="themeContainerRef"
        v-model="currentTheme"
        :options="themes"
        placeholder="选择主题"
        size="small"
        :to="themeContainerRef"
        class="w-[200px]"
        @update:value="loadTheme"
      />
      <n-button circle @click="closeSlides">
        <template #icon>
          <n-icon><Close /></n-icon>
        </template>
      </n-button>
    </div>
  </Teleport>
</template>

<style lang="scss">
// Reveal.js 基础样式
@import 'reveal.js/dist/reveal.css';

// Reveal.js 主题样式
// 主题 CSS 通过 JavaScript 动态 import 导入，实现按需加载
// 这里只定义主题类名，用于 JavaScript 切换
</style>

<style lang="scss" scoped>
/* Reveal.js 容器样式 */
.reveal-container {
  overflow: hidden;
}

/* Reveal.js 样式 */
:deep(.reveal) {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
