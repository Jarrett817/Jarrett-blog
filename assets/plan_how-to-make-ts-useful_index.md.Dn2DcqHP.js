import{_ as i,a as d,b as B}from"./chunks/Zod.vue_vue_type_script_setup_true_lang.Cu3DpBfs.js";/* empty css                                                                       */import{a2 as u,G as g,a5 as a,ao as p,H as s,c as l,E as A}from"./chunks/framework.C1rSk1pR.js";import"./chunks/theme.DXZAdxYV.js";const D=p('<h1 id="_10-分钟速通-ts" tabindex="-1">10 分钟速通 TS <a class="header-anchor" href="#_10-分钟速通-ts" aria-label="Permalink to &quot;10 分钟速通 TS&quot;">​</a></h1><h2 id="ts-必知必会" tabindex="-1">TS 必知必会 <a class="header-anchor" href="#ts-必知必会" aria-label="Permalink to &quot;TS 必知必会&quot;">​</a></h2><p>用 20% 的知识解决 80% 的日常开发</p><h3 id="type-interface" tabindex="-1">type &amp; interface <a class="header-anchor" href="#type-interface" aria-label="Permalink to &quot;type &amp; interface&quot;">​</a></h3><ul><li>type 类型别名。适用于定义复杂的类型组合，如联合类型和交叉类型。<strong>当需要表示一个值可能是多种类型之一，或者一个类型需要同时满足多种类型的特征时，类型别名非常方便</strong></li><li>interface 接口。更适合用于定义对象的形状，尤其是在面向对象编程或者定义 API 的返回值和参数类型时。<strong>当需要描述一个类应该实现的契约（如具有哪些方法和属性）时，接口是很好的选择</strong></li></ul>',5),b=s("h3",{id:"条件类型",tabindex:"-1"},[l("条件类型 "),s("a",{class:"header-anchor",href:"#条件类型","aria-label":'Permalink to "条件类型"'},"​")],-1),h=s("p",null,"extends 既可以用于继承，也可用于类型约束",-1),m=s("h3",{id:"namespace",tabindex:"-1"},[l("namespace "),s("a",{class:"header-anchor",href:"#namespace","aria-label":'Permalink to "namespace"'},"​")],-1),f=s("p",null,"用于防止类型重命名冲突，比如微信小程序提供了全局类型的 namespace",-1),C=s("h3",{id:"泛型",tabindex:"-1"},[l("泛型 "),s("a",{class:"header-anchor",href:"#泛型","aria-label":'Permalink to "泛型"'},"​")],-1),S=s("p",null,"合理使用泛型是 ts 的精髓，能够更好的封装通用方法",-1),x=s("p",null,"学会泛型能够轻松阅读各类社区库的类型声明，良好的变量命名、类型声明很多时候可以替代文档",-1),T=s("h3",{id:"枚举-常量枚举",tabindex:"-1"},[l("枚举 & 常量枚举 "),s("a",{class:"header-anchor",href:"#枚举-常量枚举","aria-label":'Permalink to "枚举 & 常量枚举"'},"​")],-1),_=s("p",null,[l("业务代码中常有关于枚举的判断，比如"),s("code",null,"data.status===1"),l("，这可能分散在各个项目文件，并且缺失语义")],-1),v=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"建议"),s("p",null,"如果不想在业务变动时一处处地逐个修改枚举判断，建议所有使用常量或枚举而不是硬编码")],-1),w=p(`<p>编译结果如下</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#2AA198;">&#39;use strict&#39;</span><span style="color:#839496;">;</span></span>
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
<span class="line"><span style="color:#93A1A1;font-weight:bold;">let</span><span style="color:#268BD2;"> evenNumber</span><span style="color:#859900;">:</span><span style="color:#CB4B16;"> EvenNumbers</span><span style="color:#859900;"> =</span><span style="color:#D33682;"> 2</span><span style="color:#839496;">;</span></span></code></pre></div><p>此例中，<code>EvenNumbers</code> 是从 <code>AllNumbers</code> 联合类型中提取出偶数 2 和 4 后的类型。</p><h2 id="业务应用实践" tabindex="-1">业务应用实践 <a class="header-anchor" href="#业务应用实践" aria-label="Permalink to &quot;业务应用实践&quot;">​</a></h2>`,35),E=p('<p>以上是静态类型校验，那么如何过渡到动态类型校验？</p><h2 id="运行时数据校验" tabindex="-1">运行时数据校验 <a class="header-anchor" href="#运行时数据校验" aria-label="Permalink to &quot;运行时数据校验&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">解决什么问题</p><ul><li>后端服务互相调用，数据类型不确定</li><li>可能出现的属性空值</li><li>可能由类型导致的问题，比如 falsy 判断、字符串和数字相加</li></ul></div><h3 id="碰到的挑战" tabindex="-1">碰到的挑战 <a class="header-anchor" href="#碰到的挑战" aria-label="Permalink to &quot;碰到的挑战&quot;">​</a></h3><p><img src="'+B+'" alt="使用组件" loading="lazy"></p><p>经过调研，选用了 zod 库作为方案实现的核心库</p><p>该库较为成熟，社区活跃，原生支持 TS，且能够完全对标 TS 语法，一份 schema 同时生成校验器和 TS 静态类型，使用简单、直观、轻便</p>',7),P=p(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-a7vri" id="tab-JqKuEHW" checked><label data-title="/base-service/validator.ts" for="tab-JqKuEHW">/base-service/validator.ts</label><input type="radio" name="group-a7vri" id="tab-HZ7pUGn"><label data-title="/detail-service/api.ts" for="tab-HZ7pUGn">/detail-service/api.ts</label><input type="radio" name="group-a7vri" id="tab-W_2zU9w"><label data-title="/detail-service/validator.ts" for="tab-W_2zU9w">/detail-service/validator.ts</label><input type="radio" name="group-a7vri" id="tab-x0kJfF2"><label data-title="/detail-service/types.ts" for="tab-x0kJfF2">/detail-service/types.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#268BD2;"> safeString</span><span style="color:#859900;"> =</span><span style="color:#839496;"> () </span><span style="color:#93A1A1;font-weight:bold;">=&gt;</span></span>
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
<span class="line"><span style="color:#859900;">export</span><span style="color:#93A1A1;font-weight:bold;"> type</span><span style="color:#CB4B16;"> DataWithoutId</span><span style="color:#859900;"> =</span><span style="color:#CB4B16;"> Omit</span><span style="color:#839496;">&lt;</span><span style="color:#CB4B16;">Data</span><span style="color:#839496;">, </span><span style="color:#2AA198;">&#39;id&#39;</span><span style="color:#839496;">&gt;;</span></span></code></pre></div></div></div>`,1),z=JSON.parse('{"title":"10 分钟速通 TS","description":"","frontmatter":{},"headers":[],"relativePath":"plan/how-to-make-ts-useful/index.md","filePath":"plan/how-to-make-ts-useful/index.md","lastUpdated":1737179313000}'),k={name:"plan/how-to-make-ts-useful/index.md"},L=Object.assign(k,{setup(I){const o=`
type MyType<T> = T extends string ? T : '1';
const a: MyType<string> = 'test';
const b: MyType<number> = 1
`,e=`
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
`,t=`
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

`,c=`
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
`,r=`
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
`,y=`
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

`;return(q,N)=>{const n=u("CodeEditor");return A(),g("div",null,[D,a(n,{value:c}),b,h,a(n,{value:o}),m,f,a(n,{value:e}),C,S,x,a(n,{value:t}),T,_,v,a(n,{value:r}),w,a(i),a(n,{value:y}),E,a(d),P])}}});export{z as __pageData,L as default};
