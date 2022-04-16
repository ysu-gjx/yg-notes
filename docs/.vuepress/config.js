module.exports = {
  base: '/yg-notes/',
  dest: 'dist',
  title: 'RE 的学习小站',
  description: '对 Javascript 学习的记录总结',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav: [
      { text: 'JavaScript', link: '/jsbase/chapter1/' },
      {text: 'CSS', link: '/css/chapter1/'},
	    {text: 'Compiler', link: '/compiler/chapter1/'},
      {text: 'vite小册', link: '/vite/chapter1/'}
    ],
    sidebar: {
      '/jsbase/': [
        {
          title: 'JS数据类型及typeof检测',
          collapsable: false,
          children: [
            'chapter1/',
          ]
        },
        {
          title: 'test2',
          collapsable: false,
          children: [
            'chapter2/2',
            'chapter2/3',
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS 常用技巧',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/',
            'chapter1/CSS3GaoJie'
          ]
        },
        {
          title: 'CSS 选择器',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter2/',
            'chapter2/NAME'
          ]
        },
        {
          title: '变量和预处理器',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter3/',
            'chapter3/LESS.md'
          ]
        }
      ],
      '/compiler/': [
        {
          title: 'compiler 编辑器',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/'
          ]
        }
      ],
      '/vite/': [
        {
          title: 'vite 小册',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/',
            'chapter1/quick-start'
          ]
        },
        {
          title: 'vite-project-framework',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            'chapter2/',
            'chapter2/lint'
          ]
        }
      ]
    }
  }
}