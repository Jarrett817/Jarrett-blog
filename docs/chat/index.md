---
layout: false
title: chat
titleTemplate: ':title'
head:
  - - meta
    - name: viewport
      content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
  - - meta
    - charset: 'UTF-8'
---

<script setup>
import Chat from './index.vue'
</script>

<ClientOnly>
  <Chat />
</ClientOnly>
