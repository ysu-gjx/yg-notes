module.exports = {
  base: '/yg-notes/',
  dest: 'dist',
  title: 'RE 的学习小站',
  description: '对各种学习内容的记录总结',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav: [
      { text: 'JavaScript',
        items: [
          {text: 'Javascript',link: '/jsbase/chapter1/'},
          {text: 'axios', link: '/axios/chapter1/'}
        ]
      },
      {text: 'CSS', link: '/css/chapter1/'},
      {
        text: 'vue',
        items: [
          {text: 'vue3', link: '/vue3/chapter1/'}
        ]
      },
      {
        text: 'books',
        items: [
          {text: 'vue.js 设计与实现', link: '/books/vuejs/chapter1/'}
        ]
      },
      {
        text: 'compile', 
        ariaLabel: 'compile Menu',
        items: [
          {text: 'Compiler', link: '/compiler/chapter1/'},
          {text: 'vite小册', link: '/vite/chapter1/'}
        ]
      },
      {
        text: 'algorithm', 
        ariaLabel: 'algorithm Menu',
        items: [
          {text: 'algorithm', link: '/algorithm/chapter1/'},
        ]
      }
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
            'chapter2/lint',
            'chapter2/assets',
            'chapter2/pre-bundling'
          ]
        },
        {
          title: '双引擎架构',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter3/',
            'chapter3/esbuild-plugin',
            'chapter3/rollup',
            'chapter3/rollup-plugin'
          ]
        }
      ],
      '/algorithm/': [
        {
          title: 'algorithm-base',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/',
            'chapter1/1'
          ]
        }
      ],
      '/vue3/': [
        {
          title: 'vue3',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/'
          ]
        }
      ],
      '/books/vuejs/': [
        {
          title: '框架设计概览',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'chapter1/'
          ]
        }
      ],
      '/axios/': [
        {
          title: '初识 TypeScript',
          collapsable: false,
          children: [
            ['chapter1/', 'Introduction'],
            'chapter1/install',
            'chapter1/start'
          ]
        },
        {
          title: 'TypeScript 常用语法',
          collapsable: false,
          children: [
            'chapter2/type',
            'chapter2/declare',
            'chapter2/interface',
            'chapter2/class',
            'chapter2/function',
            'chapter2/generic',
            'chapter2/inference',
            'chapter2/advance'
          ]
        },
        {
          'title': 'ts-axios 项目初始化',
          collapsable: false,
          children: [
            'chapter3/require',
            'chapter3/init',
            'chapter3/base'
          ]
        },
        {
          'title': 'ts-axios 基础功能实现',
          collapsable: false,
          children: [
            'chapter4/url',
            'chapter4/data',
            'chapter4/header',
            'chapter4/response',
            'chapter4/response-header',
            'chapter4/response-data'
          ]
        },
        {
          'title': 'ts-axios 异常情况处理',
          collapsable: false,
          children: [
            'chapter5/error',
            'chapter5/enhance'
          ]
        },
        {
          'title': 'ts-axios 接口扩展',
          collapsable: false,
          children: [
            'chapter6/extend',
            'chapter6/overload',
            'chapter6/generic'
          ]
        },
        {
          'title': 'ts-axios 拦截器实现',
          collapsable: false,
          children: [
            'chapter7/interceptor'
          ]
        },
        {
          'title': 'ts-axios 配置化实现',
          collapsable: false,
          children: [
            'chapter8/merge',
            'chapter8/transform',
            'chapter8/create'
          ]
        },
        {
          'title': 'ts-axios 取消功能实现',
          collapsable: false,
          children: [
            'chapter9/cancel'
          ]
        },
        {
          'title': 'ts-axios 更多功能实现',
          collapsable: false,
          children: [
            'chapter10/withCredentials',
            'chapter10/xsrf',
            'chapter10/upload-download',
            'chapter10/auth',
            'chapter10/validateStatus',
            'chapter10/paramsSerializer',
            'chapter10/baseURL',
            'chapter10/static'
          ]
        },
        {
          'title': 'ts-axios 单元测试',
          collapsable: false,
          children: [
            'chapter11/preface',
            'chapter11/jest',
            'chapter11/helpers',
            'chapter11/requests',
            'chapter11/headers',
            'chapter11/instance',
            'chapter11/interceptor',
            'chapter11/mergeConfig',
            'chapter11/cancel',
            'chapter11/more'
          ]
        },
        {
          'title': 'ts-axios 部署与发布',
          collapsable: false,
          children: [
            'chapter12/build-deploy',
            'chapter12/demo'
          ]
        },
        {
          'title': '课程总结',
          collapsable: false,
          children: [
            'chapter13/summary'
          ]
        }
      ]
    }
  }
}