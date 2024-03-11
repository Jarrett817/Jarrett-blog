import Layout from './components/base-layout.vue';
import './style/commom.scss';
import KnowledgeMap from './components/knowledge-map.vue';
import { EnhanceAppContext, type Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import 'virtual:uno.css';

export default <Theme>{
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('KnowledgeMap', KnowledgeMap);
  }
};
