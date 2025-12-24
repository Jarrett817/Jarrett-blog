<script setup lang="ts">
import { nextTick, ref, shallowRef, watch } from 'vue';
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
const currentTheme = ref('black');
const markdownContent = ref('');

// Reveal.js 相关类型和实例（仅在客户端使用）
// 使用 shallowRef 因为不需要深度响应式，只需要引用
const revealInstance = shallowRef<any>(null);
const Reveal = shallowRef<any>(null);
const Markdown = shallowRef<any>(null);
const Highlight = shallowRef<any>(null);

// 主题 CSS 模块映射（使用 ?url 后缀获取文件 URL）
const themeCSSModules = {
  beige: () => import('reveal.js/dist/theme/beige.css?url' as any),
  black: () => import('reveal.js/dist/theme/black.css?url' as any),
  'black-contrast': () => import('reveal.js/dist/theme/black-contrast.css?url' as any),
  blood: () => import('reveal.js/dist/theme/blood.css?url' as any),
  dracula: () => import('reveal.js/dist/theme/dracula.css?url' as any),
  league: () => import('reveal.js/dist/theme/league.css?url' as any),
  moon: () => import('reveal.js/dist/theme/moon.css?url' as any),
  night: () => import('reveal.js/dist/theme/night.css?url' as any),
  serif: () => import('reveal.js/dist/theme/serif.css?url' as any),
  simple: () => import('reveal.js/dist/theme/simple.css?url' as any),
  sky: () => import('reveal.js/dist/theme/sky.css?url' as any),
  solarized: () => import('reveal.js/dist/theme/solarized.css?url' as any),
  white: () => import('reveal.js/dist/theme/white.css?url' as any),
  'white-contrast': () => import('reveal.js/dist/theme/white-contrast.css?url' as any),
  'white-contrast-compact-verbatim-headers': () =>
    import('reveal.js/dist/theme/white_contrast_compact_verbatim_headers.css?url' as any)
};

// 当前加载的主题 link 元素
const currentThemeLink = ref<HTMLLinkElement | null>(null);

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
  // 仅在客户端执行
  if (typeof window === 'undefined') return;

  if (revealRef.value) {
    // 移除所有主题类
    const themeClasses = themes.map(t => `theme-${t.value}`);
    revealRef.value.classList.remove(...themeClasses);
    // 添加新主题类
    revealRef.value.classList.add(`theme-${themeName}`);
  }

  // 移除之前加载的主题 CSS link 标签
  if (currentThemeLink.value && currentThemeLink.value.parentNode) {
    currentThemeLink.value.parentNode.removeChild(currentThemeLink.value);
    currentThemeLink.value = null;
  }

  // 动态加载对应的主题 CSS
  const themeLoader = themeCSSModules[themeName as keyof typeof themeCSSModules];
  if (themeLoader) {
    try {
      // 使用 ?url 后缀获取 CSS 文件的 URL
      // Vite 的 ?url 返回格式: { default: string }
      const module = await themeLoader();
      const cssUrl = (module as any).default || (module as any).url || module;

      if (cssUrl && typeof cssUrl === 'string') {
        // 创建新的 link 标签
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        link.id = `reveal-theme-${themeName}`;

        // 添加到 head
        document.head.appendChild(link);
        currentThemeLink.value = link;
      }
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
  // 仅在客户端执行
  if (typeof window === 'undefined') return;
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
  // 仅在客户端执行
  if (typeof window === 'undefined') return;
  if (!containerRef.value || !revealRef.value) return;

  // 动态导入 reveal.js 及其插件（仅在客户端）
  if (!Reveal.value) {
    try {
      const revealModule = await import('reveal.js');
      Reveal.value = revealModule.default || revealModule;

      const markdownModule = await import('reveal.js/plugin/markdown/markdown.esm.js');
      Markdown.value = markdownModule.default || markdownModule;

      const highlightModule = await import('reveal.js/plugin/highlight/highlight.esm.js');
      Highlight.value = highlightModule.default || highlightModule;
    } catch (error) {
      console.error('Failed to load reveal.js:', error);
      return;
    }
  }

  // 清理之前的实例
  if (revealInstance.value) {
    try {
      revealInstance.value.destroy();
    } catch (e) {
      // 忽略销毁错误
    }
    revealInstance.value = null;
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
  revealInstance.value = new Reveal.value(revealRef.value, {
    plugins: [Markdown.value, Highlight.value],
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
    await revealInstance.value.initialize();
    // 初始化后再次确保主题正确
    if (revealRef.value) {
      loadTheme(currentTheme.value);
    }
  } catch (error) {
    console.error('Failed to initialize Reveal.js:', error);
  }
};

// 清理主题 CSS
const cleanupTheme = () => {
  if (currentThemeLink.value && currentThemeLink.value.parentNode) {
    currentThemeLink.value.parentNode.removeChild(currentThemeLink.value);
    currentThemeLink.value = null;
  }
};

// 关闭幻灯片
const closeSlides = () => {
  if (revealInstance.value) {
    try {
      revealInstance.value.destroy();
    } catch (e) {
      // 忽略销毁错误
    }
    revealInstance.value = null;
  }
  // 清理主题 CSS
  cleanupTheme();
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
@import 'reveal.js/dist/reveal.css';
@import 'reveal.js/plugin/highlight/zenburn.css';
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
