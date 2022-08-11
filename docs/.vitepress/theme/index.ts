import 'virtual:windi.css';

import Layout from './components/base-layout.vue';
import './style/commom.scss';
import KnowledgeMap from './components/knowledge-map.vue';
import { EnhanceAppContext, type Theme } from 'vitepress';

export default <Theme>{
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('KnowledgeMap', KnowledgeMap);
  }
};
