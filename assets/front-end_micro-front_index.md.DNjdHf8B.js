import{_ as s,G as a,E as n,ao as l}from"./chunks/framework.C1rSk1pR.js";const o="/Jarrett-blog/assets/middle-ground.CwdbmR9i.png",p="/Jarrett-blog/assets/solution.BnrGAHmA.png",e="/Jarrett-blog/assets/intro.DXDGuh2f.png",t="/Jarrett-blog/assets/index.CPYeQPkI.png",c="/Jarrett-blog/assets/modeling.DHXS369S.png",r="/Jarrett-blog/assets/word-cloud.BI-KLn1s.png",i="/Jarrett-blog/assets/app-market.BlBRT8m1.png",D=JSON.parse('{"title":"微前端","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/micro-front/index.md","filePath":"front-end/micro-front/index.md","lastUpdated":1734073656000}'),y={name:"front-end/micro-front/index.md"},d=l(`<h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><h2 id="什么是微前端" tabindex="-1">什么是微前端 <a class="header-anchor" href="#什么是微前端" aria-label="Permalink to &quot;什么是微前端&quot;">​</a></h2><p>微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。就是在一个 web 应用中可以独立的运行另一个 web 应用</p><h3 id="核心价值" tabindex="-1">核心价值 <a class="header-anchor" href="#核心价值" aria-label="Permalink to &quot;核心价值&quot;">​</a></h3><ul><li><p>技术栈无关 主框架不限制接入应用的技术栈，微应用具备完全自主权</p></li><li><p>独立开发、独立部署 微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新</p></li><li><p>增量升级 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略</p></li><li><p>独立运行时 每个微应用之间状态隔离，运行时状态不共享</p></li></ul><h3 id="为什么不直接用-iframe" tabindex="-1">为什么不直接用 iframe？ <a class="header-anchor" href="#为什么不直接用-iframe" aria-label="Permalink to &quot;为什么不直接用 iframe？&quot;">​</a></h3><p>如果不考虑体验问题，iframe 几乎是最完美的微前端解决方案。存在问题如下</p><ul><li>浏览器原生隔离，完美解决 js、css 隔离问题，但是应用上下文难以共享，包括内存变量、数据同步、内外通信、cookie 透传</li><li>路由状态丢失，浏览器刷新一下，iframe 的 url 状态就丢失了</li><li>慢。每次打开白屏时间太长，对于 SPA 应用来说无法接受</li><li>dom 结构不共享。弹框只能在 iframe 内部展示，无法覆盖全局</li></ul><h2 id="微前端编年史" tabindex="-1">微前端编年史 <a class="header-anchor" href="#微前端编年史" aria-label="Permalink to &quot;微前端编年史&quot;">​</a></h2><h3 id="_1-概念阶段" tabindex="-1">1. 概念阶段 <a class="header-anchor" href="#_1-概念阶段" aria-label="Permalink to &quot;1. 概念阶段&quot;">​</a></h3><p>微前端的概念是由 ThoughtWorks 在 2016 年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。</p><p>主力工具：iframe</p><h3 id="_2-模块化加载" tabindex="-1">2. 模块化加载 <a class="header-anchor" href="#_2-模块化加载" aria-label="Permalink to &quot;2. 模块化加载&quot;">​</a></h3><p>随着前端模块化工具的发展，微前端解决方案开始引入模块化加载器，如 Webpack 和 SystemJS</p><ul><li>Webpack：通过使用 Webpack 的动态导入（Dynamic Imports）和插件，可以实现模块的按需加载。</li><li>SystemJS：是一种模块加载器，可以用于动态加载模块，尤其是在单页面应用（SPA）中</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;">// 通过 Webpack 4 的 import() 实现动态加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">import</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;path/to/module&#39;</span><span style="color:#839496;">).</span><span style="color:#268BD2;">then</span><span style="color:#839496;">(module </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // 使用模块</span></span>
<span class="line"><span style="color:#859900;">  module</span><span style="color:#839496;">.</span><span style="color:#268BD2;">someFunction</span><span style="color:#839496;">();</span></span>
<span class="line"><span style="color:#839496;">});</span></span></code></pre></div><p>优点：</p><ul><li>按需加载，提高了资源利用效率。</li><li>更少的性能开销，相较于 iframe。</li></ul><p>缺点：</p><ul><li>依然较为复杂的配置。</li><li>需要解决模块间依赖和共享的问题。</li></ul><h3 id="_3-微前端框架的出现" tabindex="-1">3. 微前端框架的出现 <a class="header-anchor" href="#_3-微前端框架的出现" aria-label="Permalink to &quot;3. 微前端框架的出现&quot;">​</a></h3><p>为了更好地解决微前端的复杂性和多样性需求，出现了一些专门的微前端框架和平台。</p><ul><li>Single-SPA：是一个 JavaScript 框架，可以帮助你在一个页面上组合多个微前端子应用，支持多种框架（如 React、Vue、Angular 等）。核心思想是将不同的微前端应用按照路由来分离，并在路由切换的时候激活相应的子应用。</li><li>qiankun：qiankun 是基于 Single-SPA 的进行封装和扩展的一个微前端解决方案，它提高了开发体验和框架兼容性。配置化的应用接入更简单，拓展提供了 css、js 沙箱及主子通讯方法，还提供了预加载的能力</li><li>wujie：使用 shadowDom 隔离 css，使用空的 iframe 隔离 js，通讯使用的是 proxy</li><li>micro-app：初期基于 webcomponent + qiankun js 沙箱的微前端方案，后基于 iframe 实现 js 沙箱</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7qLww" id="tab-uRu2I0C" checked><label data-title="single-spa" for="tab-uRu2I0C">single-spa</label><input type="radio" name="group-7qLww" id="tab-XTU5EqM"><label data-title="qiankun" for="tab-XTU5EqM">qiankun</label><input type="radio" name="group-7qLww" id="tab-JeL07wF"><label data-title="模块联邦" for="tab-JeL07wF">模块联邦</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;">// single-spa</span></span>
<span class="line"><span style="color:#859900;">import</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">registerApplication</span><span style="color:#839496;">, </span><span style="color:#268BD2;">start</span><span style="color:#839496;"> } </span><span style="color:#859900;">from</span><span style="color:#2AA198;"> &#39;single-spa&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">registerApplication</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#2AA198;">  &#39;app1&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#859900;"> import</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;path/to/app1&#39;</span><span style="color:#839496;">),</span></span>
<span class="line"><span style="color:#839496;">  location </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#268BD2;"> location</span><span style="color:#839496;">.</span><span style="color:#268BD2;">pathname</span><span style="color:#839496;">.</span><span style="color:#268BD2;">startsWith</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;/app1&#39;</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#839496;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">start</span><span style="color:#839496;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> const</span><span style="color:#268BD2;"> bootstrap</span><span style="color:#859900;"> =</span><span style="color:#93A1A1;font-weight:bold;"> async</span><span style="color:#93A1A1;font-weight:bold;"> function</span><span style="color:#839496;"> () {</span></span>
<span class="line"><span style="color:#268BD2;">  console</span><span style="color:#839496;">.</span><span style="color:#268BD2;">log</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;应用正在启动&#39;</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> const</span><span style="color:#268BD2;"> mount</span><span style="color:#859900;"> =</span><span style="color:#93A1A1;font-weight:bold;"> async</span><span style="color:#93A1A1;font-weight:bold;"> function</span><span style="color:#839496;"> () {};</span></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> const</span><span style="color:#268BD2;"> unmount</span><span style="color:#859900;"> =</span><span style="color:#93A1A1;font-weight:bold;"> async</span><span style="color:#93A1A1;font-weight:bold;"> function</span><span style="color:#839496;"> () {</span></span>
<span class="line"><span style="color:#268BD2;">  console</span><span style="color:#839496;">.</span><span style="color:#268BD2;">log</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;应用正在卸载&#39;</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#268BD2;">  document</span><span style="color:#839496;">.</span><span style="color:#268BD2;">body</span><span style="color:#839496;">.</span><span style="color:#268BD2;">removeChild</span><span style="color:#839496;">(</span><span style="color:#268BD2;">childContainer</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;">// 主应用</span></span>
<span class="line"><span style="color:#859900;">import</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">registerMicroApps</span><span style="color:#839496;">, </span><span style="color:#268BD2;">start</span><span style="color:#839496;"> } </span><span style="color:#859900;">from</span><span style="color:#2AA198;"> &#39;qiankun&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">registerMicroApps</span><span style="color:#839496;">([</span></span>
<span class="line"><span style="color:#839496;">  {</span></span>
<span class="line"><span style="color:#839496;">    name: </span><span style="color:#2AA198;">&#39;app1&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    entry: </span><span style="color:#2AA198;">&#39;//localhost:7100&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    container: </span><span style="color:#2AA198;">&#39;#container&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    activeRule: </span><span style="color:#2AA198;">&#39;/app1&#39;</span></span>
<span class="line"><span style="color:#839496;">  },</span></span>
<span class="line"><span style="color:#839496;">  {</span></span>
<span class="line"><span style="color:#839496;">    name: </span><span style="color:#2AA198;">&#39;app2&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    entry: </span><span style="color:#2AA198;">&#39;//localhost:7200&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    container: </span><span style="color:#2AA198;">&#39;#container&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">    activeRule: </span><span style="color:#2AA198;">&#39;/app2&#39;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">start</span><span style="color:#839496;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// 子应用</span></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> async</span><span style="color:#93A1A1;font-weight:bold;"> function</span><span style="color:#268BD2;"> mount</span><span style="color:#839496;">(props) {</span></span>
<span class="line"><span style="color:#268BD2;">  ReactDOM</span><span style="color:#839496;">.</span><span style="color:#268BD2;">render</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#586E75;">    &lt;</span><span style="color:#859900;">App</span><span style="color:#586E75;"> /&gt;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    props</span><span style="color:#839496;">.</span><span style="color:#268BD2;">container</span><span style="color:#859900;"> ?</span><span style="color:#268BD2;"> props</span><span style="color:#839496;">.</span><span style="color:#268BD2;">container</span><span style="color:#839496;">.</span><span style="color:#268BD2;">querySelector</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;#root&#39;</span><span style="color:#839496;">) </span><span style="color:#859900;">:</span><span style="color:#268BD2;"> document</span><span style="color:#839496;">.</span><span style="color:#268BD2;">getElementById</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;root&#39;</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#839496;">  );</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;">// 模块联邦</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// 模块提供方</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#859900;">module</span><span style="color:#839496;">.</span><span style="color:#859900;">exports</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // ...</span></span>
<span class="line"><span style="color:#839496;">  plugins: [</span></span>
<span class="line"><span style="color:#859900;">    new</span><span style="color:#268BD2;"> ModuleFederationPlugin</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">      name: </span><span style="color:#2AA198;">&#39;app1&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">      filename: </span><span style="color:#2AA198;">&#39;remoteEntry.js&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">      exposes: {</span></span>
<span class="line"><span style="color:#2AA198;">        &#39;./Button&#39;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&#39;./src/Button&#39;</span></span>
<span class="line"><span style="color:#839496;">      }</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">  ]</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// 模块消费方</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#859900;">module</span><span style="color:#839496;">.</span><span style="color:#859900;">exports</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // ...</span></span>
<span class="line"><span style="color:#839496;">  plugins: [</span></span>
<span class="line"><span style="color:#859900;">    new</span><span style="color:#268BD2;"> ModuleFederationPlugin</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">      name: </span><span style="color:#2AA198;">&#39;app2&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">      remotes: {</span></span>
<span class="line"><span style="color:#839496;">        app1: </span><span style="color:#2AA198;">&#39;app1@http://localhost:3001/remoteEntry.js&#39;</span></span>
<span class="line"><span style="color:#839496;">      }</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">  ]</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div></div></div><p>以 qiankun 为代表的方案</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>监听路由自动的加载、卸载当前路由对应的子应用</li><li>完备的沙箱方案，js 沙箱做了 SnapshotSandbox、LegacySandbox、ProxySandbox 三套渐进增强方案，css 沙箱做了两套 strictStyleIsolation、experimentalStyleIsolation 两套适用不同场景的方案</li><li>路由保持，浏览器刷新、前进、后退，都可以作用到子应用</li><li>应用间通信简单，全局注入</li></ul></div><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p></p><ul><li>基于路由匹配，无法同时激活多个子应用，也不支持子应用保活</li><li>改造成本较大，从 webpack、代码、路由等等都要做一系列的适配</li><li>css 沙箱无法绝对的隔离，js 沙箱在某些场景下执行性能下降严重</li><li>无法支持 vite 等 ESM 脚本运行</li></ul></div><p>以 wujie 为代表的方案</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>多应用同时激活在线。</li></ol><ul><li>框架具备同时激活多应用，并保持这些应用路由同步的能力</li></ul><ol start="2"><li>组件式的使用方式。</li></ol><ul><li>无需注册，更无需路由适配，在组件内使用，跟随组件装载、卸载</li></ul><ol start="3"><li>应用级别的 keep-alive。</li></ol><ul><li>子应用开启保活模式后，应用发生切换时整个子应用的状态可以保存下来不丢失，结合预执行模式可以获得类似 ssr 的打开体验</li></ul><ol start="4"><li>纯净无污染。</li></ol><ul><li>无界利用 iframe 和 webcomponent 来搭建天然的 js 隔离沙箱和 css 隔离沙箱</li><li>利用 iframe 的 history 和主应用的 history 在同一个 top-level browsing context 来搭建天然的路由同步机制</li><li>副作用局限在沙箱内部，子应用切换无需任何清理工作，没有额外的切换成本</li></ul><ol start="5"><li>性能和体积兼具。</li></ol><ul><li>子应用执行性能和原生一致，子应用实例 instance 运行在 iframe 的 window 上下文中，避免 with(proxyWindow){code}这样指定代码执行上下文导致的性能下降，但是多了实例化 iframe 的一次性的开销，可以通过 preload 提前实例化</li><li>体积比较轻量，借助 iframe 和 webcomponent 来实现沙箱，有效的减小了代码量</li></ul><ol start="6"><li>开箱即用。</li></ol><ul><li>不管是样式的兼容、路由的处理、弹窗的处理、热更新的加载，子应用完成接入即可开箱即用无需额外处理，应用接入成本也极低</li></ul></div><h3 id="_4-模块联邦" tabindex="-1">4. 模块联邦 <a class="header-anchor" href="#_4-模块联邦" aria-label="Permalink to &quot;4. 模块联邦&quot;">​</a></h3><p>模块联邦使多个独立的构建可以形成一个应用程序。这些独立的构建不会相互依赖，因此可以单独开发和部署它们。去中心化的思路，每个应用都可以是提供者和使用者，不同应用间可以实现共同依赖的复用，避免重复加载。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ul><li>使用成本高，配置项繁琐</li><li>仅提供了共享模块的能力，其余的问题如 js 沙箱、css 沙箱、跨应用状态共享、共享模块 ts 声明都需要自行解决</li></ul></div><p>百度 emp 是基于模块联邦的微前端解决方案，在共享模块能力之上提供了更多的特性支持，如远程拉取 ts 声明文件、跨应用状态共享、跨框架组件调用。但其核心依然是面向模块共享，需要自行实现 js、css 沙箱</p><h2 id="个推中台业务微前端落地" tabindex="-1">个推中台业务微前端落地 <a class="header-anchor" href="#个推中台业务微前端落地" aria-label="Permalink to &quot;个推中台业务微前端落地&quot;">​</a></h2><h3 id="业务背景介绍" tabindex="-1">业务背景介绍 <a class="header-anchor" href="#业务背景介绍" aria-label="Permalink to &quot;业务背景介绍&quot;">​</a></h3><p>中台业务部门提供通用的大数据能力，在给业务部门赋能的同时，自身也沉淀了一套大数据操作系统</p><p><img src="`+o+'" alt="数据智能操作系统" loading="lazy"><img src="'+p+'" alt="业务赋能" loading="lazy"><img src="'+e+'" alt="介绍" loading="lazy"></p><h3 id="微前端为团队带来了什么价值" tabindex="-1">微前端为团队带来了什么价值 <a class="header-anchor" href="#微前端为团队带来了什么价值" aria-label="Permalink to &quot;微前端为团队带来了什么价值&quot;">​</a></h3><ol><li>既独立又统一</li></ol><ul><li>主应用统一引入皮肤包。子应用统一使用 css 变量，仅修改主应用即可完成所有应用的皮肤新增、切换</li><li>主应用统一做数据埋点。子应用无需做任何改动</li><li>统一的全局业务、配置管理</li></ul><p>基座。作为微前端的入口，负责登录校验、权限配置、部门管理、用户管理等所有公共的模块，并向子应用下发诸如皮肤变量、用户信息、公用状态等数据</p><p><img src="'+t+'" alt="首页" loading="lazy"></p><ol start="2"><li>灵活的业务场景构想</li></ol><ul><li>自由组合子应用页面。细分到子应用菜单级别，用户可自定义创建拖拽创建页面组合即“自定义应用”，实现场景化、定制化的业务流</li><li>自由嵌套子应用组件。每个应用自身作为子应用接入的同时，还可提供自身的组件，极大减少业务开发量</li><li>定制化部署。对于不同客户的定制化部署需求，无需多次打包，一份配置项即可完成子应用的接入与否</li><li>对现有业务的整合。高效、快速的将现有业务集成，聚合成如工作流</li></ul><p>建模平台。子应用接入运行</p><p><img src="'+c+'" alt="建模平台" loading="lazy"></p><p>机器学习平台。子应用嵌套 <img src="'+r+'" alt="机器学习平台" loading="lazy"></p><p>应用市场。子应用页面自由组合 <img src="'+i+`" alt="应用市场" loading="lazy"></p><ol start="3"><li>独立开发、部署带来的便利</li></ol><ul><li>独立仓库、独立团队，并行开发、独立打包提测，能够更加快速且针对性地响应客户需求。</li><li>兼容不同技术栈。对于远古项目使用的老旧技术栈能够快速接入，已接入项目技术栈重构也可以按项目逐个迭代，甚至可以进一步按模块拆分，颗粒度更细</li><li>降低单个项目复杂度，减少维护成本</li><li>安全。沙箱的存在使得不同技术栈项目的渐进式融合更加方便，且风险降低</li></ul><h3 id="微前端带来了什么问题" tabindex="-1">微前端带来了什么问题 <a class="header-anchor" href="#微前端带来了什么问题" aria-label="Permalink to &quot;微前端带来了什么问题&quot;">​</a></h3><ol><li>多应用运行与单应用运行行为不一致的问题。single-spa 重写了某些原生方法，比如 history.push，使其必然触发 popstate 事件，会导致路由守卫等路由相关行为不符合正常的预期</li><li>微前端提供了沙箱，但各应用间并非完完全全的隔离。如 localStorage、sessionStorage、history 等都是共用的，需要针对各个共用部分，拉齐团队规范，避免出现如 A 团队往 localStorage 中存了变量被 B 团队覆盖的问题</li><li>各团队独立打包，存在多余的代码引入，且版本可能不一。A、B 团队都使用了 vue 技术栈，各自本地打包</li><li>共有问题的修改成本高。子应用统一使用了某组件库，但该组件库仅为单体应用设计，并未考虑多应用实例，导致多应用场景下出现问题，如果子应用是自行打包，需要在组件库修改完后，子应用逐个更新依赖并部署。同时，由于项目的负责团队不同，往往涉及到非常长的沟通流程</li></ol><h2 id="我们真的需要微前端吗" tabindex="-1">我们真的需要微前端吗 <a class="header-anchor" href="#我们真的需要微前端吗" aria-label="Permalink to &quot;我们真的需要微前端吗&quot;">​</a></h2><p>如果你不知道自己是否需要用微前端，那么大概率是不需要</p><ul><li><a href="https://juejin.cn/post/7236021829000691771#heading-10" target="_blank" rel="noreferrer">2023 微前端技术方案选型</a></li><li><a href="https://lianpf.github.io/posts/frontend-develop/microfrontend_framework_compare#1%e5%ae%9e%e7%8e%b0%e6%96%b9%e6%a1%88-2" target="_blank" rel="noreferrer">微前端方案解析</a></li></ul><h2 id="qiankun-是怎么做-js-隔离的" tabindex="-1">qiankun 是怎么做 js 隔离的 <a class="header-anchor" href="#qiankun-是怎么做-js-隔离的" aria-label="Permalink to &quot;qiankun 是怎么做 js 隔离的&quot;">​</a></h2><p>sandbox，参数默认为 true，对于 js 隔离，默认使用 proxy 沙箱，有个文档上没写的隐藏参数 loose，区分使用 legacySandbox 和 proxySandbox</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> QiankunSpecialOpts</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  /**</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">   * </span><span style="color:#93A1A1;font-weight:bold;">@deprecated</span><span style="color:#586E75;font-style:italic;"> internal api, don&#39;t used it as normal, might be removed after next version</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#839496;">  $$cacheLifecycleByAppName</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  prefetch</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> PrefetchStrategy</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  sandbox</span><span style="color:#859900;">?:</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#859900;"> boolean</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">        strictStyleIsolation</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">        experimentalStyleIsolation</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">        /**</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">         * </span><span style="color:#93A1A1;font-weight:bold;">@deprecated</span><span style="color:#586E75;font-style:italic;"> We use strict mode by default</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#839496;">        loose</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">        /**</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">         * use speed sandbox mode, enabled by default from 2.9.0</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#839496;">        speedy</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">        patchers</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> Patcher</span><span style="color:#839496;">[];</span></span>
<span class="line"><span style="color:#839496;">      };</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  /*</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    with singular mode, any app will wait to load until other apps are unmouting</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    it is useful for the scenario that only one sub app shown at one time</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  */</span></span>
<span class="line"><span style="color:#839496;">  singular</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#859900;"> |</span><span style="color:#839496;"> ((app</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> LoadableApp</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">any</span><span style="color:#839496;">&gt;) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#CB4B16;"> Promise</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">boolean</span><span style="color:#839496;">&gt;);</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  /**</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">   * skip some scripts or links intercept, like JSONP</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#268BD2;">  excludeAssetFilter</span><span style="color:#859900;">?:</span><span style="color:#839496;"> (url</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">  globalContext</span><span style="color:#859900;">?:</span><span style="color:#859900;"> typeof</span><span style="color:#268BD2;"> window</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> useLooseSandbox</span><span style="color:#859900;"> =</span><span style="color:#859900;"> typeof</span><span style="color:#268BD2;"> sandbox</span><span style="color:#859900;"> ===</span><span style="color:#2AA198;"> &#39;object&#39;</span><span style="color:#859900;"> &amp;&amp;</span><span style="color:#859900;"> !!</span><span style="color:#268BD2;">sandbox</span><span style="color:#839496;">.</span><span style="color:#268BD2;">loose</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// enable speedy mode by default</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> speedySandbox</span><span style="color:#859900;"> =</span><span style="color:#859900;"> typeof</span><span style="color:#268BD2;"> sandbox</span><span style="color:#859900;"> ===</span><span style="color:#2AA198;"> &#39;object&#39;</span><span style="color:#859900;"> ?</span><span style="color:#268BD2;"> sandbox</span><span style="color:#839496;">.</span><span style="color:#268BD2;">speedy</span><span style="color:#859900;"> !==</span><span style="color:#B58900;"> false</span><span style="color:#859900;"> :</span><span style="color:#B58900;"> true</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> sandboxContainer</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">sandbox</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#268BD2;">  sandboxContainer</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> createSandboxContainer</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#268BD2;">    appInstanceId</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // FIXME should use a strict sandbox logic while remount, see https://github.com/umijs/qiankun/issues/518</span></span>
<span class="line"><span style="color:#268BD2;">    initialAppWrapperGetter</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    scopedCSS</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    useLooseSandbox</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    excludeAssetFilter</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    global</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">    speedySandbox</span></span>
<span class="line"><span style="color:#839496;">  );</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // 用沙箱的代理对象作为接下来使用的全局对象</span></span>
<span class="line"><span style="color:#268BD2;">  global</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> sandboxContainer</span><span style="color:#839496;">.</span><span style="color:#268BD2;">instance</span><span style="color:#839496;">.</span><span style="color:#268BD2;">proxy</span><span style="color:#859900;"> as</span><span style="color:#859900;"> typeof</span><span style="color:#268BD2;"> window</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  mountSandbox</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> sandboxContainer</span><span style="color:#839496;">.</span><span style="color:#268BD2;">mount</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  unmountSandbox</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> sandboxContainer</span><span style="color:#839496;">.</span><span style="color:#268BD2;">unmount</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><p>qinakun 在创建沙箱时有以下代码</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">function</span><span style="color:#268BD2;"> createSandboxContainer</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">  appName</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">  elementGetter</span><span style="color:#859900;">:</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#CB4B16;"> HTMLElement</span><span style="color:#859900;"> |</span><span style="color:#CB4B16;"> ShadowRoot</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  scopedCSS</span><span style="color:#859900;">:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  useLooseSandbox</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">  excludeAssetFilter</span><span style="color:#859900;">?:</span><span style="color:#839496;"> (url</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#859900;"> boolean</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  globalContext</span><span style="color:#859900;">?:</span><span style="color:#859900;"> typeof</span><span style="color:#268BD2;"> window</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  speedySandBox</span><span style="color:#859900;">?:</span><span style="color:#859900;"> boolean</span></span>
<span class="line"><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  let</span><span style="color:#268BD2;"> sandbox</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> SandBox</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">  if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">window</span><span style="color:#839496;">.</span><span style="color:#268BD2;">Proxy</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // 如果浏览器支持Proxy，使用LegacySandBox或者ProxySandbox</span></span>
<span class="line"><span style="color:#268BD2;">    sandbox</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> useLooseSandbox</span></span>
<span class="line"><span style="color:#859900;">      ?</span><span style="color:#859900;"> new</span><span style="color:#268BD2;"> LegacySandbox</span><span style="color:#839496;">(</span><span style="color:#268BD2;">appName</span><span style="color:#839496;">, </span><span style="color:#268BD2;">globalContext</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#859900;">      :</span><span style="color:#859900;"> new</span><span style="color:#268BD2;"> ProxySandbox</span><span style="color:#839496;">(</span><span style="color:#268BD2;">appName</span><span style="color:#839496;">, </span><span style="color:#268BD2;">globalContext</span><span style="color:#839496;">, { speedy: </span><span style="color:#859900;">!!</span><span style="color:#268BD2;">speedySandBox</span><span style="color:#839496;"> });</span></span>
<span class="line"><span style="color:#839496;">  } </span><span style="color:#859900;">else</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // 否则使用SnapshotSandBox</span></span>
<span class="line"><span style="color:#268BD2;">    sandbox</span><span style="color:#859900;"> =</span><span style="color:#859900;"> new</span><span style="color:#268BD2;"> SnapshotSandbox</span><span style="color:#839496;">(</span><span style="color:#268BD2;">appName</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // ...</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><h3 id="快照沙箱" tabindex="-1">快照沙箱 <a class="header-anchor" href="#快照沙箱" aria-label="Permalink to &quot;快照沙箱&quot;">​</a></h3><p>基于 diff 实现，只适用单例，且会污染 window</p><p>原理：将 window 的快照信息存到 windowSnapshot 中，将应用对于 window 属性的丢该记录到 modifyPropsMap 中，加载应用时用来还原，卸载应用时还原 window</p><h3 id="代理沙箱" tabindex="-1">代理沙箱 <a class="header-anchor" href="#代理沙箱" aria-label="Permalink to &quot;代理沙箱&quot;">​</a></h3><h4 id="legacysandbox" tabindex="-1">legacySandbox <a class="header-anchor" href="#legacysandbox" aria-label="Permalink to &quot;legacySandbox&quot;">​</a></h4><p>单例，跟快照沙箱差不多，也会污染 window，但是性能比快照好</p><h4 id="proxysandbox" tabindex="-1">ProxySandbox <a class="header-anchor" href="#proxysandbox" aria-label="Permalink to &quot;ProxySandbox&quot;">​</a></h4><p>创建了 fakeWindow，set 操作都在 fakeWindow 上，取值优先从 fakeWindow 上取，不会污染 window，且支持多例</p><p>需要注意对于 window 的拷贝是浅拷贝，一些对象属性如 history，主子应用是共用的</p><h2 id="qiankun-是怎么做-css-隔离的" tabindex="-1">qiankun 是怎么做 css 隔离的 <a class="header-anchor" href="#qiankun-是怎么做-css-隔离的" aria-label="Permalink to &quot;qiankun 是怎么做 css 隔离的&quot;">​</a></h2><p>sandbox 参数，有两个是关于 css 的，strictStyleIsolation 默认 false、experimentalStyleIsolation 默认 false</p><p>strictStyleIsolation 为 true 时，用 shadowDom 隔离，shadowDom 的特点是：</p><ul><li>影子节点内的导入样式不会影响外层</li><li>mode 为 closed 时，外层无法获取影子节点内的元素</li><li>影子节点内的元素样式会继承其宿主元素的样式</li><li>影子节点内的元素无法被外层选择器选中</li></ul><p>experimentalStyleIsolation 为 true 时，类似 vue 的 scoped 实现，通过属性选择器隔离</p>`,75),u=[d];function b(h,f,m,g,A,B){return n(),a("div",null,u)}const w=s(y,[["render",b]]);export{D as __pageData,w as default};