<template>
  <div style="background: rgb(218, 220, 224)">
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
          个人站点：<a
            class="has-background"
            href="https://jarrett817.github.io/Jarrett-blog/"
            target="_blank"
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
      <section class="skills">
        <h2>技能</h2>
        <ul>
          <li>熟练掌握 HTML5、CSS3、JavaScript、TypeScript 开发</li>
          <li>熟练掌握 <strong>Vue</strong> 全家桶，有源码层面的理解</li>
          <li>熟悉 <strong>Vue-Cli、Vite、Webpack</strong> 等前端工程化技术，具备项目优化能力</li>
          <li>熟悉微前端开发，了解 Qiankun 和 Single-Spa 原理</li>
          <li>了解 Nodejs 后端开发，熟悉前后端交互协作流程</li>
        </ul>
      </section>
      <div class="split-line"></div>
      <section class="internExperience">
        <h2>工作经历</h2>
        <ol>
          <li>
            <header>
              <h4>每日互动股份有限公司 治数平台部 前端开发</h4>
              <h4>2021.07-2023.12</h4>
            </header>
            <span class="has-background">工作内容：</span>
            <ul>
              <li>主负责标签平台前端开发，同时参与建模平台、机器学习平台、基座平台的开发 </li>
              <li
                >公共技术沉淀：负责部分公共物料、公共组件开发、技术方案输出及公共文档编写、维护</li
              >
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li>自标签平台 mvp 版本起参与开发迭代，后期负责业务重构，多业务线并行支撑</li>
              <li
                ><strong>业务组件输出：</strong
                >复杂sql规则前端可视化配置组件，解决多业务场景对且、或多层 sql
                逻辑嵌套的需求；微前端架构下页面多级跳转路径返回的自动化处理插件，解决业务中高频出现的页面跳转问题
              </li>
              <li
                ><strong>技术方案输出：</strong>解决微前端架构下多应用嵌套下的组件库 zIndex
                层级管理问题；axios 封装，支持配置全局 loading、统一处理异常、重复请求
                cancel，提高开发效率
              </li>
              <li
                ><strong>团队文档沉淀：</strong
                >编写微前端架构下，主、子应用从环境配置、项目开发、组内约定的全流程教学文档及开发规范，文档中推动使用
                nginx、pnpm
                加快开发效率并结合业务编写了基础的使用说明，加快新人上手；梳理换肤方案及微前端下的应用嵌套方案，降低新人理解成本</li
              >
            </ul>
          </li>
        </ol>
      </section>
      <div class="page-num">1/2</div>
      <div class="split-line" style="page-break-before: always"></div>
      <section class="projects">
        <h2>项目经历</h2>
        <ol>
          <li>
            <span class="has-background">标签平台：</span>
            <p
              >该项目通过对数据进行标签化的生产管理以及用户画像、
              数据洞察等手段，快速分析、圈选人群，提高效益
            </p>
            <ul>
              <li
                >基于 <strong>Qiankun</strong> 的微前端架构，主要技术栈为
                <strong>Vue2</strong> /<strong> VueRouter</strong> / <strong>Vuex </strong>/<strong>
                  Element UI </strong
                >/<strong> Echarts</strong>
              </li>
              <li>负责前端项目的迭代开发、需求拆解和进度把控</li>
              <li
                >拆包优化页面加载速度；在组内主动推动使用pnpm替换npm，缩短devOps一分钟的打包时长</li
              >
              <li
                >持续优化项目：拆分多个巨石文件，抽象出可复用组件，降低维护难度；图表组件封装、配置项封装，降低开发成本；多词云、多图表加载性能优化</li
              >
              <li>后期基于标签平台业务重构出人口数据管理平台，以最低成本完成项目重构</li>
            </ul>
          </li>
        </ol>
      </section>
      <div class="split-line"></div>
      <section class="projects">
        <h2>个人作品</h2>
        <ol>
          <li>
            <span class="has-background">记账本</span>
            <p>
              一个具备记账、账单管理、记账标签管理及报表功能的移动端记账本，使用Vue2、Vue3、React分别制作了一版，熟悉web开发全流程，熟悉主流开发工具差异
            </p>
            <ul>
              <li>
                <div class="flex justify-between items-center">
                  <span>
                    Vue2 版：使用 <strong>Vue2</strong> / <strong>VueRouter</strong> /
                    <strong>Vuex</strong> / <strong>TypeScript</strong> 开发
                  </span>
                  <span>
                    <a href="https://github.com/Jarrett817/money-lover" target="_blank">源码</a>
                    <a href="http://jarrett0817.gitee.io/money-lover-website" target="_blank"
                      >预览</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <span>
                    React 版：使用 <strong>React</strong> / <strong>React Router</strong> /
                    <strong>TypeScript</strong> 开发
                  </span>
                  <span>
                    <a href="https://github.com/Jarrett817/monry-lover-react" target="_blank"
                      >源码</a
                    >
                    <a href="http://jarrett0817.gitee.io/money-lover-react-website" target="_blank"
                      >预览</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <div class="flex item-start justify-between">
                  <span>
                    Vue3 版：前端使用 <strong>Vue3</strong> / <strong>VueRouter</strong> /
                    <strong>Vuex</strong> / <strong>Vite</strong> / <strong>Axios</strong> /
                    <strong>Vant UI</strong> / <strong>TypeScript</strong> 开发 ；后端使用
                    <strong>Eggjs</strong> / <strong>MySql</strong> 开发，云服务器部署
                  </span>
                  <span class="flex flex-col items-end">
                    <span>
                      <a
                        href="https://modao.cc/app/70d1df3f41666d3c9917f6e233d472c5a1b4e3e5?simulator_type=outside_artboard&sticky"
                        target="_blank"
                        >原型</a
                      >
                      <a href="https://jarrett817.github.io/iAccounts_vue3/" target="_blank"
                        >预览</a
                      >
                    </span>
                    <span class="whitespace-nowrap">
                      <a href="https://github.com/Jarrett817/money-lover_vue3" target="_blank"
                        >前端源码</a
                      >
                      <a href="https://github.com/Jarrett817/i-accounts-api" target="_blank"
                        >后端源码</a
                      >
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <span class="has-background">自制 UI 组件库</span>
            <div class="flex justify-between items-center">
              <p> 使用 <strong>Vue3</strong> / <strong>TypeScript</strong> 的自制 UI 库 </p>
              <span>
                <a href="https://github.com/Jarrett817/lazyer-ui" target="_blank">源码</a>
                <a href="http://jarrett0817.gitee.io/lazyer-ui-website" target="_blank">预览</a>
              </span>
            </div>
            <ul>
              <li>目前实现了按钮、开关、弹出框、标签页、下拉菜单等基础组件</li>
              <li
                >使用了 vue3 的<strong> Composition API</strong
                >，setup、onMounted、watchEffect、ref、computed 等
              </li>
              <li>自制了官网，对每个组件用例进行介绍和展示</li>
            </ul>
          </li>
        </ol>
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
      <div class="page-num">2/2</div>
    </article>
  </div>

  <n-button class="download-btn hidden-when-print" text type="info" @click="handleDownloadPdf">
    <n-icon size="20"><Download /></n-icon>
  </n-button>
  <n-button class="fixed left-20px top-20px hidden-when-print" @click="router.go('/')">
    <n-icon size="20"><ArrowLeft /></n-icon>
    回到首页
  </n-button>
</template>

<script setup lang="ts">
import { Download, ArrowLeft } from '@vicons/carbon';
import { useRouter } from 'vitepress';

const router = useRouter();
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

  .hidden-when-print {
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
