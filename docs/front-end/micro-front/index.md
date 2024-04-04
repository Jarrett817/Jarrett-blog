## qiankun 是怎么做 js 隔离的

sandbox，参数默认为 true，对于 js 隔离，默认使用 proxy 沙箱，有个文档上没写的隐藏参数 loose，区分使用 legacySandbox 和 proxySandbox

```ts
type QiankunSpecialOpts = {
  /**
   * @deprecated internal api, don't used it as normal, might be removed after next version
   */
  $$cacheLifecycleByAppName?: boolean;
  prefetch?: PrefetchStrategy;
  sandbox?:
    | boolean
    | {
        strictStyleIsolation?: boolean;
        experimentalStyleIsolation?: boolean;
        /**
         * @deprecated We use strict mode by default
         */
        loose?: boolean;
        /**
         * use speed sandbox mode, enabled by default from 2.9.0
         */
        speedy?: boolean;
        patchers?: Patcher[];
      };
  /*
    with singular mode, any app will wait to load until other apps are unmouting
    it is useful for the scenario that only one sub app shown at one time
  */
  singular?: boolean | ((app: LoadableApp<any>) => Promise<boolean>);
  /**
   * skip some scripts or links intercept, like JSONP
   */
  excludeAssetFilter?: (url: string) => boolean;

  globalContext?: typeof window;
};
```

```ts
const useLooseSandbox = typeof sandbox === 'object' && !!sandbox.loose;
// enable speedy mode by default
const speedySandbox = typeof sandbox === 'object' ? sandbox.speedy !== false : true;
let sandboxContainer;
if (sandbox) {
  sandboxContainer = createSandboxContainer(
    appInstanceId,
    // FIXME should use a strict sandbox logic while remount, see https://github.com/umijs/qiankun/issues/518
    initialAppWrapperGetter,
    scopedCSS,
    useLooseSandbox,
    excludeAssetFilter,
    global,
    speedySandbox
  );
  // 用沙箱的代理对象作为接下来使用的全局对象
  global = sandboxContainer.instance.proxy as typeof window;
  mountSandbox = sandboxContainer.mount;
  unmountSandbox = sandboxContainer.unmount;
}
```

qinakun 在创建沙箱时有以下代码

```ts
function createSandboxContainer(
  appName: string,
  elementGetter: () => HTMLElement | ShadowRoot,
  scopedCSS: boolean,
  useLooseSandbox?: boolean,
  excludeAssetFilter?: (url: string) => boolean,
  globalContext?: typeof window,
  speedySandBox?: boolean
) {
  let sandbox: SandBox;
  if (window.Proxy) {
    // 如果浏览器支持Proxy，使用LegacySandBox或者ProxySandbox
    sandbox = useLooseSandbox
      ? new LegacySandbox(appName, globalContext)
      : new ProxySandbox(appName, globalContext, { speedy: !!speedySandBox });
  } else {
    // 否则使用SnapshotSandBox
    sandbox = new SnapshotSandbox(appName);
  }

  // ...
}
```

### 快照沙箱

基于 diff 实现，只适用单例，且会污染 window

原理：将 window 的快照信息存到 windowSnapshot 中，将应用对于 window 属性的丢该记录到 modifyPropsMap 中，加载应用时用来还原，卸载应用时还原 window

### 代理沙箱

#### legacySandbox

单例，跟快照沙箱差不多，也会污染 window，但是性能比快照好

#### ProxySandbox

创建了 fakeWindow，set 操作都在 fakeWindow 上，取值优先从 fakeWindow 上取，不会污染 window，且支持多例

需要注意对于 window 的拷贝是浅拷贝，一些对象属性如 history，主子应用是共用的

## qiankun 是怎么做 css 隔离的

sandbox 参数，有两个是关于 css 的，strictStyleIsolation 默认 false、experimentalStyleIsolation 默认 false

strictStyleIsolation 为 true 时，用 shadowDom 隔离，shadowDom 的特点是：

- 影子节点内的导入样式不会影响外层
- mode 为 closed 时，外层无法获取影子节点内的元素
- 影子节点内的元素样式会继承其宿主元素的样式
- 影子节点内的元素无法被外层选择器选中

experimentalStyleIsolation 为 true 时，类似 vue 的 scoped 实现，通过属性选择器隔离
