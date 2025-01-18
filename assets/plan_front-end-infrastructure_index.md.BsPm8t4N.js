import{A as m,_ as b,a as A,b as D,c as f,d as C,e as x,f as _}from"./chunks/ApiTest.6A2F-EZ-.js";import{_ as S,a as k,b as T}from"./chunks/Zod.vue_vue_type_script_setup_true_lang.Cu3DpBfs.js";import{v as n}from"./chunks/theme.DXZAdxYV.js";import{d as v,a2 as r,E as d,G as u,a5 as a,O as q,H as s,c as l,ao as p}from"./chunks/framework.C1rSk1pR.js";/* empty css                                                                       */const P={class:"h-500px"},w=v({__name:"Intro",setup(B){const e={direction:1},t={topic:"项目迭代",id:n(),expanded:!0,children:[{id:n(),topic:"开发前期",children:[{id:n(),topic:"接口文档"},{id:n(),topic:"接口数据mock"},{id:n(),topic:"编译时类型校验"},{id:n(),topic:"运行时接口数据校验"}]},{id:n(),topic:"前后端联调",children:[{id:n(),topic:"接口文档改动diff、历史记录"},{id:n(),topic:"接口mock"}]},{id:n(),topic:"测试上线",children:[{id:n(),topic:"运行时接口数据校验、日志上报"}]}]};return(y,i)=>{const c=r("MindMap");return d(),u("div",P,[a(c,{data:{nodeData:t},options:e},null,8,["data"])])}}}),E=s("h1",{id:"前端基建-———-接口、数据、类型在前端开发中的管理及应用",tabindex:"-1"},[l("前端基建 ——— 接口、数据、类型在前端开发中的管理及应用 "),s("a",{class:"header-anchor",href:"#前端基建-———-接口、数据、类型在前端开发中的管理及应用","aria-label":'Permalink to "前端基建 ——— 接口、数据、类型在前端开发中的管理及应用"'},"​")],-1),I=s("h2",{id:"背景",tabindex:"-1"},[l("背景 "),s("a",{class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},"​")],-1),j=s("p",null,[l("前端基建，包括"),s("code",null,"构建工具、规范与质量保障、自动化测试、组件库、前后端协作"),l("等等")],-1),N=s("p",null,"目的是为了实现标准化 + 规范化 + 工具化 + 自动化，业务支撑是活在当下，技术基建是活好未来",-1),O=s("p",null,"本文主要针对前后端协作及质量保障展开。",-1),R=s("p",null,"接口、数据、类型贯穿了开发流程的始终：",-1),U=p(`<div class="warning custom-block"><p class="custom-block-title">开发过程中的痛点：</p><ol><li>前端 mock 数据写在项目代码里，如果没有及时清理，会增加不必要的项目体积</li><li>前期开发阶段没有真实的接口调用全流程，影响联调</li><li>后端给出的接口文档不具备修改通知和 diff 功能，需要仔细询问核对哪些经过修改，且后续无历史记录</li><li>TS 使用不高效，没有起到应有的作用</li><li>后端多个服务互相调用时，频繁出现数据类型变动的问题，未及时发现可能导致 bug</li></ol></div><div class="tip custom-block"><p class="custom-block-title">如何改进？</p><ol><li>可追溯、可 mock、交互友好的接口文档、测试平台</li><li>更高效、规范地使用 TS</li><li>建立运行时数据校验体系</li></ol></div><h1 id="接口测试平台" tabindex="-1">接口测试平台 <a class="header-anchor" href="#接口测试平台" aria-label="Permalink to &quot;接口测试平台&quot;">​</a></h1><h2 id="yapi-简介" tabindex="-1">yapi 简介 <a class="header-anchor" href="#yapi-简介" aria-label="Permalink to &quot;yapi 简介&quot;">​</a></h2><p>yapi 是一个开源的接口管理平台，目前 star 数量 27.3k，具备以下特性：</p><ol><li>权限管理</li><li>项目管理</li><li>可视化接口管理，接口修改记录可追溯</li><li>基于 mock.js，方便的 mock 数据生成器</li><li>接口自动化测试</li><li>数据导入，支持 swagger、postman、har 数据格式，便于迁移</li></ol><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><p>新建项目-&gt;新建分类-&gt;添加接口</p><blockquote><p>手动演示</p></blockquote><p>配置接口代理，使用<code>nginx</code>或者<code>代理工具</code>配置代理</p><h4 id="举例-nginx-代理配置" tabindex="-1">举例 nginx 代理配置 <a class="header-anchor" href="#举例-nginx-代理配置" aria-label="Permalink to &quot;举例 nginx 代理配置&quot;">​</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">server</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">  listen </span><span style="color:#D33682;">443</span><span style="color:#839496;"> ssl;</span></span>
<span class="line"><span style="color:#859900;">  server_name </span><span style="color:#839496;">test.jarrett.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">  ssl_certificate </span><span style="color:#839496;">SSL/test.jarrett.com.crt;</span></span>
<span class="line"><span style="color:#859900;">  ssl_certificate_key </span><span style="color:#839496;">SSL/test.jarrett.com.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  location</span><span style="color:#839496;"> / {</span></span>
<span class="line"><span style="color:#859900;">    proxy_pass </span><span style="color:#839496;">https://xx.xx.x.xxx:443/;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">Host https://xx.xx.x.xxx:443/;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Real-IP </span><span style="color:#859900;">$</span><span style="color:#268BD2;">remote_addr</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Forwarded-For </span><span style="color:#859900;">$</span><span style="color:#268BD2;">proxy_add_x_forwarded_for</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Forwarded-Photo </span><span style="color:#859900;">$</span><span style="color:#268BD2;">scheme</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  location</span><span style="color:#839496;"> /api/getUsers{</span></span>
<span class="line"><span style="color:#859900;">    proxy_pass </span><span style="color:#839496;">http://xx.xx.x.xxx:3000/mock/83/api/getUsers;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">Host http://xx.xx.x.xxx:3000;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Real-IP </span><span style="color:#859900;">$</span><span style="color:#268BD2;">remote_addr</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Forwarded-For </span><span style="color:#859900;">$</span><span style="color:#268BD2;">proxy_add_x_forwarded_for</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    proxy_set_header </span><span style="color:#839496;">X-Forwarded-Photo </span><span style="color:#859900;">$</span><span style="color:#268BD2;">scheme</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><p>vite 热更新配置</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#839496;">{</span></span>
<span class="line"><span style="color:#859900;">  &quot;server&quot;</span><span style="color:#839496;">: {</span></span>
<span class="line"><span style="color:#859900;">    &quot;hmr&quot;</span><span style="color:#839496;">: {</span></span>
<span class="line"><span style="color:#859900;">      &quot;port&quot;</span><span style="color:#839496;">: </span><span style="color:#D33682;">8888</span><span style="color:#586E75;font-style:italic;"> // 对应nginx监听的端口</span></span>
<span class="line"><span style="color:#839496;">    }</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><p>接口测试</p>`,15),M=p(`<h2 id="创建模拟数据" tabindex="-1">创建模拟数据 <a class="header-anchor" href="#创建模拟数据" aria-label="Permalink to &quot;创建模拟数据&quot;">​</a></h2><h3 id="mockjs-使用语法" tabindex="-1">mockjs 使用语法 <a class="header-anchor" href="#mockjs-使用语法" aria-label="Permalink to &quot;mockjs 使用语法&quot;">​</a></h3><p><a href="http://mockjs.com/examples.html" target="_blank" rel="noreferrer">数据模板定义示例</a></p><p>常用语法</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#839496;">{</span></span>
<span class="line"><span style="color:#859900;">  &quot;age|1-100&quot;</span><span style="color:#839496;">: </span><span style="color:#D33682;">100</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">  &quot;value|123.3&quot;</span><span style="color:#839496;">: </span><span style="color:#D33682;">123.111</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">  &quot;isVip|1-2&quot;</span><span style="color:#839496;">: </span><span style="color:#B58900;">true</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">  &quot;list|1-100&quot;</span><span style="color:#839496;">: [{ </span><span style="color:#859900;">&quot;name&quot;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&quot;test&quot;</span><span style="color:#839496;"> }],</span></span>
<span class="line"><span style="color:#859900;">  &quot;address|2&quot;</span><span style="color:#839496;">: {</span></span>
<span class="line"><span style="color:#859900;">    &quot;310000&quot;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&quot;上海市&quot;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">    &quot;320000&quot;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&quot;江苏省&quot;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">    &quot;330000&quot;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&quot;浙江省&quot;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#859900;">    &quot;340000&quot;</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&quot;安徽省&quot;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><h3 id="json-schema" tabindex="-1">json-schema <a class="header-anchor" href="#json-schema" aria-label="Permalink to &quot;json-schema&quot;">​</a></h3><p><img src="`+b+`" alt="json-schema" loading="lazy"></p><h2 id="高级-mock" tabindex="-1">高级 mock <a class="header-anchor" href="#高级-mock" aria-label="Permalink to &quot;高级 mock&quot;">​</a></h2><h3 id="mock-期望" tabindex="-1">Mock 期望 <a class="header-anchor" href="#mock-期望" aria-label="Permalink to &quot;Mock 期望&quot;">​</a></h3><ul><li>自定义过滤规则，返回自定义数据，支持 mock</li><li>可定义接口延时</li><li>可定义 http 状态码</li></ul><h3 id="自定义-mock-脚本" tabindex="-1">自定义 Mock 脚本 <a class="header-anchor" href="#自定义-mock-脚本" aria-label="Permalink to &quot;自定义 Mock 脚本&quot;">​</a></h3><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to &quot;全局变量&quot;">​</a></h4><p>请求</p><ul><li><code>header</code> 请求的 HTTP 头</li><li><code>params</code> 请求参数，包括 Body、Query 中所有参数</li><li><code>cookie</code> 请求带的 Cookies</li></ul><p>响应</p><ul><li><code>mockJson</code> 接口定义的响应数据 Mock 模板</li><li><code>resHeader</code> 响应的 HTTP 头</li><li><code>httpCode</code> 响应的 HTTP 状态码</li><li><code>delay</code> Mock 响应延时，单位为 ms</li><li><code>Random</code> Mock.Random 方法，可以添加自定义占位符,详细使用方法请查看</li></ul><p>示例 1，根据请求参数重写 mockJson</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">params</span><span style="color:#839496;">.</span><span style="color:#268BD2;">type</span><span style="color:#859900;"> ==</span><span style="color:#D33682;"> 1</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errcode</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 400</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errmsg</span><span style="color:#859900;"> =</span><span style="color:#2AA198;"> &#39;error&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">header</span><span style="color:#839496;">.</span><span style="color:#268BD2;">token</span><span style="color:#859900;"> ==</span><span style="color:#2AA198;"> &#39;t&#39;</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errcode</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 300</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errmsg</span><span style="color:#859900;"> =</span><span style="color:#2AA198;"> &#39;error&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">cookie</span><span style="color:#839496;">.</span><span style="color:#268BD2;">type</span><span style="color:#859900;"> ==</span><span style="color:#2AA198;"> &#39;a&#39;</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errcode</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 500</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  mockJson</span><span style="color:#839496;">.</span><span style="color:#268BD2;">errmsg</span><span style="color:#859900;"> =</span><span style="color:#2AA198;"> &#39;error&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div><h2 id="自动化测试" tabindex="-1">自动化测试 <a class="header-anchor" href="#自动化测试" aria-label="Permalink to &quot;自动化测试&quot;">​</a></h2><p>传统的接口自动化测试成本高，大量的项目没有使用自动化测试保证接口的质量，仅仅依靠手动测试，是非常不可靠和容易出错的。</p><p>YApi 为了解决这个问题，开发了可视化接口自动化测试功能，只需要配置每个接口的入参和对 RESPONSE 断言，即可实现对接口的自动化测试，大大提升了接口测试的效率。</p><p><img src="`+A+'" alt="自动化测试" loading="lazy"></p><p>用例之间可以互相引用数据</p><p><img src="'+D+'" alt="" loading="lazy"></p><p><img src="'+f+'" alt="" loading="lazy"></p><h2 id="竞品" tabindex="-1">竞品 <a class="header-anchor" href="#竞品" aria-label="Permalink to &quot;竞品&quot;">​</a></h2><p>市面上还有一些商业化接口管理平台，如 Apifox，提供了更加丰富的功能，可付费私有化部署</p><p><a href="https://app.apifox.com/main/teams/2803313?tab=project" target="_blank" rel="noreferrer">Apifox</a></p><h3 id="数据模型" tabindex="-1">数据模型 <a class="header-anchor" href="#数据模型" aria-label="Permalink to &quot;数据模型&quot;">​</a></h3><p><img src="'+C+'" alt="数据模型" loading="lazy"></p><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><p><img src="'+x+'" alt="编辑组件" loading="lazy"></p><p><img src="'+_+'" alt="使用组件" loading="lazy"></p><h1 id="_10-分钟速通-ts" tabindex="-1">10 分钟速通 TS <a class="header-anchor" href="#_10-分钟速通-ts" aria-label="Permalink to &quot;10 分钟速通 TS&quot;">​</a></h1><h2 id="ts-必知必会" tabindex="-1">TS 必知必会 <a class="header-anchor" href="#ts-必知必会" aria-label="Permalink to &quot;TS 必知必会&quot;">​</a></h2><p>用 20% 的知识解决 80% 的日常开发</p><h3 id="type-interface" tabindex="-1">type &amp; interface <a class="header-anchor" href="#type-interface" aria-label="Permalink to &quot;type &amp; interface&quot;">​</a></h3><ul><li>type 类型别名。适用于定义复杂的类型组合，如联合类型和交叉类型。<strong>当需要表示一个值可能是多种类型之一，或者一个类型需要同时满足多种类型的特征时，类型别名非常方便</strong></li><li>interface 接口。更适合用于定义对象的形状，尤其是在面向对象编程或者定义 API 的返回值和参数类型时。<strong>当需要描述一个类应该实现的契约（如具有哪些方法和属性）时，接口是很好的选择</strong></li></ul>',38),z=s("h3",{id:"条件类型",tabindex:"-1"},[l("条件类型 "),s("a",{class:"header-anchor",href:"#条件类型","aria-label":'Permalink to "条件类型"'},"​")],-1),F=s("p",null,"extends 既可以用于继承，也可用于类型约束",-1),L=s("h3",{id:"namespace",tabindex:"-1"},[l("namespace "),s("a",{class:"header-anchor",href:"#namespace","aria-label":'Permalink to "namespace"'},"​")],-1),V=s("p",null,"用于防止类型重命名冲突，比如微信小程序提供了全局类型的 namespace",-1),Z=s("h3",{id:"泛型",tabindex:"-1"},[l("泛型 "),s("a",{class:"header-anchor",href:"#泛型","aria-label":'Permalink to "泛型"'},"​")],-1),K=s("p",null,"合理使用泛型是 ts 的精髓，能够更好的封装通用方法",-1),J=s("p",null,"学会泛型能够轻松阅读各类社区库的类型声明，良好的变量命名、类型声明很多时候可以替代文档",-1),$=s("h3",{id:"枚举-常量枚举",tabindex:"-1"},[l("枚举 & 常量枚举 "),s("a",{class:"header-anchor",href:"#枚举-常量枚举","aria-label":'Permalink to "枚举 & 常量枚举"'},"​")],-1),G=s("p",null,[l("业务代码中常有关于枚举的判断，比如"),s("code",null,"data.status===1"),l("，这可能分散在各个项目文件，并且缺失语义")],-1),H=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"建议"),s("p",null,"如果不想在业务变动时一处处地逐个修改枚举判断，建议所有使用常量或枚举而不是硬编码")],-1),W=p(`<p>编译结果如下</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#2AA198;">&#39;use strict&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">var</span><span style="color:#268BD2;"> Status</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">function</span><span style="color:#839496;"> (Status) {</span></span>
<span class="line"><span style="color:#268BD2;">  Status</span><span style="color:#839496;">[(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">[</span><span style="color:#2AA198;">&#39;SUCCESS&#39;</span><span style="color:#839496;">] </span><span style="color:#859900;">=</span><span style="color:#D33682;"> 0</span><span style="color:#839496;">)] </span><span style="color:#859900;">=</span><span style="color:#2AA198;"> &#39;SUCCESS&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  Status</span><span style="color:#839496;">[(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">[</span><span style="color:#2AA198;">&#39;FAIL&#39;</span><span style="color:#839496;">] </span><span style="color:#859900;">=</span><span style="color:#D33682;"> 1</span><span style="color:#839496;">)] </span><span style="color:#859900;">=</span><span style="color:#2AA198;"> &#39;FAIL&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#268BD2;">  Status</span><span style="color:#839496;">[(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">[</span><span style="color:#2AA198;">&#39;PENDING&#39;</span><span style="color:#839496;">] </span><span style="color:#859900;">=</span><span style="color:#D33682;"> 2</span><span style="color:#839496;">)] </span><span style="color:#859900;">=</span><span style="color:#2AA198;"> &#39;PENDING&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">})(</span><span style="color:#268BD2;">Status</span><span style="color:#859900;"> ||</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">Status</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {}));</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> _ConstStatus</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  SUCCESS: </span><span style="color:#D33682;">0</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  FAIL: </span><span style="color:#D33682;">1</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  PENDING: </span><span style="color:#D33682;">2</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"><span style="color:#268BD2;">console</span><span style="color:#839496;">.</span><span style="color:#268BD2;">log</span><span style="color:#839496;">(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">.</span><span style="color:#268BD2;">SUCCESS</span><span style="color:#839496;">, </span><span style="color:#D33682;">0</span><span style="color:#586E75;font-style:italic;"> /* ConstStatus.SUCCESS */</span><span style="color:#839496;">, </span><span style="color:#268BD2;">_ConstStatus</span><span style="color:#839496;">.</span><span style="color:#268BD2;">SUCCESS</span><span style="color:#839496;">);</span></span></code></pre></div><h3 id="utility-types-实用工具类型" tabindex="-1">Utility Types 实用工具类型 <a class="header-anchor" href="#utility-types-实用工具类型" aria-label="Permalink to &quot;Utility Types 实用工具类型&quot;">​</a></h3><h4 id="_1-partial-t" tabindex="-1">1. <code>Partial&lt;T&gt;</code> <a class="header-anchor" href="#_1-partial-t" aria-label="Permalink to &quot;1. \`Partial&lt;T&gt;\`&quot;">​</a></h4><p>定义和用途： <code>Partial&lt;T&gt;</code>用于将一个类型 <code>T</code> 的所有属性变为可选的。这在处理对象类型时非常有用，比如在创建对象的部分属性更新函数时。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">interface</span><span style="color:#CB4B16;"> User</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  age</span><span style="color:#859900;">:</span><span style="color:#859900;"> number</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  email</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> partialUser</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> Partial</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">User</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">=</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name: </span><span style="color:#2AA198;">&#39;John&#39;</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><p>在这个例子中，<code>partialUser</code> 可以只包含 User 接口中部分属性，因为 <code>Partial&lt;User&gt;</code>将 <code>User</code> 接口的所有属性都变成了可选属性。</p><h4 id="_2-required-t" tabindex="-1">2. <code>Required&lt;T&gt;</code> <a class="header-anchor" href="#_2-required-t" aria-label="Permalink to &quot;2. \`Required&lt;T&gt;\`&quot;">​</a></h4><p>定义和用途： 与 <code>Partial&lt;T&gt;</code>相反，<code>Required&lt;T&gt;</code>将类型 <code>T</code> 的所有可选属性变为必选属性。这有助于确保在某些场景下对象的完整性。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">interface</span><span style="color:#CB4B16;"> PartialProduct</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name</span><span style="color:#859900;">?:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  price</span><span style="color:#859900;">?:</span><span style="color:#859900;"> number</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> requiredProduct</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> Required</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">PartialProduct</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">=</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name: </span><span style="color:#2AA198;">&#39;Phone&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  price: </span><span style="color:#D33682;">599</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><p>这里 <code>Required&lt;PartialProduct&gt;</code>强制要求 <code>requiredProduct</code> 必须包含 <code>name</code> 和 <code>price</code> 属性，不能有缺失。</p><h4 id="_3-readonly-t" tabindex="-1">3. <code>Readonly&lt;T&gt;</code> <a class="header-anchor" href="#_3-readonly-t" aria-label="Permalink to &quot;3. \`Readonly&lt;T&gt;\`&quot;">​</a></h4><p>定义和用途： <code>Readonly&lt;T&gt;</code>用于创建一个新的类型，其所有属性都是只读的。这在需要确保对象属性不被意外修改的场景下非常有用，比如配置对象或者常量对象。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">interface</span><span style="color:#CB4B16;"> Settings</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  theme</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  fontSize</span><span style="color:#859900;">:</span><span style="color:#859900;"> number</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> readonlySettings</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> Readonly</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Settings</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">=</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  theme: </span><span style="color:#2AA198;">&#39;dark&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  fontSize: </span><span style="color:#D33682;">14</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// readonlySettings.theme = &#39;light&#39;; // 这行代码会报错，因为属性是只读的</span></span></code></pre></div><h4 id="_4-pick-t-k" tabindex="-1">4. <code>Pick&lt;T, K&gt;</code> <a class="header-anchor" href="#_4-pick-t-k" aria-label="Permalink to &quot;4. \`Pick&lt;T, K&gt;\`&quot;">​</a></h4><p>定义和用途： <code>Pick&lt;T, K&gt;</code>从类型 T 中挑选出属性集 K 所指定的属性，创建一个新的类型。K 是一个联合类型，代表要选择的属性名。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">interface</span><span style="color:#CB4B16;"> Car</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  brand</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  model</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  year</span><span style="color:#859900;">:</span><span style="color:#859900;"> number</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  color</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> CarInfo</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Pick</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Car</span><span style="color:#839496;">, </span><span style="color:#2AA198;">&#39;brand&#39;</span><span style="color:#859900;"> |</span><span style="color:#2AA198;"> &#39;model&#39;</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> myCarInfo</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> CarInfo</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  brand: </span><span style="color:#2AA198;">&#39;Toyota&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  model: </span><span style="color:#2AA198;">&#39;Corolla&#39;</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><p>在这个例子中，CarInfo 类型只包含 Car 接口中的 brand 和 model 属性。</p><h4 id="_5-omit-t-k" tabindex="-1">5. <code>Omit&lt;T, K&gt;</code> <a class="header-anchor" href="#_5-omit-t-k" aria-label="Permalink to &quot;5. \`Omit&lt;T, K&gt;\`&quot;">​</a></h4><p>定义和用途： 与 <code>Pick&lt;T, K&gt;</code>相反，<code>Omit&lt;T, K&gt;</code>从类型 <code>T</code> 中排除属性集 <code>K</code> 所指定的属性，生成一个新的类型。这在想要去除某些不需要的属性时很有用。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">interface</span><span style="color:#CB4B16;"> Person</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  age</span><span style="color:#859900;">:</span><span style="color:#859900;"> number</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  address</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  phone</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> PersonWithoutAddress</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Omit</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Person</span><span style="color:#839496;">, </span><span style="color:#2AA198;">&#39;address&#39;</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> person</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> PersonWithoutAddress</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  name: </span><span style="color:#2AA198;">&#39;Alice&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  age: </span><span style="color:#D33682;">30</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  phone: </span><span style="color:#2AA198;">&#39;1234567890&#39;</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><p>这里 <code>PersonWithoutAddress</code> 类型是从 <code>Person</code> 接口中排除了 <code>address</code> 属性后的新类型。</p><h4 id="_6-record-k-t" tabindex="-1">6. <code>Record&lt;K, T&gt;</code> <a class="header-anchor" href="#_6-record-k-t" aria-label="Permalink to &quot;6. \`Record&lt;K, T&gt;\`&quot;">​</a></h4><p>定义和用途： <code>Record&lt;K, T&gt;</code>用于创建一个新的类型，其属性键的类型为 <code>K</code>，属性值的类型为 <code>T</code>。<code>K</code> 通常是一个字符串字面量类型或者联合类型，<code>T</code> 可以是任何类型。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> Colors</span><span style="color:#859900;"> =</span><span style="color:#2AA198;"> &#39;red&#39;</span><span style="color:#859900;"> |</span><span style="color:#2AA198;"> &#39;green&#39;</span><span style="color:#859900;"> |</span><span style="color:#2AA198;"> &#39;blue&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> ColorMap</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Record</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Colors</span><span style="color:#839496;">, </span><span style="color:#859900;">string</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> colorMap</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> ColorMap</span><span style="color:#859900;"> =</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">  red: </span><span style="color:#2AA198;">&#39;#FF0000&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  green: </span><span style="color:#2AA198;">&#39;#00FF00&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  blue: </span><span style="color:#2AA198;">&#39;#0000FF&#39;</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><p>这个例子中，<code>ColorMap</code> 类型的对象以 <code>Colors</code> 联合类型中的字符串作为键，以 <code>string</code> 类型作为值。</p><h4 id="_7-exclude-t-u" tabindex="-1">7. <code>Exclude&lt;T, U&gt;</code> <a class="header-anchor" href="#_7-exclude-t-u" aria-label="Permalink to &quot;7. \`Exclude&lt;T, U&gt;\`&quot;">​</a></h4><p>定义和用途： <code>Exclude&lt;T, U&gt;</code>用于从类型 <code>T</code> 中排除可以赋值给类型 <code>U</code> 的元素，返回剩余的类型。它主要用于处理联合类型。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> Numbers</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 1</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 2</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 3</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 4</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 5</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> OddNumbers</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Exclude</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Numbers</span><span style="color:#839496;">, </span><span style="color:#D33682;">2</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 4</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> oddNumber</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> OddNumbers</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 1</span><span style="color:#839496;">;</span></span></code></pre></div><p>在这里，<code>OddNumbers</code> 是从 <code>Numbers</code> 联合类型中排除了偶数 2 和 4 后剩下的奇数类型。</p><h4 id="_8-extract-t-u" tabindex="-1">8. <code>Extract&lt;T, U&gt;</code> <a class="header-anchor" href="#_8-extract-t-u" aria-label="Permalink to &quot;8. \`Extract&lt;T, U&gt;\`&quot;">​</a></h4><p>定义和用途： 与 <code>Exclude&lt;T, U&gt;</code>相反，<code>Extract&lt;T, U&gt;</code>从类型 <code>T</code> 中提取可以赋值给类型 <code>U</code> 的元素，生成一个新的类型。 示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> AllNumbers</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 1</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 2</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 3</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 4</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 5</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> EvenNumbers</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Extract</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">AllNumbers</span><span style="color:#839496;">, </span><span style="color:#D33682;">2</span><span style="color:#859900;"> |</span><span style="color:#D33682;"> 4</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> evenNumber</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> EvenNumbers</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 2</span><span style="color:#839496;">;</span></span></code></pre></div><p>此例中，<code>EvenNumbers</code> 是从 <code>AllNumbers</code> 联合类型中提取出偶数 2 和 4 后的类型。</p><h2 id="业务应用实践" tabindex="-1">业务应用实践 <a class="header-anchor" href="#业务应用实践" aria-label="Permalink to &quot;业务应用实践&quot;">​</a></h2>`,35),X=p('<p>以上是静态类型校验，那么如何过渡到动态类型校验？</p><h2 id="运行时数据校验" tabindex="-1">运行时数据校验 <a class="header-anchor" href="#运行时数据校验" aria-label="Permalink to &quot;运行时数据校验&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">解决什么问题</p><ul><li>后端服务互相调用，数据类型不确定</li><li>可能出现的属性空值</li><li>可能由类型导致的问题，比如 falsy 判断、字符串和数字相加</li></ul></div><h3 id="碰到的挑战" tabindex="-1">碰到的挑战 <a class="header-anchor" href="#碰到的挑战" aria-label="Permalink to &quot;碰到的挑战&quot;">​</a></h3><p><img src="'+T+'" alt="使用组件" loading="lazy"></p><p>经过调研，选用了 zod 库作为方案实现的核心库</p><p>该库较为成熟，社区活跃，原生支持 TS，且能够完全对标 TS 语法，一份 schema 同时生成校验器和 TS 静态类型，使用简单、直观、轻便</p>',7),Q=p(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-vfs4S" id="tab-ZhjMJbu" checked><label data-title="/base-service/validator.ts" for="tab-ZhjMJbu">/base-service/validator.ts</label><input type="radio" name="group-vfs4S" id="tab-hkFyF0L"><label data-title="/detail-service/api.ts" for="tab-hkFyF0L">/detail-service/api.ts</label><input type="radio" name="group-vfs4S" id="tab-Te6_Cg6"><label data-title="/detail-service/validator.ts" for="tab-Te6_Cg6">/detail-service/validator.ts</label><input type="radio" name="group-vfs4S" id="tab-DiHbMU0"><label data-title="/detail-service/types.ts" for="tab-DiHbMU0">/detail-service/types.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeString</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  string</span><span style="color:#839496;">().</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    try</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">      const</span><span style="color:#268BD2;"> data</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> JSON</span><span style="color:#839496;">.</span><span style="color:#268BD2;">stringify</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">      return</span><span style="color:#268BD2;"> data</span><span style="color:#859900;"> ||</span><span style="color:#2AA198;"> &#39;&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">    } </span><span style="color:#859900;">catch</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">e</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#859900;">      return</span><span style="color:#2AA198;"> &#39;&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">    }</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">// coerce number 解析如&#39;测试文本&#39;这样的文本字符串，无法类型强转，会parse error</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeNumber</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  number</span><span style="color:#839496;">().</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">    const</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">success</span><span style="color:#839496;">, </span><span style="color:#268BD2;">data</span><span style="color:#839496;"> } </span><span style="color:#859900;">=</span><span style="color:#268BD2;"> coerce</span><span style="color:#839496;">.</span><span style="color:#268BD2;">number</span><span style="color:#839496;">().</span><span style="color:#268BD2;">safeParse</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">success</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#268BD2;"> data</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    else</span><span style="color:#859900;"> return</span><span style="color:#D33682;"> 0</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeBoolean</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  boolean</span><span style="color:#839496;">().</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">    const</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">success</span><span style="color:#839496;">, </span><span style="color:#268BD2;">data</span><span style="color:#839496;"> } </span><span style="color:#859900;">=</span><span style="color:#268BD2;"> coerce</span><span style="color:#839496;">.</span><span style="color:#268BD2;">boolean</span><span style="color:#839496;">().</span><span style="color:#268BD2;">safeParse</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">success</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#268BD2;"> data</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">    else</span><span style="color:#859900;"> return</span><span style="color:#B58900;"> false</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeArray</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span><span style="color:#CB4B16;">T</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> ZodTypeAny</span><span style="color:#839496;">&gt;(</span></span>
<span class="line"><span style="color:#839496;">  schema</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> T</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  params</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> RawCreateParams</span><span style="color:#859900;"> &amp;</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">filter</span><span style="color:#859900;">?:</span><span style="color:#839496;"> (val</span><span style="color:#859900;">:</span><span style="color:#859900;"> unknown</span><span style="color:#839496;">[]) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#859900;"> unknown</span><span style="color:#839496;">[] }</span></span>
<span class="line"><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">  return</span><span style="color:#268BD2;"> array</span><span style="color:#839496;">(</span><span style="color:#268BD2;">schema</span><span style="color:#839496;">).</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">Array</span><span style="color:#839496;">.</span><span style="color:#268BD2;">isArray</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">)) {</span></span>
<span class="line"><span style="color:#859900;">      return</span><span style="color:#268BD2;"> params</span><span style="color:#839496;">?.</span><span style="color:#268BD2;">filter</span><span style="color:#859900;"> ?</span><span style="color:#268BD2;"> params</span><span style="color:#839496;">.</span><span style="color:#268BD2;">filter</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">) </span><span style="color:#859900;">:</span><span style="color:#268BD2;"> ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">; </span><span style="color:#586E75;font-style:italic;">// 避免混合类型数组报错 [{name:&#39;test&#39;},null]</span></span>
<span class="line"><span style="color:#839496;">    } </span><span style="color:#859900;">else</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">      return</span><span style="color:#839496;"> [];</span></span>
<span class="line"><span style="color:#839496;">    }</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> ObjectParams</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> ZodObject</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">ZodRawShape</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeObject</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span></span>
<span class="line"><span style="color:#CB4B16;">  T</span><span style="color:#93A1A1;font-weight:bold;"> extends</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#CB4B16;"> ObjectParams</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#CB4B16;"> ZodDefault</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">ObjectParams</span><span style="color:#839496;">&gt;</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#CB4B16;"> ZodNullable</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">ObjectParams</span><span style="color:#839496;">&gt;</span></span>
<span class="line"><span style="color:#859900;">    |</span><span style="color:#CB4B16;"> ZodDefault</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">ZodNullable</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">ObjectParams</span><span style="color:#839496;">&gt;&gt;</span></span>
<span class="line"><span style="color:#839496;">&gt;(</span></span>
<span class="line"><span style="color:#839496;">  schema</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> T</span></span>
<span class="line"><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">  return</span><span style="color:#268BD2;"> schema</span><span style="color:#839496;">.</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">((ctx</span><span style="color:#859900;">:</span><span style="color:#839496;"> { error</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> ZodError</span><span style="color:#839496;"> }) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#839496;"> {};</span></span>
<span class="line"><span style="color:#839496;">  }) </span><span style="color:#859900;">as</span><span style="color:#CB4B16;"> ZodCatch</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">typeof</span><span style="color:#268BD2;"> schema</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeLiteral</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span><span style="color:#CB4B16;">T</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> Primitive</span><span style="color:#839496;">&gt;(schema</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> T</span><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  literal</span><span style="color:#839496;">(</span><span style="color:#268BD2;">schema</span><span style="color:#839496;">).</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#268BD2;"> schema</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeNativeEnum</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span><span style="color:#CB4B16;">T</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> EnumLike</span><span style="color:#839496;">&gt;(schema</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> T</span><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  nativeEnum</span><span style="color:#839496;">(</span><span style="color:#268BD2;">schema</span><span style="color:#839496;">).</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#268BD2;"> Object</span><span style="color:#839496;">.</span><span style="color:#268BD2;">values</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">input</span><span style="color:#839496;">)[</span><span style="color:#D33682;">0</span><span style="color:#839496;">];</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeNull</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
<span class="line"><span style="color:#268BD2;">  zodNull</span><span style="color:#839496;">().</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#B58900;"> null</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeUnion</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span><span style="color:#CB4B16;">T</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> Readonly</span><span style="color:#839496;">&lt;[</span><span style="color:#CB4B16;">ZodTypeAny</span><span style="color:#839496;">, </span><span style="color:#CB4B16;">ZodTypeAny</span><span style="color:#839496;">, </span><span style="color:#859900;">...</span><span style="color:#CB4B16;">ZodTypeAny</span><span style="color:#839496;">[]]&gt;&gt;(schema</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> T</span><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">  return</span><span style="color:#268BD2;"> union</span><span style="color:#839496;">(</span><span style="color:#268BD2;">schema</span><span style="color:#839496;">).</span><span style="color:#268BD2;">catch</span><span style="color:#839496;">(ctx </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#268BD2;">    log2wx</span><span style="color:#839496;">(</span><span style="color:#268BD2;">ctx</span><span style="color:#839496;">.</span><span style="color:#268BD2;">error</span><span style="color:#839496;">.</span><span style="color:#268BD2;">message</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#2AA198;"> &#39;&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  });</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> createBaseResponseValidator</span><span style="color:#859900;"> =</span><span style="color:#839496;"> &lt;</span><span style="color:#CB4B16;">Data</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> ZodType</span><span style="color:#839496;">, </span><span style="color:#CB4B16;">Meta</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#CB4B16;"> ZodType</span><span style="color:#839496;">&gt;(</span></span>
<span class="line"><span style="color:#839496;">  data</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> Data</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">  meta</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> Meta</span></span>
<span class="line"><span style="color:#839496;">) </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#859900;">  return</span><span style="color:#268BD2;"> safeObject</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#268BD2;">    object</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">      code: </span><span style="color:#268BD2;">number</span><span style="color:#839496;">(),</span></span>
<span class="line"><span style="color:#839496;">      msg: </span><span style="color:#268BD2;">string</span><span style="color:#839496;">(),</span></span>
<span class="line"><span style="color:#839496;">      data: </span><span style="color:#268BD2;">preprocess</span><span style="color:#839496;">(val </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#268BD2;"> val</span><span style="color:#859900;"> ||</span><span style="color:#B58900;"> null</span><span style="color:#839496;">, </span><span style="color:#268BD2;">data</span><span style="color:#859900;"> ||</span><span style="color:#268BD2;"> safeNull</span><span style="color:#839496;">()),</span></span>
<span class="line"><span style="color:#839496;">      meta: </span><span style="color:#268BD2;">preprocess</span><span style="color:#839496;">(val </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#268BD2;"> val</span><span style="color:#859900;"> ||</span><span style="color:#B58900;"> null</span><span style="color:#839496;">, </span><span style="color:#268BD2;">meta</span><span style="color:#859900;"> ||</span><span style="color:#268BD2;"> safeNull</span><span style="color:#839496;">())</span></span>
<span class="line"><span style="color:#839496;">    }).</span><span style="color:#268BD2;">partial</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">      meta: </span><span style="color:#B58900;">true</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">      msg: </span><span style="color:#B58900;">true</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">      data: </span><span style="color:#B58900;">true</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">  );</span></span>
<span class="line"><span style="color:#839496;">};</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#859900;">import</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">createDetailValitor</span><span style="color:#839496;"> } </span><span style="color:#859900;">from</span><span style="color:#2AA198;"> &#39;./validator&#39;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">class</span><span style="color:#CB4B16;"> DetailService</span><span style="color:#93A1A1;font-weight:bold;"> extends</span><span style="color:#6C71C4;"> BaseServices</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  constructor</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#268BD2;">    super</span><span style="color:#839496;">();</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">  getDetail</span><span style="color:#839496;">(query</span><span style="color:#859900;">:</span><span style="color:#839496;"> { orderId</span><span style="color:#859900;">:</span><span style="color:#859900;"> string</span><span style="color:#839496;"> }) {</span></span>
<span class="line"><span style="color:#859900;">    return</span><span style="color:#268BD2;"> this</span><span style="color:#839496;">.</span><span style="color:#268BD2;">sendRequest</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">      {</span></span>
<span class="line"><span style="color:#839496;">        url:</span><span style="color:#2AA198;">&#39;/api/detail&#39;</span></span>
<span class="line"><span style="color:#268BD2;">        method</span><span style="color:#839496;">: </span><span style="color:#2AA198;">&#39;POST&#39;</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">        query</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#839496;">        validator: </span><span style="color:#268BD2;">createDetailValitor</span></span>
<span class="line"><span style="color:#839496;">      },</span></span>
<span class="line"><span style="color:#839496;">    );</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> const</span><span style="color:#268BD2;"> detailService</span><span style="color:#859900;"> =</span><span style="color:#859900;"> new</span><span style="color:#268BD2;"> DetailServices</span><span style="color:#839496;">();</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">enum Status {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  SUCCESS,</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  FAIL</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">}</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">export interface ListItem {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  name: string;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  age: number;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  status: Status;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  children?: ListItem[];</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">}</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">export interface DetailResponse extends BaseResponse {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  data: {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    id: string;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    name: string;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    tags: string[];</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    list: ListItem[];</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  };</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">}</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> listItem</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> safeObjectWrap</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#268BD2;">  object</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">    status: </span><span style="color:#268BD2;">safeNativeEnum</span><span style="color:#839496;">(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">).</span><span style="color:#268BD2;">default</span><span style="color:#839496;">(</span><span style="color:#268BD2;">Status</span><span style="color:#839496;">.</span><span style="color:#268BD2;">FAIL</span><span style="color:#839496;">),</span></span>
<span class="line"><span style="color:#839496;">    name: </span><span style="color:#268BD2;">safeString</span><span style="color:#839496;">().</span><span style="color:#268BD2;">default</span><span style="color:#839496;">(</span><span style="color:#2AA198;">&#39;&#39;</span><span style="color:#839496;">),</span></span>
<span class="line"><span style="color:#839496;">    age: </span><span style="color:#268BD2;">safeNumber</span><span style="color:#839496;">().</span><span style="color:#268BD2;">default</span><span style="color:#839496;">(</span><span style="color:#D33682;">20</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#839496;">  }).</span><span style="color:#268BD2;">passthrough</span><span style="color:#839496;">()</span></span>
<span class="line"><span style="color:#839496;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> createDetailValidator</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  type</span><span style="color:#CB4B16;"> Input</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> input</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">typeof</span><span style="color:#268BD2;"> listItem</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">&amp;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">    children</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> Input</span><span style="color:#839496;">[];</span></span>
<span class="line"><span style="color:#839496;">  };</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  type</span><span style="color:#CB4B16;"> Output</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> output</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">typeof</span><span style="color:#268BD2;"> listItem</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">&amp;</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">    children</span><span style="color:#859900;">?:</span><span style="color:#CB4B16;"> Output</span><span style="color:#839496;">[];</span></span>
<span class="line"><span style="color:#839496;">  };</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">  const</span><span style="color:#268BD2;"> schema</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> ZodType</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Output</span><span style="color:#839496;">, </span><span style="color:#CB4B16;">ZodTypeDef</span><span style="color:#839496;">, </span><span style="color:#CB4B16;">Input</span><span style="color:#839496;">&gt; </span><span style="color:#859900;">=</span><span style="color:#268BD2;"> listItem</span></span>
<span class="line"><span style="color:#839496;">    .</span><span style="color:#268BD2;">extend</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">      children: </span><span style="color:#268BD2;">lazy</span><span style="color:#839496;">(() </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span><span style="color:#268BD2;"> schema</span><span style="color:#839496;">.</span><span style="color:#268BD2;">array</span><span style="color:#839496;">())</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">    .</span><span style="color:#268BD2;">partial</span><span style="color:#839496;">({ children: </span><span style="color:#B58900;">true</span><span style="color:#839496;"> });</span></span>
<span class="line"><span style="color:#859900;">  return</span><span style="color:#268BD2;"> createBaseResponseValidator</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#268BD2;">    safeObjectWrap</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#268BD2;">      object</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        id: </span><span style="color:#268BD2;">safeString</span><span style="color:#839496;">(),</span></span>
<span class="line"><span style="color:#839496;">        name: </span><span style="color:#268BD2;">safeString</span><span style="color:#839496;">(),</span></span>
<span class="line"><span style="color:#839496;">        tags: </span><span style="color:#268BD2;">safeArray</span><span style="color:#839496;">(</span><span style="color:#268BD2;">safeString</span><span style="color:#839496;">()).</span><span style="color:#268BD2;">default</span><span style="color:#839496;">([]),</span></span>
<span class="line"><span style="color:#839496;">        list: </span><span style="color:#268BD2;">safeArray</span><span style="color:#839496;">(</span><span style="color:#268BD2;">schema</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#839496;">      }).</span><span style="color:#268BD2;">partial</span><span style="color:#839496;">({ list: </span><span style="color:#B58900;">true</span><span style="color:#839496;"> })</span></span>
<span class="line"><span style="color:#839496;">    )</span></span>
<span class="line"><span style="color:#839496;">  );</span></span>
<span class="line"><span style="color:#839496;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> const</span><span style="color:#268BD2;"> detailSchema</span><span style="color:#859900;"> =</span><span style="color:#268BD2;"> createDetailValidator</span><span style="color:#839496;">();</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#859900;">import</span><span style="color:#839496;"> { </span><span style="color:#268BD2;">detailSchema</span><span style="color:#839496;"> } </span><span style="color:#859900;">from</span><span style="color:#2AA198;"> &#39;./validator&#39;</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">type</span><span style="color:#CB4B16;"> DetailSchema</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> z</span><span style="color:#839496;">.</span><span style="color:#CB4B16;">infer</span><span style="color:#839496;">&lt;</span><span style="color:#859900;">typeof</span><span style="color:#268BD2;"> detailSchema</span><span style="color:#839496;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> type</span><span style="color:#CB4B16;"> Data</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> DetailSchema</span><span style="color:#839496;">[</span><span style="color:#2AA198;">&#39;data&#39;</span><span style="color:#839496;">];</span></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> type</span><span style="color:#CB4B16;"> List</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> DetailSchema</span><span style="color:#839496;">[</span><span style="color:#2AA198;">&#39;data&#39;</span><span style="color:#839496;">][</span><span style="color:#2AA198;">&#39;list&#39;</span><span style="color:#839496;">];</span></span>
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> type</span><span style="color:#CB4B16;"> DataWithoutId</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Omit</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Data</span><span style="color:#839496;">, </span><span style="color:#2AA198;">&#39;id&#39;</span><span style="color:#839496;">&gt;;</span></span></code></pre></div></div></div>`,1),ts=JSON.parse('{"title":"前端基建 ——— 接口、数据、类型在前端开发中的管理及应用","description":"","frontmatter":{},"headers":[],"relativePath":"plan/front-end-infrastructure/index.md","filePath":"plan/front-end-infrastructure/index.md","lastUpdated":1737179313000}'),Y={name:"plan/front-end-infrastructure/index.md"},cs=Object.assign(Y,{setup(B){const e=`
type MyType<T> = T extends string ? T : '1';
const a: MyType<string> = 'test';
const b: MyType<number> = 1
`,t=`
declare namespace MySpace {
  interface UserType {}
}

