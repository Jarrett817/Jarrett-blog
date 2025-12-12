# 基于 Quill.js 2 原理浅谈富文本编辑器设计思想

---

## 你会怎么设计一个富文本编辑器？

- 数据驱动 <!-- .element: class="fragment" data-fragment-index="1" -->
- 模块化架构可插拔 <!-- .element: class="fragment" data-fragment-index="2" -->
- 一致性 <!-- .element: class="fragment" data-fragment-index="3" -->

---

### 1. 符合直觉的树形结构

**思考：如何表示富文本内容？**

```json
// 我们可能想到的结构
{
  "type": "paragraph",
  "content": "Hello World",
  "format": { "bold": true }
}
```

---

**实际实现：**

```json
// Slate.js - 树形嵌套结构
[
  {
    "type": "paragraph",
    "children": [
      { "text": "Hello " },
      { "text": "World", "bold": true }
    ]
  }
]

// TipTap - 基于 ProseMirror 的 JSON 文档
{
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "Hello " },
        { "type": "text", "marks": [{ "type": "bold" }], "text": "World" }
      ]
    }
  ]
}
```

**为什么用树形？** <!-- .element: class="fragment" data-fragment-index="1" -->
易于序列化、版本控制、协同编辑 <!-- .element: class="fragment" data-fragment-index="2" -->

---

### 2. 模块化、可插拔

**思考：如何设计架构？**

- 插件化，按需加载

```ts
// 可能的设计
class Editor {
  plugins: Plugin[] = [];
  registerPlugin(plugin: Plugin) {
    this.plugins.push(plugin);
  }
}
```

---

**实际实现：**

```ts
// TipTap - 扩展系统
import { Editor } from '@tiptap/core';
import Bold from '@tiptap/extension-bold';
import Image from '@tiptap/extension-image';

const editor = new Editor({
  extensions: [Bold, Image.configure({ inline: true })]
});

// Quill - Blot 模块系统
import Quill from 'quill';
import { ImageBlot } from './blots/ImageBlot';
Quill.register(ImageBlot);

// wangEditor - 菜单和命令分离
editor.config.menus = ['bold', 'italic', 'image'];
```

**为什么模块化？** <!-- .element: class="fragment" data-fragment-index="1" -->
体积可控、功能灵活、易于扩展 <!-- .element: class="fragment" data-fragment-index="2" -->

---

### 3. 一致性

**思考：如何保证行为一致？**

- Web 端：浏览器差异
- 跨端：不同宿主环境（Web、移动端、桌面端）渲染差异

```ts
// 可能的设计
class Bold {
  // 统一操作接口，屏蔽底层差异
  format(type: string, value: any) {
    // 浏览器差异处理
    // 跨端渲染适配
  }
}
```

---

**实际实现：**

#### 跨浏览器一致性处理

```ts
// Quill - Parchment 抽象层统一 DOM 操作
class BoldBlot extends InlineBlot {
  static create() {
    // 统一创建 <strong>，不依赖浏览器默认行为
    return document.createElement('strong');
  }
  // 所有浏览器都使用相同的标签和结构
}

// Slate - 操作抽象 + 标准化选区
Transforms.setNodes(editor, { bold: true });
// 内部统一处理：
// 1. 标准化选区（normalizeSelection）
// 2. 统一 DOM 操作（不依赖 execCommand）
// 3. 处理浏览器差异（Chrome/Firefox/Safari）

// TipTap/ProseMirror - Schema 规范化
const schema = new Schema({
  marks: {
    bold: { parseDOM: [{ tag: 'strong' }, { tag: 'b' }] }
    // 统一将 <b> 和 <strong> 解析为 bold mark
  }
});
```

---

#### 跨端一致性处理

```ts
// TipTap - 统一编辑器接口，不同渲染器
// Web 端
import { useEditor } from '@tiptap/react';
const editor = useEditor({ extensions: [...] });

// React Native 端
import { useEditor } from '@tiptap/react-native';
const editor = useEditor({ extensions: [...] });
// 相同的 API，不同的底层渲染实现

// Slate - 自定义渲染器
<Slate editor={editor}>
  <Editable
    renderElement={renderElement}  // Web: DOM
    renderLeaf={renderLeaf}
  />
</Slate>

// React Native
<Slate editor={editor}>
  <Editable
    renderElement={renderElementRN}  // RN: View/Text
    renderLeaf={renderLeafRN}
  />
</Slate>
// 相同的数据模型，不同的渲染层

// Quill - 数据模型统一，渲染层可替换
const delta = editor.getContents(); // 获取 Delta
// Delta 可以在任何平台使用，只需实现对应的渲染器
```

