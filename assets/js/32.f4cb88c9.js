(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{389:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ts-axios-编译与发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-编译与发布"}},[s._v("#")]),s._v(" ts-axios 编译与发布")]),s._v(" "),a("h2",{attrs:{id:"需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[s._v("#")]),s._v(" 需求分析")]),s._v(" "),a("p",[s._v("前面的章节我们完成 "),a("code",[s._v("ts-axios")]),s._v(" 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 "),a("code",[s._v("npm")]),s._v(" 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。")]),s._v(" "),a("p",[s._v("由于我们会把包发布到公共的 npm 源，如果你还没有 "),a("code",[s._v("npm")]),s._v(" 账号，那么需要先去"),a("a",{attrs:{href:"https://www.npmjs.com/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网注册"),a("OutboundLink")],1),s._v("。注册完成后，可以去终端执行 "),a("code",[s._v("npm login")]),s._v(" 登录。这个步骤非常重要，决定你最终能否发布成功。")]),s._v(" "),a("h2",{attrs:{id:"编译和打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译和打包"}},[s._v("#")]),s._v(" 编译和打包")]),s._v(" "),a("p",[s._v("我们会利用 "),a("a",{attrs:{href:"https://github.com/rollup/rollup",target:"_blank",rel:"noopener noreferrer"}},[s._v("rollup"),a("OutboundLink")],1),s._v(" 来打包我们的 "),a("code",[s._v("ts-axios")]),s._v(" 库，它是一个非常著名的编译打包工具，Vue.js 也是利用 rollup 编译打包的。相比 webpack，它非常适合去编译和打包一些 JS 库。")]),s._v(" "),a("p",[s._v("由于使用 "),a("code",[s._v("typescript-library-starter")]),s._v(" 初始化我们的项目，我们已经拥有了 rollup 打包的相关配置和相关插件的安装，接下来我们就来对生成的 "),a("code",[s._v("rollup.config.ts")]),s._v(" 做小小的修改。")]),s._v(" "),a("h3",{attrs:{id:"修改-rollup-config-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-rollup-config-ts"}},[s._v("#")]),s._v(" 修改 rollup.config.ts")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" resolve "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-node-resolve'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" commonjs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-commonjs'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sourceMaps "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-sourcemaps'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" camelCase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lodash.camelcase'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" typescript "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-typescript2'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-json'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" libraryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("src/index.ts")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libraryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sourcemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'es'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sourcemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')")]),s._v("\n  external"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/**'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allow json resolution")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Compile TypeScript files")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("typescript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" useTsconfigDeclarationDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commonjs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allow node_modules resolution, so you can use 'external' to control")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// which external modules to include in the bundle")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/rollup/rollup-plugin-node-resolve#usage")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Resolve source maps to the original source")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sourceMaps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("注意要修改的地方，把 "),a("code",[s._v("libraryName")]),s._v(" 修改为 "),a("code",[s._v("axios")]),s._v("，"),a("code",[s._v("input")]),s._v(" 修改为 "),a("code",[s._v("src/index.ts")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("rollup")]),s._v(" 的配置很简单，我们简单地过一下。")]),s._v(" "),a("ul",[a("li",[s._v("input")])]),s._v(" "),a("p",[s._v("表示打包入口文件。")]),s._v(" "),a("ul",[a("li",[s._v("output")])]),s._v(" "),a("p",[s._v("表示输出的目标文件，它是一个对象数组，我们可以指定输出的格式，比如 "),a("code",[s._v("umd")]),s._v(" 格式、"),a("code",[s._v("es")]),s._v(" 模式等。")]),s._v(" "),a("ul",[a("li",[s._v("external")])]),s._v(" "),a("p",[s._v("声明它的外部依赖，可以不被打包进去。")]),s._v(" "),a("ul",[a("li",[s._v("watch")])]),s._v(" "),a("p",[s._v("监听文件的变化，重新编译，只有在编译的时候开启 "),a("code",[s._v("--watch")]),s._v(" 才生效。")]),s._v(" "),a("ul",[a("li",[s._v("plugins")])]),s._v(" "),a("p",[s._v("编译过程中使用的插件，其中 "),a("code",[s._v("rollup-plugin-typescript2")]),s._v(" 就是用来编译 TypeScript 文件，"),a("code",[s._v("useTsconfigDeclarationDir")]),s._v(" 表示使用 "),a("code",[s._v("tsconfig.json")]),s._v(" 文件中定义的 "),a("code",[s._v("declarationDir")]),s._v("。其它插件感兴趣的同学可以自己去查阅文档。")]),s._v(" "),a("h3",{attrs:{id:"修改-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json"}},[s._v("#")]),s._v(" 修改 package.json")]),s._v(" "),a("p",[s._v("由于我们已经在 "),a("code",[s._v("rollup.config.ts")]),s._v(" 中修改了 "),a("code",[s._v("libraryName")]),s._v(" 为 "),a("code",[s._v("axios")]),s._v("， 那么在 "),a("code",[s._v("package.json")]),s._v(" 文件中你需要做相关的修改：")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/axios.umd.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/axios.es5.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/types/index.d.ts"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("然后我们在控制台执行 "),a("code",[s._v("npm run build")]),s._v("，会编译输出 "),a("code",[s._v("dist")]),s._v(" 目录，其中 "),a("code",[s._v("lib")]),s._v(" 目录是单个 "),a("code",[s._v(".ts")]),s._v(" 文件编译后的 "),a("code",[s._v(".js")]),s._v(" 文件。"),a("code",[s._v("types")]),s._v(" 目录是所有 "),a("code",[s._v(".ts")]),s._v(" 文件编译后生产的 "),a("code",[s._v(".d.ts")]),s._v(" 声明文件。"),a("code",[s._v("axios.es5.js")]),s._v(" 是编译后生成的 es 模式的入口文件，用在 "),a("code",[s._v("package.json")]),s._v(" 的 "),a("code",[s._v("module")]),s._v(" 字段，"),a("code",[s._v("axios.umd.js")]),s._v(" 文件是编译后生成的 "),a("code",[s._v("umd")]),s._v(" 模式的入口文件，用在 "),a("code",[s._v("package.json")]),s._v(" 的 "),a("code",[s._v("main")]),s._v(" 字段。")]),s._v(" "),a("h2",{attrs:{id:"自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[s._v("#")]),s._v(" 自动化部署")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("semantic-release")]),s._v(" 插件过于黑盒也略微重量，我还是决定教同学们自己编写自动化部署脚本，这样更灵活，意义也更大，因为大部分场景是用不到那么多 feature 的。")]),s._v(" "),a("h3",{attrs:{id:"修改-package-json-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json-2"}},[s._v("#")]),s._v(" 修改 package.json")]),s._v(" "),a("p",[s._v("发布到 npm 之前你需要为你的包命名，由于 "),a("code",[s._v("ts-axios")]),s._v(" 这个名字已经被占用了，我使用了 "),a("code",[s._v("ts-axios-new")]),s._v(" 这个名称，当然你学到这里，就需要起一个新名字了。可以使用 "),a("code",[s._v("npm view [<@scope>/]<pkg>[@<version>]")]),s._v(" 的方式去搜索一个包名是否已经存在，比如你搜索 "),a("code",[s._v("npm view ts-axios-new")]),s._v(" 会发现这个包已经存在，返回这个包相关信息。如果你搜索 "),a("code",[s._v("npm view xxxx")]),s._v(" 返回错误 404 的话，那么你就可以使用 "),a("code",[s._v("xxxx")]),s._v(" 这个包名了。")]),s._v(" "),a("p",[s._v("如果你想让你发布的包关联你的仓库地址，可以配置 "),a("code",[s._v("repository")]),s._v(" 的 "),a("code",[s._v("url")]),s._v(" 字段。")]),s._v(" "),a("p",[s._v("另外我们增加 2 个 npm scripts：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prepub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run test:prod && npm run build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sh release.sh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("当我们运行 "),a("code",[s._v("npm run pub")]),s._v(" 的时候，会优先执行 "),a("code",[s._v("prepub")]),s._v(" 脚本，在 "),a("code",[s._v("prepub")]),s._v(" 中我们运行了 "),a("code",[s._v("test:prod")]),s._v(" 和 "),a("code",[s._v("build")]),s._v(" 2 个脚本。"),a("code",[s._v("&&")]),s._v(" 符号表示前面一个命令执行成功后才会执行后面的任务。")]),s._v(" "),a("p",[a("code",[s._v("npm run test:prod")]),s._v(" 实际上运行了 "),a("code",[s._v("npm run lint && npm run test -- --no-cache")]),s._v("。 先运行 "),a("code",[s._v("lint")]),s._v(" 去校验我们的源码和测试文件是否遵循 "),a("code",[s._v("tslint")]),s._v(" 规范，再运行 "),a("code",[s._v("test")]),s._v(" 去跑测试。")]),s._v(" "),a("p",[a("code",[s._v("npm run build")]),s._v(" 实际上运行了 "),a("code",[s._v("tsc --module commonjs")]),s._v("、"),a("code",[s._v("rollup -c rollup.config.ts")]),s._v(" 和 "),a("code",[s._v("typedoc --out docs --target es6 --theme minimal --mode file src")]),s._v("。先运行 "),a("code",[s._v("tsc")]),s._v(" 去编译我们的 "),a("code",[s._v("TypeScript")]),s._v(" 文件，"),a("code",[s._v("dist/lib")]),s._v(" 和 "),a("code",[s._v("dist/types")]),s._v(" 下的文件就是该命令产生的，然后运行 "),a("code",[s._v("rollup")]),s._v(" 去构建 "),a("code",[s._v("axios.umd.js")]),s._v(" 及 "),a("code",[s._v("axios.es.js")]),s._v("，最后运行 "),a("code",[s._v("typedoc")]),s._v(" 去构建项目的文档。")]),s._v(" "),a("p",[s._v("运行完 "),a("code",[s._v("prepub")]),s._v(" 后就会再运行 "),a("code",[s._v("pub")]),s._v(" 命令，实际上执行了 "),a("code",[s._v("sh release.sh")]),s._v(" 命令，但是目前我们没有这个脚本，接下来我们就需要来编写部署脚本 "),a("code",[s._v("release.sh")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"编写部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写部署脚本"}},[s._v("#")]),s._v(" 编写部署脚本")]),s._v(" "),a("p",[a("code",[s._v("release.sh")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter release version: "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" VERSION\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Releasing '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v(' - are you sure? (y/n)"')]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -r\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (optional) move to a new line")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Yy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Releasing '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v(' ..."')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[build] '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v(" --message "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[release] '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# publish")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("部署脚本是 shell 脚本，shell 脚本就是封装了多行控制台命令，来逐行解释他们的含义。")]),s._v(" "),a("p",[a("code",[s._v("#!/usr/bin/env sh")]),s._v(" 用来表示它是一个 shell 脚本。")]),s._v(" "),a("p",[a("code",[s._v("set -e")]),s._v(" 告诉脚本如果执行结果不为 true 则退出。")]),s._v(" "),a("p",[a("code",[s._v('echo "Enter release version: "')]),s._v(" 在控制台输出 "),a("code",[s._v("Enter release version:")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("read VERSION")]),s._v(" 表示从标准输入读取值，并赋值给 $VERSION 变量。")]),s._v(" "),a("p",[a("code",[s._v('read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r')]),s._v("，其中 "),a("code",[s._v("read -p")]),s._v(" 表示给出提示符，后面接着 "),a("code",[s._v("Releasing $VERSION - are you sure? (y/n)")]),s._v(" 提示符；"),a("code",[s._v("-n 1")]),s._v(" 表示限定最多可以有 1 个字符可以作为有效读入；"),a("code",[s._v("-r")]),s._v(" 表示禁止反斜线的转义功能。因为我们的 read 并没有指定变量名，那么默认这个输入读取值会赋值给 "),a("code",[s._v("$REPLY")]),s._v(" 变量。")]),s._v(" "),a("p",[a("code",[s._v("echo")]),s._v(" 输出空值表示跳到一个新行，"),a("code",[s._v("#")]),s._v(" 在 shell 脚本中表示注释。")]),s._v(" "),a("p",[a("code",[s._v("if [[ $REPLY =~ ^[Yy]$ ]]")]),s._v(" 表示 shell 脚本中的流程控制语句，判断 "),a("code",[s._v("$REPLY")]),s._v(" 是不是大小写的 "),a("code",[s._v("y")]),s._v("，如果满足，则走到后面的 "),a("code",[s._v("then")]),s._v(" 逻辑。")]),s._v(" "),a("p",[a("code",[s._v('echo "Releasing $VERSION ..."')]),s._v("  在控制台输出 "),a("code",[s._v("Releasing $VERSION ...")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("git add -A")]),s._v(" 表示把代码所有变化提交到暂存区。")]),s._v(" "),a("p",[a("code",[s._v('git commit -m "[build] $VERSION"')]),s._v(" 表示提交代码，提交注释是 "),a("code",[s._v("[build] $VERSION")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v('npm version $VERSION --message "[release] $VERSION"')]),s._v(" 是修改 "),a("code",[s._v("package.json")]),s._v(" 中的 "),a("code",[s._v("version")]),s._v(" 字段到 "),a("code",[s._v("$VERSION")]),s._v("，并且提交一条修改记录，提交注释是 "),a("code",[s._v("[release] $VERSION")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("git push origin master")]),s._v(" 是把代码发布到主干分支。")]),s._v(" "),a("p",[a("code",[s._v("npm publish")]),s._v(" 是把仓库发布到 "),a("code",[s._v("npm")]),s._v(" 上，我们会把 "),a("code",[s._v("dist")]),s._v(" 目录下的代码都发布到 "),a("code",[s._v("npm")]),s._v(" 上，因为我们在 "),a("code",[s._v("package.json")]),s._v(" 中配置的是 "),a("code",[s._v("files")]),s._v(" 是 "),a("code",[s._v('["dist"]')]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"运行部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行部署脚本"}},[s._v("#")]),s._v(" 运行部署脚本")]),s._v(" "),a("p",[s._v("接下来我们就运行 "),a("code",[s._v("npm run pub")]),s._v(" 脚本部署，我们会发现在 "),a("code",[s._v("npm run prepub")]),s._v(" 阶段，在执行 "),a("code",[s._v("tslint --project tsconfig.json -t codeFrame 'src/**/*.ts' 'test/**/*.ts'")]),s._v(" 的时候失败了，原因是我们有代码不符合 lint 规范。原来是 "),a("code",[s._v("core/xhr.ts")]),s._v(" 文件中 "),a("code",[s._v("processCancel")]),s._v(" 函数中对 "),a("code",[s._v("promise")]),s._v(" 的处理，我们没有对异常情况处理，所以我们要给它加上 "),a("code",[s._v("catch")]),s._v(" 的逻辑：")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("processCancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cancelToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cancelToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("promise\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reason "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* istanbul ignore next */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do nothing")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("由于我们不会走到 "),a("code",[s._v("catch")]),s._v(" 逻辑，所以我们给它添加一个注释 "),a("code",[s._v("/* istanbul ignore next */")]),s._v(" 忽略该代码分支的测试。")]),s._v(" "),a("p",[s._v("然后我们再重新运行 "),a("code",[s._v("npm run pub")]),s._v(" 逻辑，它会先执行 "),a("code",[s._v("test")]),s._v("，然后运行 "),a("code",[s._v("build")]),s._v(" 编译代码，再执行 "),a("code",[s._v("release.sh")]),s._v(" 脚本。我们输入了要发布的版本，它就可以完成了整个代码的发布流程。")]),s._v(" "),a("p",[s._v("通过编写部署脚本的一行命令发布的方式，不仅可以用在这种 JS 库，也可以用于我们平时项目开发中，可以大大帮助我们提高生产率，也是前端工程化中必不可少的一个环节，希望同学们都能学会并掌握它。")]),s._v(" "),a("p",[s._v("至此我们完成了项目的部署和发布，我们也可以在 "),a("code",[s._v("npm")]),s._v(" 官网上看到我们发布的包，下一节课我们来创建一个实际项目，来引用我们开发的 "),a("code",[s._v("ts-axios")]),s._v(" 库。")])])}),[],!1,null,null,null);t.default=e.exports}}]);