const user: MySpace.UserType = {};


declare namespace WechatMiniprogram {
    type IAnyObject = Record<string, any>
    interface Target<DataSet extends IAnyObject = IAnyObject> {
        /** 事件组件的 id */
        id: string
        /** 当前组件的类型 */
        tagName?: string
        /** 事件组件上由 'data-' 开头的自定义属性组成的集合 */
        dataset: DataSet
        /** 距离页面顶部的偏移量 */
        offsetTop: number
        /** 距离页面左边的偏移量 */
        offsetLeft: number
    }

    /** 基础事件参数 */
    interface BaseEvent<
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > {
        /** 事件类型 */
        type: string
        /** 页面打开到触发事件所经过的毫秒数 */
        timeStamp: number
        /** 事件冒泡路径上所有由 'mark:' 开头的自定义属性组成的集合 */
        mark?: Mark
        /** 触发事件的源组件 */
        target: Target<TargetDataset>
        /** 事件绑定的当前组件 */
        currentTarget: Target<CurrentTargetDataset>
    }

       /** 自定义事件 */
    interface CustomEvent<
        Detail extends IAnyObject = IAnyObject,
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
        /** 额外的信息 */
        detail: Detail
    }
}


function handleTap(e:WechatMiniprogram.CustomEvent<{name:string}>){
  console.log(e.detail.name);
}
`,y=`
// 使用泛型声明对象
interface Student<Sex = string, Info = string> {
  name: string;
  age: number;
  sex: Sex;
  info: Info extends string ? Info : {
    address: string;
    phone: number;
  }
}

