<script setup>
import { onMounted, ref } from 'vue';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/sky.css';
import TurndownService from 'turndown';

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
const textContent = document.querySelector('.content').children[0];
turndownService.addRule('title-formatter', {
  filter: ['h1', 'h2', 'h3', 'h4'],
  replacement: function (content, node, options) {
    const map = { H1: '#', H2: '##', H3: '###', H4: '####' };
    let res = '';
    console.log('content', content);
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
const md = turndownService.turndown(textContent);
html.value = md;
let Reveal = null;
let RevealHighLight = null;
let Markdown = null;
const init = async () => {
  !Reveal && (Reveal = (await import('reveal.js')).default);
  !RevealHighLight &&
    (RevealHighLight = await import('reveal.js/plugin/highlight/highlight.esm.js').default);
  !Markdown && (Markdown = await import('reveal.js/plugin/markdown/markdown.esm.js').default);
  let deck = new Reveal({
    plugins: [Markdown, RevealHighLight]
  });
  deck.initialize();
};
onMounted(() => {
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
