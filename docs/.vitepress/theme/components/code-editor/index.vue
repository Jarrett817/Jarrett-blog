<template>
  <div ref="target" class="monaco-editor-wrap"></div>
</template>
<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { nextTick, ref, watch } from 'vue';

interface Props {
  value: string | null;
}

const target = ref<HTMLCanvasElement | null>(null);
let editor: null | monaco.editor.IStandaloneCodeEditor = null;
const props = withDefaults(defineProps<Props>(), {
  value: null
});
function updateEditorHeightAuto(): void {
  if (!editor) return;
  const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
  const lineCount = editor.getModel()?.getLineCount() || 1;
  const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;

  if (target.value) {
    target.value.style.height = `${height + 12}px`;
  }
  editor.layout();
}
watch(
  () => props.value,
  value => {
    nextTick(() => {
      if (target?.value && value) {
        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          '',
          'file:///node_modules/@types/wechat-miniprogram/index.d.ts'
        );
        editor = monaco.editor.create(target?.value, {
          value,
          language: 'typescript',
          theme: 'vs-dark',
          formatOnPaste: true
        });
        nextTick(() => {
          updateEditorHeightAuto();
          editor && editor.getAction('editor.action.formatDocument')?.run();
        });
      }
    });
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.monaco-editor-wrap {
  background-color: #1e1e1e;
  width: 100%;
  padding-top: 12px;
}
</style>