// 默认导出也可使用泛型约束类型
export default <Student>{
  name: '谷雨',
  age: 18,
  sex: 'male'
}

const student: Student<'female', []> = {
  name: '谷雨',
  age: 18,
  sex: 'male'
}

// 你可能会这样声明函数
const add = (a: number, b: number) => a + b;

// 更好的方式
type Add<T> = (a: T, b: T) => T;

// T可代表任何类型
const addN: Add<number> = (a, b) => a + b;
const addS: Add<string> = (a, b) => a + b;

addN(1, '2');
addS(2, 3);

function getDetail<T extends object>(id: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {} as T
      resolve(data)
    }, 1000)
  })
}

interface Result {
  name: string;
  age: number;
}

const detail = getDetail<Result>(1234);

detail.then(res => {
  res.age;
  res.name;
})

`,i=`
// 继承
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person{
  id: number;
}

interface Employee {
  payed: number;
}

// 交叉类型可以实现继承的效果
type Employer = { title: string } & Person;
type SomeOne = Employee | Employer

const person1: Employee = {
  id: 123,
  name: '老王',
  age: 30
}

const person2: Employer = {
  title: '部门主管',
  name: '王老板',
  age: 40
}

const person3: SomeOne = {

}
`,c=`
// 能生成真实对象并操作
enum Status{
 SUCCESS,
 FAIL,
 PENDING,
}

