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
        本科 <span class="column-line">|</span> 中共党员<span class="column-line">|</span
        >期望薪资：22-26k
      </p>
      <p>
        个人站点：
        <a href="https://github.com/Jarrett817" target="_blank">GitHub</a>
        <span class="column-line">|</span>
        <a href="https://www.yuque.com/jarrett-p3yai/kg62ge" target="_blank">语雀</a>
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
          <ul>
            <span>工作内容：</span>
            <li>
              标签平台<strong>核心</strong>前端开发，同时支撑建模平台、机器学习平台、基座平台的开发
            </li>
            <li>公共技术沉淀：负责公共物料、组件开发、技术方案输出及公共文档维护</li>
          </ul>
          <ul>
            <span>主要业绩：</span>
            <li>
              基于标签平台衍生出人口数据管理平台，快速响应需求，设计技术方案，主导架构设计与代码重构
            </li>
            <li>
              基于业务场景公共组件和技术方案，解决复杂场景下页面跳转路径的自动化处理；复杂sql规则前端可视化配置组件；解决微前端架构下多应用并存、单应用多场景的换肤问题
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
            <h4>数据智能标签平台</h4>
          </header>
          <p>
            该项目通过对数据进行标签化的生产管理以及用户画像、
            数据洞察等手段，帮助企业发现问题、提高效益
          </p>
          <ul>
            <li>
              主要技术栈为 <strong>Vue2</strong> /<strong> VueRouter</strong> /
              <strong>Vuex </strong>/<strong> Element UI </strong>/<strong> Echarts</strong>
            </li>
            <li>作为核心前端开发人员，负责项目架构设计和功能迭代</li>
            <li>
              开发过程中抽离出通用业务组件如
              <strong
                >ecahrts图表渲染组件、条件查询分页列表、可配置信息面板、
                级联下拉框、简洁翻页器</strong
              >
              等等，作为高频出现的组件极大的提高了开发效率
            </li>
            <li>
              使用抽象工厂模式封装业务中出现的图表， 便于业务相关图表的生成，提高代码复用率，
              解决项目场景中图表使用频繁、类型多样化的问题
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <div class="split-line"></div>

    <section class="skills page2">
      <h2>技能</h2>
      <div class="wrapper">
        <ul>
          <li>熟练掌握html5、css3、javascript、typescript开发，具备良好的解决问题的能力</li>
          <li>熟练掌握vue全家桶，对vue2、vue3有源码级别的深入理解</li>
          <li>熟悉<strong>vite、webpack</strong>等前端工程化技术，具备项目优化能力</li>
          <li>熟悉微前端开发，了解qiankun和single-spa原理</li>
        </ul>
      </div>
    </section>
    <div class="split-line"></div>

    <section class="openSource">
      <h2>个人作品</h2>
      <ol>
        <li>
          <header>
            <h4>seeker导航</h4>
            <span>
              <a href="https://github.com/Jarrett817/seeker-navigation" target="_blank">源码</a>
              <a href="http://jarrett0817.gitee.io/seeker-navigation/" target="_blank">预览</a>
            </span>
          </header>
          <p>
            使用
            <strong>jQuery</strong>
            做的简易导航网站，实现了搜索栏、网址管理、键盘事件跳转网址的功能
          </p>
          <p></p>
        </li>
        <li>
          <header>
            <h4>旋转照片墙</h4>
            <span>
              <a href="https://github.com/Jarrett817/rotating-cube" target="_blank">源码</a>
              <a href="https://jarrett817.github.io/rotating-cube/dist/" target="_blank">预览</a>
            </span>
          </header>
          <p>使用 <strong>css</strong> 制作的自行旋转展示的照片墙</p>
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
  </article>
</template>

<style lang="scss">
@import './style/index.scss';
</style>

<style media="print">
body {
  margin: 0;
  background: white;
}

.page2 {
  page-break-before: always;
  margin-top: 30px;
}
</style>
<style>
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
