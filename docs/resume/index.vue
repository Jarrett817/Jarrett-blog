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
            基本信息：男 <span class="column-line">|</span>25岁
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
          <li>熟练掌握 HTML5、CSS3、JavaScript、TypeScript 开发，具备良好的编码习惯</li>
          <li>熟练使用 Vue 及其周边生态进行项目开发并深入研究过其内部实现</li>
          <li>熟悉微前端架构，了解前端微前端框架 qiankun 与 single-spa 原理</li>
          <li>熟悉前端性能优化，能够分析并解决页面性能瓶颈，提升页面加载速度和运行效率</li>
          <li>熟练使用 Vue Cli、Vite 等前端构建工具，有前端项目工程化及优化经验</li>
          <li>具备良好的沟通能力和团队协作精神，能够根据项目需求进行技术方案的设计和优化</li>
        </ul>
      </section>
      <div class="split-line"></div>
      <section class="internExperience">
        <h2>工作经历</h2>
        <ol>
          <li>
            <header>
              <h4>每日互动股份有限公司 治数平台部 前端开发</h4>
              <h4>2020.11-2023.12（2020.11 - 2021.5 实习）</h4>
            </header>
            <span class="has-background">主要工作：</span>
            <ul>
              <li
                >独立负责部门多个重要项目开发，主负责标签平台、人口数据管理平台，同时负责过建模平台、机器学习平台、基座平台的部分迭代，按时交付率
                100%</li
              >
              <li
                >公共技术沉淀：负责部分公共物料、公共组件开发、技术方案输出及公共文档编写、维护</li
              >
            </ul>
            <span class="has-background">主要业绩：</span>
            <ul>
              <li
                ><strong>业务组件输出：</strong
                >类思维导图的sql规则前端可视化配置组件，支持自定义节点，解决多业务场景下对且、或多层
                sql
                逻辑嵌套的需求，该交互方式在多业务线推行使用；微前端架构下页面多级跳转路径返回组件，解决业务中高频出现的页面跳转及参数携带问题，在业务中广泛使用
              </li>
              <li
                ><strong>技术方案输出：</strong>发现并解决微前端架构下多应用嵌套下的 element-ui
                组件库 zIndex 层级管理问题；axios 封装，支持配置全局
                loading、统一处理异常提示、重复请求 cancel，一般场景下无需单独编写 loading
                显示逻辑，提高开发效率
              </li>
              <li
                ><strong>团队文档沉淀：</strong
                >编写微前端架构下主、子应用从环境配置、开发规范的全流程教学文档及开发规范，推动使用
                nginx、pnpm等工具提高开发效率，结合业务编写使用说明，加快新人上手；梳理换肤方案及微前端下的应用嵌套方案，降低新人理解成本</li
              >
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
              <strong>Qiankun</strong> 的微前端架构，使用 <strong>Vue2</strong> 技术栈开发
            </p>
            <span class="has-background">项目职责：</span>
            <p>参与了该产品从0-1的研发，后独立负责项目开发、需求拆解和进度把控</p>
            <span class="has-background">工作业绩：</span>
            <ul>
              <li>统一项目代码规范，通过配置husky为项目代码提交时添加代码规范检查与自动修复</li>
              <li
                >对项目进行梳理，列出存在的问题清单，输出相应的优化方案和解决方案，包括功能模块、性能问题、安全漏洞等，并向组内推行</li
              >
              <li
                >持续优化项目：多词云、多图表场景下使用可视区域渲染、截图实现页面性能优化；图表组件封装、配置项封装，提供堆叠图、热力图、环形图、象形柱图、线柱混合图等项目高频使用的图表配置，仅需几个参数即可完成图表开发；逻辑上拆分多个巨石文件，抽象出可复用组件，提高后续开发效率；拆包优化项目加载速度</li
              >
            </ul>
          </li>
          <li>
            <h4>人口数据管理平台</h4>
            <span class="has-background">项目描述：</span>
            <p
              >基于标签平台能力开发的衍生产品，提供从标签创建、群体管理、群体洞察、计划投放的完整业务流程，具备比原标签平台更加用户友好的业务逻辑</p
            >
            <span class="has-background">项目职责：</span>
            <p>负责项目开发、架构设计、进度把控，及作为主负责人完成需求拆解和任务分配</p>
            <span class="has-background">工作业绩：</span>
            <ul>
              <li>以最低成本完成由子应用向单体应用的转变，重新设计项目架构及权限验证逻辑</li>
              <li>快速梳理可复用代码，抽象出组件、工具函数，提高开发速度</li>
              <li
                >重业务逻辑模块的功能重构，包括标签管理、群体管理、群体洞察模块，确保项目的快速上线</li
              >
            </ul>
          </li>
        </ol>
      </section>
      <div class="split-line"></div>
      <section class="projects">
        <h2>个人作品</h2>
        <ol>
          <li>
            <h4>记账本</h4>
            <p
              >具备记账、账单管理、记账标签管理及报表功能的移动端项目，使用Vue2、Vue3、React分别制作了一版，后端使用Egg.js和MySQL数据库开发。</p
            >
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
          <!-- <li>
            <h4>自制 UI 组件库</h4>
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
          </li> -->
        </ol>
      </section>
      <div class="split-line"></div>
      <section class="website">
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