const enum ConstStatus {
 SUCCESS,
 FAIL,
 PENDING,
}

const _ConstStatus = {
  SUCCESS: 0,
  FAIL: 1,
  PENDING: 2
} as const;

 	
console.log(Status.SUCCESS,ConstStatus.SUCCESS,_ConstStatus.SUCCESS);

Status.SUCCESS = 111;
ConstStatus.SUCCESS = 111;
_ConstStatus.SUCCESS = 111;
Status[0] === 'SUCCESS'
`,h=`
/* service层定义接口及入参出参类型 */

/*--------------- /services/base/types.ts ----------------*/

export interface BaseResponse {
  msg: string;
  code: number;
}

interface RequestParams<T> {
  url: string;
  method: 'GET' | 'POST';
  query: T;
}

/*---------------------------------------------------------*/



/*--------------- /services/base/request.ts ----------------*/

function sendRequest<Response extends object, Params>(params?: RequestParams<Params>): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(params);
      const data = {} as Response
      resolve(data)
    }, 1000)
  })
}

/*---------------------------------------------------------*/



/*--------------- /services/order-service/types.ts ---------------*/
enum Status {
  SUCCESS,
  FAIL
}
export interface ListItem {
  name: string;
  age: number;
  status: Status;
  children: ListItem[];
}
export interface DetailResponse extends BaseResponse {
  data: {
    id: string;
    name: string;
    list: ListItem[]
  }
}

