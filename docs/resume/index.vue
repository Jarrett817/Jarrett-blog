<template>
  <article>
    <section class="bio">
      <div>
        <h1>王俊然</h1>
        <img src="./images/photo.jpg" alt="" />
      </div>
      <p>
        基本信息：男 <span class="column-line">|</span>25岁
        <span class="column-line">|</span>
        本科 <span class="column-line">|</span> 中共党员
      </p>
      <p>
        个人站点：
        <a class="has-background" href="https://jarrett817.github.io/Jarrett-blog/" target="_blank"
          >博客</a
        >
        <span class="column-line">|</span>
        <a href="https://github.com/Jarrett817" target="_blank">GitHub</a>
        <span class="column-line">|</span>
        <a href="https://juejin.cn/user/3940246036687774/posts" target="_blank">掘金</a>
      </p>
      <p>
        电话：<a href="tel:13516724981">135-1672-4981</a>
        <span class="column-line">|</span> 微信：13867223154
        <span class="column-line">|</span> 邮箱：<a href="mailto:jrwang0817@163.com"
          >jrwang0817@163.com</a
        >
      </p>
    </section>
    <div class="head-line"></div>
    <section class="internExperience">
      <h2>工作经历</h2>
      <ol>
        <li>
          <header>
            <h4>每日互动股份有限公司 治数平台部 前端开发</h4>
            <h4>2021.07-至今</h4>
          </header>
          <span class="has-background">工作内容：</span>
          <ul>
            <li>
              标签平台
              <strong>核心</strong> 前端开发，同时支撑建模平台、机器学习平台、基座平台的开发
            </li>
            <li>公共技术沉淀：负责公共物料、组件开发、技术方案输出及公共文档维护</li>
          </ul>
          <span class="has-background">主要业绩：</span>
          <ul>
            <li>对项目代码持续整理和封装，为后期标签平台衍生出人口数据管理平台做了良好的铺垫</li>
            <li>
              沉淀公共组件：复杂sql规则前端可视化配置组件及并发请求数据的缓存方案实现；微前端架构下页面多级跳转路径返回的自动化处理插件
            </li>
            <li>
              沉淀技术方案：解决微前端架构下多应用嵌套下的组件库zIndex层级管理问题；axios封装，支持配置全局loading、统一处理异常、重复请求cancel
            </li>
            <li>多业务并行支撑，快速响应需求和处理线上问题</li>
            <li>
              团队文档沉淀：整理和维护现有的落地方案、组件，如换肤方案、微前端下的应用嵌套方案等，充实公司内部团队文档
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <div class="split-line"></div>
    <section class="projects">
      <h2>项目经历</h2>
      <ol>
        <li>
          <header>
            <h4>标签平台</h4>
          </header>
          <p>
            该项目通过对数据进行标签化的生产管理以及用户画像、
            数据洞察等手段，帮助企业发现问题、提高效益
          </p>
          <ul>
            <li>
              基于 <strong>qiankun</strong> 的微前端架构，主要技术栈为
              <strong>Vue2</strong> /<strong> VueRouter</strong> / <strong>Vuex </strong>/<strong>
                Element UI </strong
              >/<strong> Echarts</strong>
            </li>
            <li>作为核心前端开发人员，负责前端项目的架构设计、需求拆解和进度把控</li>
            <li>后期基于标签平台衍生出人口数据管理平台，快速完成项目重构</li>
          </ul>
        </li>
      </ol>
    </section>
    <div class="split-line"></div>
    <section class="skills">
      <h2>技能</h2>
      <ul>
        <li>熟练掌握 html5、css3、javascript、typescript 开发，具备良好的解决问题的能力</li>
        <li>熟练掌握 <strong>vue</strong> 全家桶，对vue2、vue3有源码层面的理解</li>
        <li>熟悉 <strong>vite、webpack</strong> 等前端工程化技术，具备项目优化能力</li>
        <li>熟悉微前端开发，了解 qiankun 和 single-spa 原理</li>
      </ul>
    </section>
    <div class="split-line"></div>
    <section class="education">
      <h2>教育经历</h2>
      <p>
        <label
          >浙江大学城市学院 <span class="column-line">|</span> 本科
          <span class="column-line">|</span> 通信工程</label
        >
        <label>2017.09 - 2021.06</label>
      </p>
    </section>
  </article>
  <n-button class="download-btn" text type="info" @click="handleDownloadPdf">
    <n-icon size="20"><Download /></n-icon>
  </n-button>
</template>

<script setup lang="ts">
import { Download } from '@vicons/carbon';

const handleDownloadPdf = () => {
  window.print();
};
</script>

<style lang="scss" scoped>
@import './style/index.scss';

.download-btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
}
</style>

<style lang="scss" scoped>
@media print {
  body {
    margin: 0;
    background: white;
  }

  .page2 {
    page-break-before: always;
    margin-top: 30px;
  }
  .download-btn {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 500px) {
  body {
    margin: 0;
  }

  article {
    width: auto;
    height: auto;
  }

  .bio img {
    display: none;
  }

  .skills .wrapper {
    flex-direction: column;
  }
}
</style>
