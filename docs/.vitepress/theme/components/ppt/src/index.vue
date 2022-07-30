<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/sky.css';
import TurndownService from 'turndown';
import Reveal from 'reveal.js';
import RevealHighLight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

const themes = [
  'black',
  'white',
  'blue',
  'league',
  'beige',
  'sky',
  'night',
  'serif',
  'simple',
  'solarized',
  'blood',
  'moon'
];
let turndownService = new TurndownService({
  options: {
    bulletListMarker: '-',
    hr: '---',
    emDelimiter: '*'
  }
});

const html = ref('');

turndownService.addRule('title-formatter', {
  filter: ['h1', 'h2', 'h3', 'h4'],
  replacement: function (content, node, options) {
    const map = { H1: '#', H2: '##', H3: '###', H4: '####' };
    let res = '';
    res = content.replace(/^\[#\]/, map[node.tagName]).replace(/\(#.*\)/, '');
    if (
      textContent.children[0].id === res.slice(-textContent.children[0].id.length) ||
      textContent.children[0].id === res.slice(-textContent.children[0].id.length).replace(' ', '-')
    )
      return res;
    res = `\n---\n${res}`;
    return res;
  }
});

const init = async () => {
  let deck = new Reveal({
    plugins: [Markdown, RevealHighLight]
  });
  deck.initialize();
};
onMounted(() => {
  console.log(document.querySelector('.content-container')?.children);
  const textContent = document.querySelector('.content-container')?.children[0]?.innerText;

  const md = turndownService.turndown(textContent);
  html.value = md;

  init();
});
</script>

<template>
  <div class="reveal">
    <div class="slides">
      <section data-markdown data-separator="---" data-separator-vertical="^\n--\n$">
        <textarea data-template>
           {{ html }}
          </textarea
        >
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
