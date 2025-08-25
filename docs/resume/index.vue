<template>
  <div style="background: rgb(218, 220, 224)" class="color-#3c3c43">
    <article>
      <n-button v-if="isMobile" quaternary class="hidden-when-print px-0" @click="router.go('/')">
        <n-icon size="20"><ArrowLeft /></n-icon>
        首页
      </n-button>
      <section class="bio">
        <div class="flex-1">
          <div>
            <h1>王俊然</h1>
          </div>
          <p>
            基本信息：男 <span class="column-line">|</span>26岁
            <span class="column-line">|</span>
            本科 <span class="column-line">|</span> 中共党员
          </p>
          <p>
            电话：<a href="tel:13516724981">135-1672-4981</a>
            <span class="column-line">|</span> 微信：13867223154
            <span class="column-line">|</span> 邮箱：<a href="mailto:jrwang0817@163.com"
              >jrwang0817@163.com</a
            >
          </p>
        </div>
        <img src="./images/photo.jpeg" alt="证件照" />
      </section>
      <div class="head-line"></div>
      <section class="skills">
        <h2>技能</h2>
        <div class="flex flex-row gap-5 mt-4">
          <div class="flex-1">
            <h4 class="text-gray-800 text-base font-semibold mb-3">前端技术</h4>
            <ul>
              <li class="leading-tight"
                >熟练掌握 Vue2/3、React 及其生态，深入研究过 Vue 内部实现</li
              >
              <li class="leading-tight"
                >熟练掌握 TypeScript、JavaScript(ES6+)，熟悉微信小程序开发与调优</li
              >
              <li class="leading-tight">掌握响应式设计，注重用户体验和性能优化</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-gray-800 text-base font-semibold mb-3">工程化 & 架构</h4>
            <ul>
              <li class="leading-tight"
                >熟练使用 Webpack、Vite 等构建工具，有前端项目工程化调优经验</li
              >
              <li class="leading-tight">熟悉微前端架构，了解 qiankun、single-spa 原理</li>
              <li class="leading-tight">熟练使用 AI 工具辅助开发，通过合理配置提升开发效率</li>
            </ul>
          </div>
        </div>
      </section>
      <div class="split-line"></div>
      <section class="internExperience">
        <h2>工作经历</h2>
        <ol>
          <li>
            <header>
              <h4>杭州萤石网络股份有限公司 | 中台研发部 | 前端开发</h4>
              <h4>2024.05-至今</h4>
            </header>
            <span class="has-background">主要工作：</span>
            <ul>
              <li>主导萤石官方商城小程序、商家后台的业务迭代及技术优化</li>
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li>
                <strong>技术栈迁移：</strong>设计并落地技术栈迁移方案，从 wepy1.0 平滑过渡到 webpack
                混合打包，实现业务零影响、开发者零感知
              </li>
              <li>
                <strong>性能优化：</strong>通过 webpack
                配置调优、合理拆包分包等方式，单季度提升小程序冷启动性能<strong>40%</strong>，启动耗时从
                3000ms 降至 1800ms
              </li>
              <li>入职第一季度获评新人之星</li>
            </ul>
          </li>
          <li>
            <header>
              <h4>每日互动股份有限公司 | 治数平台部 | 前端开发</h4>
              <h4>2021.07-2023.12</h4>
            </header>
            <span class="has-background">主要工作：</span>
            <ul>
              <li
                >主导标签平台前端、人口数据管理平台开发，同时负责建模平台、机器学习平台、基座平台的开发</li
              >
              <li
                >公共技术沉淀：负责部分公共物料、公共组件开发、技术方案输出，主导公共文档编写、维护
              </li>
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li>
                <strong>业务组件输出：</strong
                >开发微前端架构下页面多级跳转路径返回自动化处理插件，封装横向树组件应用于可视化 SQL
                配置场景，被多个业务线使用
              </li>
              <li>
                <strong>技术方案输出：</strong>解决微前端架构下多应用嵌套的组件库 zIndex
                层级管理问题，解决跨应用样式冲突
              </li>
              <li>
                <strong>团队文档沉淀：</strong
                >编写微前端架构下主、子应用从环境配置、开发规范的全流程开发文档，降低新人上手成本；梳理换肤方案及微前端下的应用嵌套方案
              </li>
              <li>2021 P6，2023跳级P7-</li>
            </ul>
          </li>
        </ol>
      </section>
      <!-- <div class="page-num">1/2</div> -->
      <!-- <div class="split-line" style="page-break-before: always"></div> -->
      <div class="split-line"></div>
      <section class="projects">
        <h2>项目经历</h2>
        <ol>
          <li>
            <h4>萤石官方商城</h4>
            <span class="has-background">项目描述：</span>
            <p
              >萤石自有的商城微信小程序，具备商城及社区玩法能力，结合商家后台，页面可配置性强，满足运营多样化需求。技术栈为微信原生小程序
            </p>
            <span class="has-background">个人产出：</span>
            <ul>
              <li>
                <strong>插件定制：</strong>开发小程序冗余组件声明清理插件、高性能 wxss
                清理插件，首次清理冗余组件声明 150+，清理 wxss 约 100KB
              </li>
              <li>
                <strong>通用组件：</strong
                >开发小程序不定高虚拟滚动组件，填补组内通用虚拟滚动组件空白，支持多列瀑布流、万级数据渲染
              </li>
              <li>
                <strong>技术推动：</strong>推行商城小程序项目 ts 化，设计推广 zod
                接口数据校验方案，线上单日捕获后端数据类型错误 1000+
              </li>
              <li>
                <strong>工具开发：</strong
                >主动发掘日常测试需求，开发"测试工具"系列，包括测试环境切换、页面跳转、登录 token
                修改、控制台等工具，减少测试环节对开发的依赖，提升开发、测试工作效率
              </li>
            </ul>
          </li>
          <li>
            <h4>创新社区</h4>
            <span class="has-background">项目描述：</span>
            <p
              >萤石内部创新机制平台，更好的推进创新项目落地，同时为员工提供创新激励。技术栈为<strong
                >Next.js</strong
              >
              / <strong>React 19</strong> / <strong>shadcn</strong> /
              <strong>Tailwind CSS</strong> / <strong>React Query</strong> /
              <strong>Quill</strong> / <strong>TypeScript</strong>
            </p>
            <span class="has-background">个人职责：</span>
            <ul>
              <li
                ><strong>架构设计：</strong>设计 AI 友好的代码组织约定，透明组件模板、轻量封装，便于
                AI 理解和修改</li
              >
              <li>
                <strong>AI 辅助：</strong>合理配置
                rules，定义代码规范、项目规范，及部分固定流程的业务开发定义，大幅提升开发效率
              </li>
            </ul>
          </li>
          <li>
            <h4>标签平台</h4>
            <span class="has-background">项目描述：</span>
            <p
              >该项目通过对数据进行标签化的生产管理以及用户画像、
              数据洞察等手段，快速分析、圈选人群，提高效益。基于
              <strong>Qiankun</strong> 的微前端架构，主要技术栈为 <strong>Vue2 系列全家桶</strong> /
              <strong>Element UI</strong> / <strong>ECharts</strong>
            </p>
            <span class="has-background">个人产出：</span>
            <ul>
              <li
                >封装业务图表组件，支持快速配置折线图、饼图、环形图、柱形图、象形柱图、混合图表，在项目中统一使用，解决项目图表多、配置麻烦的问题
              </li>
              <li
                >以最低成本整合基座的系统管理、用户管理、权限管理模块，并基于业务场景修改原有权限设计，重构标签管理、群体管理、群体洞察模块，短期内快速完成衍生项目《人口数据管理平台》的开发上线</li
              >
            </ul>
          </li>
        </ol>
      </section>
      <div class="split-line"></div>
      <section class="skills">
        <h2>个人优势</h2>
        <ul>
          <li>较强的主观能动性，常主动承担难点问题攻克，有效落地不烂尾</li>
          <li
            >良好的编码习惯，对代码质量有追求，合理设计、拆分模块，合理利用技术栈特性，代码高效、灵活抽象
          </li>
          <li>善用工具库，能够快速定位源码，从根源解决问题</li>
          <li>良好的沟通能力和团队协作精神，善于围绕业务发现需求，用代码、工具解决团队问题</li>
        </ul>
      </section>
      <!-- <div class="split-line"></div> -->
      <!-- <section class="website">
        <h2>个人站点</h2>
        <ul>
          <li
            >博客：
            <a href="https://jarrett817.github.io/Jarrett-blog/" target="_blank"
              >https://jarrett817.github.io/Jarrett-blog/</a
            ></li
          >
          <li
            >Github：
            <a href="https://github.com/Jarrett817" target="_blank"
              >https://github.com/Jarrett817</a
            >
          </li>
          <li
            >掘金：
            <a href="https://juejin.cn/user/3940246036687774/posts" target="_blank"
              >https://juejin.cn/user/3940246036687774/posts</a
            ></li
          >
        </ul>
      </section> -->
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
  </div>
  <template v-if="!isMobile">
    <n-button
      class="download-btn hidden-when-print"
      quaternary
      type="info"
      key="download"
      @click="handleDownloadPdf"
    >
      <n-icon size="20"><Download /></n-icon>
    </n-button>
    <n-button
      key="back"
      quaternary
      class="fixed left-20px top-20px hidden-when-print"
      @click="router.go('/')"
    >
      <n-icon size="20"><ArrowLeft /></n-icon>
      首页
    </n-button>
  </template>
</template>

<script setup lang="ts">
import { Download, ArrowLeft } from '@vicons/carbon';
import { useRouter } from 'vitepress';
import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 900px)');

const router = useRouter();
const handleDownloadPdf = () => {
  window.print();
};
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;

.download-btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
}

.technical-highlights {
  ul {
    padding-left: 20px;

    li {
      margin-bottom: 12px;
      line-height: 1.6;
    }
  }
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
    padding: 14px;
  }

  // .bio img {
  //   display: none;
  // }
}
</style>
