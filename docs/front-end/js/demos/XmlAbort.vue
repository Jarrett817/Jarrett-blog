<template>
  <n-button @click="sendRequest">阻止xml请求</n-button>
</template>

<script setup lang="ts">
let xhr: XMLHttpRequest = new XMLHttpRequest();
const hadnler = e => {
  alert(e);
  console.log(e);
};
xhr.addEventListener('abort', hadnler);
xhr.addEventListener('error', hadnler);
xhr.addEventListener('load', hadnler);
const sendRequest = () => {
  const method = 'GET',
    url = 'https://test';

  xhr.open(method, url, true);
  xhr.send();
  xhr && xhr.abort();
};
</script>
