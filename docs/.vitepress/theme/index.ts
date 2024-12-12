import Layout from './components/base-layout.vue';
import './style/commom.scss';
import KnowledgeMap from './components/knowledge-map.vue';
import MindMap from './components/mind-map/index.vue';
import { EnhanceAppContext, type Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import 'virtual:uno.css';
import CodeEditor from './components/code-editor/index.vue';

export default <Theme>{
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('MindMap', MindMap);
    app.component('KnowledgeMap', KnowledgeMap);
    app.component('CodeEditor', CodeEditor);
  }
};