export type Data = DetailResponse['data']
export type List = DetailResponse['data']['list']
export type DataWithoutId = Omit<Data, 'id'>

/*---------------------------------------------------------*/



/*--------------- /services/order-services/api.ts ---------------*/
export function getDetail<Params extends { id: number }>(query: Params) {
  return sendRequest<DetailResponse, Params>({
    method: 'GET',
    url: '/spi/detail',
    query
  })
}
/*---------------------------------------------------------*/




/*--------------- 业务层使用 ---------------*/

const data = {
  list: [] as Data['list'],
  info: {} as Pick<Data, 'id' | 'name'>
}
getDetail({ id: 123 }).then(res => {
  res.data.id
  res.code
  console.log(res)
  data.list = res.data.list
  data.info.name = res.data.name
})
/*---------------------------------------------------------*/

`;return(ss,as)=>{const g=r("ClientOnly"),o=r("CodeEditor");return d(),u("div",null,[E,I,j,N,O,R,a(w),U,a(g,null,{default:q(()=>[a(m)]),_:1}),M,a(o,{value:i}),z,F,a(o,{value:e}),L,V,a(o,{value:t}),Z,K,J,a(o,{value:y}),$,G,H,a(o,{value:c}),W,a(S),a(o,{value:h}),X,a(k),Q])}}});export{ts as __pageData,cs as default};