---

---

### quill 是什么？

一个高度可定制的免费开源富文本编辑器 <!-- .element: class="fragment" data-fragment-index="1" -->

---

### 启用一个 quill 编辑器

```js
const quill = new Quill('#editor', {
  modules: { toolbar: true },
  theme: 'snow'
});
```

---

## 一、概述

### 核心设计理念

- **数据驱动**：Delta 数据模型
- **模块化架构**：易于扩展和定制
- **跨浏览器一致性**：Parchment 抽象层

---

## 架构概述

![](./images/quill-detail.jpeg)

---

## 二、Delta 数据模型

### 核心概念

**Delta = 极为紧凑的 JSON 数据结构**

```json
{
  "ops": [
    { "insert": "Hello " },
    { "insert": "World", "attributes": { "bold": true } },
    { "insert": "\n" }
  ]
}
```

---

## Delta 描述富文本

```json
{
  "ops": [
    { "insert": { "image": "https://quilljs.com/assets/images/logo.svg" } },
    { "insert": "\n" },
    { "insert": { "formula": "e=mc^2" } }
  ]
}
```

可以自定义任何富文本内容和格式，比如思维导图、3D 模型等等 <!-- .element: class="fragment" data-fragment-index="1" -->

---

## Delta 的三种操作类型

| 操作       | 说明         | 示例                                              |
| ---------- | ------------ | ------------------------------------------------- |
| **insert** | 插入内容     | `{ "insert": "text" }`                            |
| **retain** | 保留并格式化 | `{ "retain": 5, "attributes": { "bold": true } }` |
| **delete** | 删除内容     | `{ "delete": 3 }`                                 |

监听`text-change`事件，可以看到 quill 对用户每一步操作的定义 <!-- .element: class="fragment" data-fragment-index="1" -->

---

## Delta 格式与操作变换的精妙配合

Delta 记录的是`操作日志`而非`快照`

```javascript
// 插入文本“hello”并设置加粗
{ "ops": [{ "insert": "hello", "attributes": { "bold": true } }] }
// 删除3个字符
{ "ops": [{ "delete": 3 }] }
// 保留5个字符（无变更），再插入“world”
{ "ops": [{ "retain": 5 }, { "insert": "world" }] }
```

- 极高效的存储，100 次编辑日志远远小于 100 份数据/文档快照（快照型 TinyMCE、UEditor；操作日志型 Quill、Draft；状态驱动型 Tiptap、Slate） <!-- .element: class="fragment" data-fragment-index="1" -->
- 极低计算成本，反向 Delta，而非整个数据快照的重新加载 <!-- .element: class="fragment" data-fragment-index="2" -->
- 数据不可变，每一步操作都是增量，天然对协同编辑友好 <!-- .element: class="fragment" data-fragment-index="3" -->

---

## 三、Parchment 文档模型

### 架构思想

- **与 DOM 平行的抽象树**
- **Blot 类型系统**（类似 DOM Node）
- **跨浏览器一致性**

---

## Blot 类型层次

![](./images/parchment.jpeg)

---

## Blot 生命周期

```javascript
class CustomBlot extends Parchment.Inline {
  static tagName = 'DIV';
  static create(value) {
    /* 1. 自定义创建 DOM */
  }

  optimize() {
    /* 4. 优化合并 */
  }

  attach() {
    /* 新建时触发 */
  }

  detach() {
    /* 删除时触发 */
  }
}
```

---

## 关键 Blot 类型

#### ScrollBlot（文档根）

- 对应 `<div class="ql-editor">`
- 管理整个文档的 Delta ↔ DOM 转换

#### BlockBlot（块级）

- 段落、标题等块级元素
- 每个块以 `\n` 结尾

---

## 关键 Blot 类型（续）

#### InlineBlot（内联格式）

- 加粗、斜体、颜色等文本格式
- 可嵌套

#### EmbedBlot（嵌入）

- 图片、视频等不可编辑内容
- 在 Delta 中表示为对象：`{ "insert": { "image": "url" } }`

---

## Parchment 的优化机制

**节点合并**

```html
<!-- 优化前 -->
<p><strong>Hello</strong><strong>World</strong></p>

<!-- 优化后 -->
<p><strong>HelloWorld</strong></p>
```

**格式规范化**

- `<b>` → `<strong>`
- `<i>` → `<em>`

---

## 四、实现原理

### 编辑流程

#### 用户输入 → Delta

```
DOM 变化 → MutationObserver → 计算 Delta → 触发事件
```

#### Delta → DOM 渲染

