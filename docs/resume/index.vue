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
        <ul>
          <li>掌握响应式设计，能够根据不同设备和屏幕尺寸优化页面布局，提升用户体验</li>
          <li>理解并掌握JavaScript语言核心技术，熟悉Typescript的应用</li>
          <li>熟练使用 Vue 及其周边生态进行项目开发并深入研究过其内部实现</li>
          <li>熟悉原生小程序开发，有大型项目的调优经验</li>
          <li>熟悉前端性能优化，能够分析并解决页面性能瓶颈，提升页面加载速度和运行效率</li>
          <li>熟练使用 Webpack、Vite 等前端构建工具，有前端项目工程化及调优经验</li>
          <li>熟悉微前端架构，了解前端微前端框架 qiankun 与 single-spa 原理</li>
        </ul>
      </section>
      <div class="split-line"></div>
      <section class="skills">
        <h2>个人优势</h2>
        <ul>
          <li>较强的主观能动性，常主动承担难点问题攻克，有效落地不烂尾</li>
          <li
            >良好的编码习惯，对代码质量有追求，合理设计、拆分模块，合理利用技术栈特性，代码高效、灵活抽象、减少重复</li
          >
          <li>善用工具库，能够快速定位源码，从根源解决问题</li>
          <li>良好的沟通能力和团队协作精神，善于围绕业务发现需求，用代码、工具解决团队问题</li>
        </ul>
      </section>
      <div class="split-line"></div>
      <section class="internExperience">
        <h2>工作经历</h2>
        <ol>
          <li>
            <header>
              <h4>杭州萤石网络股份有限公司 中台研发部 前端开发</h4>
              <h4>2024.05-至今</h4>
            </header>
            <span class="has-background">主要工作：</span>
            <ul>
              <li>负责萤石官方商城小程序、商家后台的业务迭代及技术优化</li>
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li
                ><strong>技术栈迁移：</strong
                >为项目量身设计并落地技术栈迁移方案，通过node脚本及相关适配，由wepy1.0平滑过渡到webpack混合打包，实现业务稳定、项目结构零改动、开发者零感知，为后续性能优化及实现纯原生开发做了关键铺垫</li
              >
              <li
                ><strong>性能优化：</strong
                >因地制宜，通过webpack配置调优、合理拆包、分包、组件用时注入等方式，单季度提升小程序启动性能30%以上，启动耗时由3000ms稳定下降至2000ms以内，其余各项数值均大幅提升</li
              >

              <li>入职第一季度获评新人之星</li>
            </ul>
          </li>
          <li>
            <header>
              <h4>每日互动股份有限公司 治数平台部 前端开发</h4>
              <h4>2021.07-2023.12（2020.11-2021.05实习）</h4>
            </header>
            <span class="has-background">主要工作：</span>
            <ul>
              <li>主负责标签平台前端开发，同时参与建模平台、机器学习平台、基座平台的开发 </li>
              <li
                >公共技术沉淀：负责部分公共物料、公共组件开发、技术方案输出及公共文档编写、维护</li
              >
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li
                ><strong>业务组件输出：</strong
                >微前端架构下页面多级跳转路径返回的自动化处理插件，解决业务中高频出现的页面跳转问题
              </li>
              <li
                ><strong>技术方案输出：</strong>解决微前端架构下多应用嵌套下的组件库 zIndex
                层级管理问题；axios 封装，统一团队请求调用规范
              </li>
              <li
                ><strong>团队文档沉淀：</strong
                >编写微前端架构下主、子应用从环境配置、开发规范的全流程教学文档及开发规范，推动使用
                nginx、pnpm等工具提高开发效率，并结合业务编写了使用说明，加快新人上手；梳理换肤方案及微前端下的应用嵌套方案，降低新人理解成本</li
              >
              <li>2021 P6，2022跳级P7-</li>
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
            <h4>标签平台</h4>
            <span class="has-background">项目描述：</span>
            <p
              >该项目通过对数据进行标签化的生产管理以及用户画像、
              数据洞察等手段，快速分析、圈选人群，提高效益。基于
              <strong>Qiankun</strong> 的微前端架构，主要技术栈为 <strong>Vue2</strong> /<strong>
                VueRouter</strong
              >
              / <strong>Vuex </strong>/<strong> Element UI </strong>/<strong> Echarts</strong>
            </p>
            <span class="has-background">个人产出：</span>
            <ul>
              <li>统一项目代码规范，通过配置husky为项目代码提交时添加代码规范检查与自动修复</li>
              <li
                >对项目进行梳理，列出存在的问题清单，并输出相应的优化方案和解决方案，包括功能模块、性能问题、安全漏洞等，并向组内推行</li
              >
              <li
                >主导实现业务的权限控制，根据产品需求独立设计权限控制方式并落地开发，封装公函实现权限校验与交互提示，减少各业务代码改动点</li
              >
              <li
                >持续优化项目：拆分多个巨石文件，抽象出可复用组件，降低维护难度；图表组件封装、配置项封装，降低开发成本；多词云、多图表加载性能优化；拆包优化项目加载速度</li
              >
            </ul>
          </li>
          <li>
            <h4>人口数据管理平台</h4>
            <span class="has-background">项目描述：</span>
            <p
              >基于标签平台能力开发的衍生产品，独立部署的单体应用，提供从标签创建、群体管理、群体洞察、计划投放的完整业务功能，具备比原标签平台更加用户友好的业务逻辑</p
            >
            <span class="has-background">个人产出：</span>
            <ul>
              <li
                >梳理项目的公共可用部分，包括项目配置、开发规范、复用代码，便于后续开发不同的衍生产品</li
              >
              <li
                >以最低成本整合基座的系统管理、用户管理、权限管理模块，并基于业务场景修改原有权限设计</li
              >
              <li>重业务逻辑模块的功能重构，包括标签管理、群体管理、群体洞察模块</li>
            </ul>
          </li>
          <li>
            <h4>萤石官方商城</h4>
            <span class="has-background">项目描述：</span>
            <p
              >萤石自有的商城小程序，具备商城及社区玩法能力，结合商家后台，页面可配置性强，满足运营多样化需求</p
            >
            <span class="has-background">个人产出：</span>
            <ul>
              <li
                ><strong>插件定制：</strong
                >开发实现小程序无效组件声明清理插件、高性能wxss清理插件，做好长期性能把关</li
              >
              <li
                ><strong>通用组件：</strong
                >开发实现小程序虚拟滚动组件，填补组内通用虚拟滚动组件空白，支持多列瀑布流、数据懒加载</li
              >
              <li
                ><strong>技术推动：</strong
                >推行商城小程序项目ts化，并设计推行zod接口数据校验方案</li
              >
              <li
                ><strong>工具开发：</strong
                >主动发掘日常测试需求，开发提供了“测试工具”系列，提供了测试环境切换工具、页面跳转工具、登录token修改工具、控制台工具，广受好评</li
              >
            </ul>
          </li>
        </ol>
      </section>
      <!-- <div class="split-line"></div> -->
      <!-- <section class="projects">
        <h2>个人作品</h2>
        <ol>
          <li>
            <h4>记账本</h4>
            <p>
              一个具备记账、账单管理、记账标签管理及报表功能的移动端记账本，使用Vue2、Vue3、React分别制作了一版，后端使用Egg.js和MySQL数据库开发。
            </p>
            <ul>
              <li>
                <div class="flex justify-between items-start">
                  <span class="flex-1">
                    Vue2 版：<a href="https://github.com/Jarrett817/iAccounts-vue2" target="_blank"
                      >https://github.com/Jarrett817/iAccounts-vue2</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <span class="flex-1">
                    React 版：<a
                      href="https://github.com/Jarrett817/iAccounts-react"
                      target="_blank"
                      >https://github.com/Jarrett817/iAccounts-react</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <div class="flex item-start justify-between">
                  <span class="flex-1">
                    Vue3 版：<a href="https://github.com/Jarrett817/iAccounts_vue3" target="_blank"
                      >https://github.com/Jarrett817/iAccounts_vue3</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <span class="flex-1">
                    后端：<a href="https://github.com/Jarrett817/i-accounts-api" target="_blank"
                      >https://github.com/Jarrett817/i-accounts-api</a
                    >
                  </span>
                </div>
              </li>
            </ul>
            <span class="has-background">技术亮点：</span>
            <ul>
              <li>针对不同的设备，进行相应的适配和兼容，以保证在各种设备上都能够正常运行</li>
              <li>抽取通用方法和业务组件，保证项目中所有复用内容保持一致，提高开发效率</li>
            </ul>
          </li>
        </ol>
      </section> -->
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
      <!-- <div class="page-num">2/2</div> -->
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
    padding: 14px;
  }

  // .bio img {
  //   display: none;
  // }
}
</style>
