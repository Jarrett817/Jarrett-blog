---
title: html
desc: 《JavaScript设计模式》、《大话设计模式》笔记
keywords: 设计模式、笔记
date: 2020-02-17 01:01:00
cover: https://cdn.jsdelivr.net/gh/chengpeiquan/assets-storage/img/2020/02/1.jpg
---

# html

## 头部元素

```html
<title>可以添加文档标题
<meta>
```

- charset 指定字符集
- name 制定 meta 元素的类型，说明了包含的信息
- content 指定了实际的元数据内容

## a 标签

利用`<a/>`标签进行下载时，建议写明文件的后缀，浏览器会将 download 中的最后一个`.`符号识别为文件后缀，如果文件名中含有`.`会导致下载的文件后缀不正确。

需要注意的是，`/`、`\`会被浏览器自动转换成`_`，`.`则不会转换