```
Delta → Blot 操作 → 计算更新范围 → 最小化 DOM 更新 → 优化
```

---

## MutationObserver 机制

```javascript
// 监听 DOM 变化
observer.observe(root, {
  childList: true,
  subtree: true,
  characterData: true
});

// 双向同步
DOM 变化 → 计算 Delta → 更新内部状态
```

---

## 撤销/重做实现

```javascript
class History {
  record(change, oldDelta) {
    this.stack.push({
      undo: change.invert(oldDelta), // 反向操作
      redo: change
    });
  }

  undo() {
    this.quill.updateContents(item.undo);
  }
}
```

**原理**：基于 Delta 的不可变性，保存操作历史

---

## 五、定制逻辑

### 自定义 Blot 示例

```javascript
class ImageBlot extends Parchment.EmbedBlot {
  static blotName = 'image';
  static tagName = 'img';

  static create(value) {
    const node = super.create(value);
    const wrapper = document.createElement('div');
    wrapper.appendChild(node);
    wrapper.style.display = 'inline-block';
    wrapper.style.maxWidth = '100%';
    wrapper.style.verticalAlign = 'top';
    return wrapper;
  }

  value(domNode) {
    return domNode.src;
  }
}

Parchment.register(ImageBlot);
```

---

## 自定义 Blot 关键步骤

1. 继承对应的 Blot 基类 <!-- .element: class="fragment" data-fragment-index="1" -->
2. 定义 `blotName` 和 `tagName` <!-- .element: class="fragment" data-fragment-index="2" -->
3. 实现 `create`、`value` <!-- .element: class="fragment" data-fragment-index="3" -->
4. 注册 Blot <!-- .element: class="fragment" data-fragment-index="4" -->

---

## 自定义工具栏

```javascript
// 方式1：配置工具栏容器和处理器
const quill = new Quill('#editor', {
  modules: {
    toolbar: {
      container: '#toolbar', // 自定义工具栏容器
      handlers: {
        custom: function () {
          const range = this.quill.getSelection();
          this.quill.formatText(range, 'custom', value);
        }
      }
    }
  }
});

// 方式2：HTML 定义工具栏，使用 ql-{format} 类名
// <div id="toolbar">
//   <button class="ql-bold"></button>
//   <button class="ql-italic"></button>
//   <button class="ql-custom"></button>
// </div>

// 方式3：数组配置工具栏
const quill = new Quill('#editor', {
  modules: {
    toolbar: [
      ['bold', 'italic'],
      [{ header: [1, 2, 3, false] }],
      ['custom'] // 自定义格式
    ]
  }
});
```

---

## 自定义模块

```javascript
class CustomModule {
  constructor(quill, options) {
    this.quill.on('text-change', this.onTextChange);
    this.quill.on('selection-change', this.onSelectionChange);
  }
}

// 使用
const quill = new Quill('#editor', {
  modules: {
    custom: {
      /* 配置 */
    }
  }
});
```

---

## 自定义快捷键

```javascript
const Keyboard = Quill.import('modules/keyboard');

Keyboard.addBinding({
  key: 'B',
  shortKey: true,
  handler: function (range, context) {
    this.quill.format('bold', !context.format.bold);
  }
});
```

---

## 自定义粘贴处理

```javascript
class CustomClipboard extends Clipboard {
  onPaste(e) {
    const html = e.clipboardData.getData('text/html');
    const cleanedHTML = this.cleanHTML(html); // 清理
    const delta = this.quill.clipboard.convert(cleanedHTML);
    this.quill.updateContents(delta, 'user');
  }
}

Quill.register('modules/clipboard', CustomClipboard, true);
```

---

## 六、最佳实践

### 数据结构设计

✅ **优先使用 Delta**

- 存储、传输都用 Delta 格式
- 避免直接操作 DOM

✅ **保持不可变性**

- 禁止直接修改 Delta 对象
- 使用 `compose`、`transform` 等方法

---

## 七、总结

### 核心优势

1. **数据驱动**：Delta 作为单一数据源
2. **抽象层**：Parchment 提供跨浏览器一致性
3. **模块化**：易于扩展和定制
4. **性能优化**：最小化 DOM 操作

---

## 关键要点

- **Delta**：不可变的操作序列，支持协同编辑
- **Parchment**：与 DOM 平行的抽象树，提供类型系统
- **双向同步**：MutationObserver 实现 DOM ↔ Delta 同步
- **扩展性**：通过 Blot、Module、Theme 实现定制

---

## 应用场景

- 富文本编辑器
- 协同编辑系统
- 内容管理系统
- 在线文档编辑
