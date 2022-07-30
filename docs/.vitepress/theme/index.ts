import 'virtual:windi.css';

import Layout from './components/base-layout.vue';
import './style/commom.scss';
import MindMap from './components/mind-map/index.vue';
import { EnhanceAppContext, type Theme } from 'vitepress';

export default <Theme>{
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('MindMap', MindMap);
  }
};
