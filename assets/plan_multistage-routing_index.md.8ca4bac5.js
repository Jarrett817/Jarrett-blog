import{_ as e,c as r,o as a,a as o}from"./app.cd846d8f.js";const b=JSON.parse('{"title":"\u591A\u7EA7\u8DEF\u7531\u8DF3\u8F6C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u75DB\u70B9","slug":"\u75DB\u70B9"},{"level":2,"title":"\u76F8\u5173\u7279\u6027","slug":"\u76F8\u5173\u7279\u6027"},{"level":2,"title":"\u9700\u6C42\u63CF\u8FF0","slug":"\u9700\u6C42\u63CF\u8FF0"},{"level":2,"title":"\u65B9\u6848","slug":"\u65B9\u6848"},{"level":3,"title":"\u65B9\u6848\u4E00","slug":"\u65B9\u6848\u4E00"},{"level":3,"title":"\u65B9\u6848\u4E8C","slug":"\u65B9\u6848\u4E8C"},{"level":3,"title":"\u65B9\u6848\u4E09","slug":"\u65B9\u6848\u4E09"},{"level":3,"title":"\u65B9\u6848\u56DB","slug":"\u65B9\u6848\u56DB"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"plan/multistage-routing/index.md","lastUpdated":1662106898000}'),l={name:"plan/multistage-routing/index.md"},s=o(`<h1 id="\u591A\u7EA7\u8DEF\u7531\u8DF3\u8F6C" tabindex="-1">\u591A\u7EA7\u8DEF\u7531\u8DF3\u8F6C <a class="header-anchor" href="#\u591A\u7EA7\u8DEF\u7531\u8DF3\u8F6C" aria-hidden="true">#</a></h1><h2 id="\u75DB\u70B9" tabindex="-1">\u75DB\u70B9 <a class="header-anchor" href="#\u75DB\u70B9" aria-hidden="true">#</a></h2><p>\u5728\u4F7F\u7528 vue-router \u8FDB\u884C\u4E2D\u540E\u53F0\u9879\u76EE\u5F00\u53D1\u65F6\uFF0C\u5B58\u5728\u4EE5\u4E0B\u75DB\u70B9</p><ol><li>router.push \u5230\u4E00\u4E2A\u65B0\u9875\u9762\uFF0C\u9700\u8981\u6709\u8FD4\u56DE\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u64CD\u4F5C\u53EF\u80FD\u4F1A\u6709\u53C2\u6570\u643A\u5E26\uFF0C\u5E76\u4E14\u9700\u8981\u663E\u793A\u4E0A\u7EA7\u9875\u9762\u540D\u79F0\u53CA\u5F53\u524D\u9875\u9762\u540D\u79F0</li><li>\u591A\u7EA7\u9762\u5305\u5C51\u7684\u8DF3\u8F6C\uFF0C\u8003\u8651\u53C2\u6570\u643A\u5E26</li><li>\u57FA\u4E8E qiankun \u7B49\u7684\u5FAE\u5E94\u7528\u7684\u4E3B\u5B50\u8DF3\u8F6C\u3001\u5B50\u5B50\u8DF3\u8F6C\uFF0C\u65B0\u5F00 tab \u7684\u95EE\u9898</li><li>\u51FA\u4E8E\u5B89\u5168\u95EE\u9898\u6D4F\u89C8\u5668\u4E0D\u63D0\u4F9B\u4E0A\u4E00\u4E2A\u5386\u53F2\u8BB0\u5F55\u7684\u63A5\u53E3</li></ol><h2 id="\u76F8\u5173\u7279\u6027" tabindex="-1">\u76F8\u5173\u7279\u6027 <a class="header-anchor" href="#\u76F8\u5173\u7279\u6027" aria-hidden="true">#</a></h2><ul><li><code>http.referer</code> \u53EA\u80FD\u591F\u83B7\u53D6\u9664\u4E86 <code>hash</code> \u4E4B\u5916\u7684 <code>url</code></li><li><code>document.referrer</code> \u884C\u4E3A\u4E0E <code>http.referer</code> \u4E0D\u4E00\u81F4\uFF0C\u901A\u8FC7 a \u6807\u7B7E\u8DF3\u8F6C\u53EF\u4EE5\u83B7\u53D6\u9664\u4E86 <code>hash</code> \u5916\u7684\u5B8C\u6574 <code>url</code>\uFF0C\u94FE\u63A5\u76F4\u63A5\u70B9\u5F00\u6216\u8005\u7C98\u8D34\u7F51\u5740\u8FDB\u5165\u90FD\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u7ECF\u6D4B\u8BD5\uFF0C<code>push</code> \u7B49\u65B9\u6CD5\u65E0\u6CD5\u6539\u53D8 <code>document</code>.<code>referrer</code>\uFF0C\u4F46\u662F\u53EF\u4EE5\u6539\u53D8 <code>http.referer</code>\uFF0C\u4E0D\u5305\u62EC <code>hash</code></li><li><code>history</code> \u5386\u53F2\u6808\uFF0C<code>router.push</code> \u5373 <code>history.pushState</code> \u538B\u6808\uFF0C<code>router.replace</code> \u5373 <code>history.replaceState</code> \u4FEE\u6539\u5F53\u524D\u8BB0\u5F55\uFF0C<code>a</code> \u6807\u7B7E\u7684\u8DF3\u8F6C\u4E0D\u4F1A\u538B\u6808\uFF0C<code>vue-router</code> \u7684\u91CD\u5B9A\u5411\u4E5F\u4E0D\u4F1A\u538B\u6808</li><li><code>back()</code>\u548C <code>go(-1)</code>\uFF0Cmdn \u63CF\u8FF0\u4E3A\u4E00\u81F4\uFF0C\u90FD\u7B49\u4E8E\u70B9\u51FB\u6D4F\u89C8\u5668\u7684\u56DE\u9000\uFF0C\u4F46\u662F\u5728\u4E00\u4E9B\u8BF4\u6CD5\u4E2D\u6709\u4EBA\u63D0\u51FA <code>go(-1)</code>\u4F1A\u91CD\u8F7D\u9875\u9762\uFF0C<code>back</code> \u4E0D\u4F1A\u91CD\u8F7D</li><li><code>back/forward cache</code>\u3002\u6D4F\u89C8\u5668\u7684\u524D\u8FDB/\u56DE\u9000\u7F13\u5B58\uFF0C\u53EF\u4EE5\u7F13\u5B58\u6D4F\u89C8\u8FC7\u7684\u9875\u9762\u5FEB\u7167\uFF08\u5305\u62EC <code>JavaScript</code> \u5806\uFF09\uFF0C\u4F7F\u7528 <code>bfcache</code> \u6062\u590D\u7684\u91CD\u590D\u8BBF\u95EE\u603B\u662F\u6BD4\u975E <code>bfcache</code> \u5BFC\u822A\u66F4\u5FEB</li></ul><h2 id="\u9700\u6C42\u63CF\u8FF0" tabindex="-1">\u9700\u6C42\u63CF\u8FF0 <a class="header-anchor" href="#\u9700\u6C42\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u5728\u9700\u8981\u8FD4\u56DE\u6309\u94AE\u7684\u9875\u9762\uFF0C\u83B7\u53D6\u4E0A\u4E00\u4E2A\u8DEF\u7531\u7684\u8DEF\u7531\u4FE1\u606F\u53CA\u6B63\u786E\u7684\u8DEF\u7531\u8FD4\u56DE</p><h2 id="\u65B9\u6848" tabindex="-1">\u65B9\u6848 <a class="header-anchor" href="#\u65B9\u6848" aria-hidden="true">#</a></h2><h3 id="\u65B9\u6848\u4E00" tabindex="-1">\u65B9\u6848\u4E00 <a class="header-anchor" href="#\u65B9\u6848\u4E00" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u91C7\u7528 <code>sessionStorage</code>\uFF0C\u8BB0\u5F55\u4E0A\u4E00\u9875\u7684\u8DEF\u7531\u4FE1\u606F</p><p>\u5168\u5C40\u6DF7\u5165\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B\uFF0C\u8BB0\u5F55\u79BB\u5F00\u9875\u9762\u7684\u8DEF\u7531\u4FE1\u606F\uFF0C\u5982</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beforeEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">from</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u540C\u65F6\u63D0\u4F9B\u4E00\u4E2A\u8FD4\u56DE\u65B9\u6CD5\uFF0C\u83B7\u53D6\u7F13\u5B58\u7684\u8DEF\u7531\u4FE1\u606F\u5E76\u4F7F\u7528 <code>push</code> \u8FD4\u56DE</p><h4 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h4><ul><li>\u81EA\u52A8\u8BB0\u5F55\uFF0C\u7528\u6237\u65E0\u9700\u5173\u6CE8\u53C2\u6570\u7684\u4F20\u9012</li></ul><h4 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h4><ul><li>\u4EC5\u9650\u4E24\u7EA7\u8DF3\u8F6C\u7684\u7B80\u5355\u573A\u666F\uFF0C\u591A\u7EA7\u8DF3\u8F6C\u60C5\u51B5\u4E0B\uFF0C\u6765\u6E90\u8DEF\u7531\u4F1A\u53CD\u8C03</li></ul><h3 id="\u65B9\u6848\u4E8C" tabindex="-1">\u65B9\u6848\u4E8C <a class="header-anchor" href="#\u65B9\u6848\u4E8C" aria-hidden="true">#</a></h3><p>\u540C\u6837\u91C7\u7528 <code>sessionStorage</code>\u5B58\u50A8\u8DEF\u7531\u4FE1\u606F</p><p>\u5168\u5C40\u6DF7\u5165 <code>beforeRouteLeave</code> \u6216\u8005<code>beforeRouteEnter</code>\u65B9\u6CD5\uFF0C\u8BB0\u5F55\u79BB\u5F00\u9875\u9762\u7684\u8DEF\u7531\u4FE1\u606F</p><h4 id="\u4F18\u70B9-1" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a></h4><ul><li>\u4EC5\u5728\u8DEF\u7531\u8868\u91CC\u5B9A\u4E49\u7684\u7EC4\u4EF6\u4F1A\u89E6\u53D1\uFF0C\u4E14\u53EF\u4EE5\u901A\u8FC7\u5728 meta \u91CC\u5B9A\u4E49\u5C5E\u6027\uFF0C\u505A\u5230\u7CBE\u51C6\u63A7\u5236\u5BF9\u7F13\u5B58\u7684\u5B58\u53D6</li></ul><h4 id="\u7F3A\u70B9-1" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a></h4><ul><li>\u540C\u6837\u53EA\u9002\u7528\u4E8E\u4E24\u7EA7\u8DF3\u8F6C\u7684\u7B80\u5355\u573A\u666F</li></ul><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h3 id="\u65B9\u6848\u4E09" tabindex="-1">\u65B9\u6848\u4E09 <a class="header-anchor" href="#\u65B9\u6848\u4E09" aria-hidden="true">#</a></h3><p><code>document.referrer</code>\u867D\u7136\u4E0D\u80FD\u505A\u5230\u83B7\u53D6<code>hash</code>\uFF0C\u4F46\u662F\u53EF\u4EE5\u5224\u65AD\u4E0E\u5F53\u524D\u9875\u662F\u5426\u540C\u6E90</p><p>\u7ED3\u5408\u601D\u8DEF\u4E8C\uFF0C\u5C06\u4E0A\u4E00\u9875\u7684\u8DEF\u7531\u4FE1\u606F\u5B58\u5728<code>session</code></p><p>\u5728\u786E\u4FDD\u9879\u76EE\u5185\u5408\u7406\u4F7F\u7528<code>push\u3001replace</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7<code>referrer</code>\u5224\u65AD\uFF0C\u5982\u679C\u4E0A\u4E00\u9875\u4E0E\u5F53\u524D\u9875\u540C\u6E90\uFF0C\u76F4\u63A5\u8C03\u7528 <code>router.back()</code>\uFF0C<code>router.go(-1)</code></p><p>\u5426\u5219<code>referrer</code>\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u6B64\u65F6<code>replace</code>\u5230\u7F13\u5B58\u4FE1\u606F\u4E2D\u7684\u8DEF\u7531\uFF0C</p><h4 id="\u4F18\u70B9-2" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-2" aria-hidden="true">#</a></h4><ul><li>\u7406\u8BBA\u4E0A\u4F53\u9A8C\u4F1A\u66F4\u597D\uFF0C\u53EF\u4EE5\u4FDD\u7559\u6D4F\u89C8\u5668\u7684\u539F\u751F\u884C\u4E3A\uFF0C\u5728\u6761\u4EF6\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u652F\u6301<code>back/forward Cache</code>\uFF0C\u53EF\u4EE5\u7F13\u5B58\u6D4F\u89C8\u8FC7\u7684\u9875\u9762\u5FEB\u7167\uFF08\u5305\u62EC <code>JavaScript</code> \u5806\uFF09\uFF0C\u4F7F\u7528 <code>bfcache</code> \u6062\u590D\u7684\u91CD\u590D\u8BBF\u95EE\u603B\u662F\u6BD4\u975E <code>bfcache</code> \u5BFC\u822A\u66F4\u5FEB</li><li>\u80FD\u591F\u4FDD\u8BC1<code>history</code>\u6808\u7684\u987A\u5E8F\uFF0C\u65E0\u8BBA\u662F\u4F7F\u7528 <code>push</code>\u8FD8\u662F <code>replace</code> \u56DE\u9000\uFF0C\u90FD\u4F1A\u5BFC\u81F4 <code>history</code> \u6808\u4E0D\u6B63\u786E</li></ul><h4 id="\u7F3A\u70B9-2" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-2" aria-hidden="true">#</a></h4><ul><li>\u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u65E0\u6CD5\u83B7\u53D6\u5230\u771F\u6B63\u5B8C\u6574\u7684 <code>referrer</code> \u5730\u5740\uFF0C\u56E0\u6B64\u8FD8\u662F\u9700\u8981\u914D\u5408\u8DEF\u7531\u4FE1\u606F\u7F13\u5B58</li></ul><h3 id="\u65B9\u6848\u56DB" tabindex="-1">\u65B9\u6848\u56DB <a class="header-anchor" href="#\u65B9\u6848\u56DB" aria-hidden="true">#</a></h3><p>\u81EA\u884C\u7EF4\u62A4\u4E00\u4E2A<code>history</code>\u6808</p><ul><li><a href="https://github.com/zack24q/vue-navigation" target="_blank" rel="noopener noreferrer">vue-navigation</a></li><li><a href="https://github.com/hezhongfeng/vue-page-stack" target="_blank" rel="noopener noreferrer">vue-page-stack</a></li></ul><p>\u4EE5\u4E0A\u4E24\u4E2A\u5E93\u4E3B\u8981\u662F\u9488\u5BF9<code>keep-alive</code>\u7F13\u5B58\u9875\u9762\uFF0C\u6CA1\u6709\u53BB\u5B58\u50A8\u4E0A\u9875\u7684\u8DEF\u7531\u4FE1\u606F</p><h4 id="\u4F18\u70B9-3" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-3" aria-hidden="true">#</a></h4><ul><li>\u7EF4\u62A4\u4E86\u4E00\u4E2A\u8BBF\u95EE\u5386\u53F2\u6808\uFF0C\u4E0E\u6D4F\u89C8\u5668\u7684 back/forward \u540C\u6B65</li><li>\u505A\u4E86 keep-alive \u7F13\u5B58</li></ul><h4 id="\u7F3A\u70B9-3" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-3" aria-hidden="true">#</a></h4><ul><li>\u6CA1\u6709\u5B58\u50A8\u76F8\u5173\u7684\u8DEF\u7531\u4FE1\u606F\uFF0C\u9700\u8981\u4FEE\u6539\u4F7F\u7528\uFF0C\u53D6\u6808\u9876\u7684 path \u53BB\u8DEF\u7531\u8868\u4E2D\u5339\u914D</li><li>\u6CA1\u6709\u5BF9 back \u884C\u4E3A\u505A\u9650\u5236\uFF0C\u53EF\u4EE5\u7ED3\u5408 referrer</li><li>\u6BCF\u6B21\u7684 push/replace \u90FD\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u7F13\u5B58\u5B58\u53D6\u64CD\u4F5C</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/referrer" target="_blank" rel="noopener noreferrer">referrer mdn</a></li><li><a href="https://www.zhangxinxu.com/wordpress/2017/02/js-page-url-document-referrer/" target="_blank" rel="noopener noreferrer">referrer \u5F20\u946B\u65ED</a></li><li><a href="https://www.ruanyifeng.com/blog/2019/06/http-referer.html" target="_blank" rel="noopener noreferrer">http-referer \u962E\u4E00\u5CF0</a></li><li><a href="https://www.zhangxinxu.com/wordpress/2022/05/history-scrollrestoration/" target="_blank" rel="noopener noreferrer">\u6D4F\u89C8\u5668\u6EDA\u52A8\u4FDD\u5B58\u884C\u4E3A \u5F20\u946B\u65ED</a></li><li><a href="https://stackoverflow.com/questions/3528324/how-to-get-the-previous-url-in-javascript" target="_blank" rel="noopener noreferrer">stackoverflow \u5982\u4F55\u83B7\u53D6\u4E0A\u4E00\u4E2A url</a></li><li><a href="https://github.com/vuejs/vue-router/issues/3617" target="_blank" rel="noopener noreferrer">vuejs issue-\u9762\u5305\u5C51</a></li><li><a href="https://stackoverflow.com/questions/36447977/how-to-get-previous-url-including-hash-fragment-using-javascript" target="_blank" rel="noopener noreferrer">stackoverflow \u83B7\u53D6\u4E0A\u4E00\u4E2A\u9875\u9762\u7684 url\uFF0C\u5305\u62EC hash</a></li><li><a href="https://stackoverflow.com/questions/39288915/detect-previous-path-in-react-router" target="_blank" rel="noopener noreferrer">stackoverflow \u5728 react-router \u4E2D\u68C0\u6D4B\u4E0A\u4E00\u4E2A\u8DEF\u5F84</a></li><li><a href="https://developer.chrome.com/docs/devtools/application/back-forward-cac" target="_blank" rel="noopener noreferrer">\u8C37\u6B4C\u5F00\u53D1\u8005\u6587\u6863 back/forward \u7F13\u5B58</a></li><li><a href="https://developer.chrome.com/blog/referrer-policy-new-chrome-default/" target="_blank" rel="noopener noreferrer">\u8C37\u6B4C\u5F00\u53D1\u8005\u6587\u6863\uFF0C\u8BF7\u6C42\u5934 referrer</a></li><li><a href="https://web.dev/i18n/zh/referrer-best-practices/#%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0-csrf-%E4%BF%9D%E6%8A%A4" target="_blank" rel="noopener noreferrer">\u8C37\u6B4C\u5F00\u53D1\u8005\u6587\u6863 referer \u6700\u4F73\u5B9E\u8DF5</a></li><li><a href="https://web.dev/bfcache/?utm_source=devtools#never-use-the-unload-event" target="_blank" rel="noopener noreferrer">\u6C38\u8FDC\u4E0D\u8981\u4F7F\u7528 unload \u4E8B\u4EF6</a></li><li><a href="https://github.com/vuejs/vue/issues/8109" target="_blank" rel="noopener noreferrer">vue issue bfCache \u5931\u6548</a></li><li><a href="https://github.com/vercel/next.js/issues/4136" target="_blank" rel="noopener noreferrer">next.js issue \u8BA8\u8BBA \u4E00</a></li><li><a href="https://github.com/vercel/next.js/discussions/36723" target="_blank" rel="noopener noreferrer">next.js issue \u8BA8\u8BBA \u4E8C</a></li></ul>`,45),n=[s];function t(c,d,i,h,p,u){return a(),r("div",null,n)}var g=e(l,[["render",t]]);export{b as __pageData,g as default};