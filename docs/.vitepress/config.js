module.exports = {
  lang: 'en-US',
  title: '🏠 JarrettBlog',
  description: '前端学习笔记',
  base: '/jarrett-blog/',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ]
  ],
  themeConfig: {
    repo: 'https://github.com/Jarrett817/jarrett-blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress'
    // },
    nav: [
      { text: '✏️ 前端学习笔记', link: '/front-end/html/', activeMatch: '^/front-end/' },
      {
        text: '⛰️ 计算机基础',
        link: '/computer-basic/design-pattern/',
        activeMatch: '^/computer-basic/'
      },
      {
        text: '🔧 工具包',
        link: '/tools/slides',
        activeMatch: '^/packages/'
      }
    ],

    sidebar: {
      '/front-end/': getFrontEndSidebar(),
      '/computer-basic/': getComputerBasicSidebar(),
      '/packages/': getPackagesSidebar()
    }
  }
};

function getFrontEndSidebar() {
  return [
    {
      text: 'HTML',
      link: '/front-end/html/'
    },
    {
      text: 'CSS',
      link: '/front-end/css/'
    },
    { text: 'JS', link: '/front-end/js/' },
    { text: 'TS', link: '/front-end/ts/' },
    { text: '浏览器', link: '/front-end/browser/' },
    { text: 'vue', link: '/front-end/vue/' },
    { text: 'nodejs', link: '/front-end/nodejs/' },
    { text: 'git', link: '/front-end/git/' },
    { text: 'canvas', link: '/front-end/canvas/' }
  ];
}

function getComputerBasicSidebar() {
  return [
    {
      text: '设计模式',
      link: '/computer-basic/design-pattern/'
    },
    {
      text: '计算机网络',
      link: '/computer-basic/internet/'
    },
    {
      text: '数据结构与算法',
      link: '/computer-basic/fucking-arithmetic/'
    }
  ];
}

function getPackagesSidebar() {
  return [
    {
      text: 'ppt生成器',
      link: '/packages/ppt/'
    }
  ];
}
