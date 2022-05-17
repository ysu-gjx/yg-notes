(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{435:function(t,e,s){"use strict";s.r(e);var v=s(45),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" Esbuild")]),t._v(" "),s("p",[t._v("Vite 底层所深度使用的两个构建引擎——"),s("code",[t._v("Esbuild")]),t._v("和"),s("code",[t._v("Rollup")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"vite-架构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite-架构图"}},[t._v("#")]),t._v(" vite 架构图")]),t._v(" "),s("p",[t._v("很多人对 Vite 的双引擎架构仅仅停留在"),s("code",[t._v("开发阶段使用 Esbuild，生产环境用 Rollup")]),t._v("的阶段，殊不知，Vite 真正的架构远没有这么简单。一图胜千言，这里放一张 Vite 架构图：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-1.webp")}}),t._v(" "),s("h2",{attrs:{id:"性能利器-esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能利器-esbuild"}},[t._v("#")]),t._v(" 性能利器——Esbuild")]),t._v(" "),s("p",[t._v("必须要承认的是，"),s("code",[t._v("Esbuild")]),t._v("的确是 Vite 高性能的得力助手，在很多"),s("code",[t._v("关键的构建阶段")]),t._v("让 Vite 获得了相当优异的性能，如果这些阶段用传统的打包器/编译器来完成的话，开发体验要下降一大截。")]),t._v(" "),s("blockquote",[s("p",[t._v("关于 Esbuild 为什么快，我会在下一节展开介绍。")])]),t._v(" "),s("p",[t._v("那么，"),s("code",[t._v("Esbuild")]),t._v(" 到底在 Vite 的构建体系中发挥了哪些作用？")]),t._v(" "),s("h3",{attrs:{id:"依赖预构建-作为-bundle-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖预构建-作为-bundle-工具"}},[t._v("#")]),t._v(" 依赖预构建——作为 Bundle 工具")]),t._v(" "),s("p",[t._v("首先是"),s("strong",[t._v("开发阶段的依赖预构建")]),t._v("阶段。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-2.webp")}}),t._v(" "),s("p",[t._v("一般来说，"),s("code",[t._v("node_modules")]),t._v(" 依赖的大小动辄几百 MB 甚至上 GB ，会远超项目源代码，相信大家都深有体会。如果这些依赖直接在 Vite 中使用，会出现一系列的问题，这些问题我们在"),s("strong",[t._v("依赖预构建")]),t._v("的小节已经详细分析过，主要是 ESM 格式的兼容性问题和海量请求的问题，不再赘述。总而言之，对于第三方依赖，需要在应用启动前进行"),s("code",[t._v("打包")]),t._v("并且"),s("code",[t._v("转换为 ESM 格式")])]),t._v(" "),s("p",[t._v("Vite 1.x 版本中使用 "),s("code",[t._v("Rollup")]),t._v(" 来做这件事情，但 "),s("code",[t._v("Esbuild")]),t._v(" 的性能实在是太恐怖了，Vite 2.x 果断采用 "),s("code",[t._v("Esbuild")]),t._v(" 来完成第三方依赖的预构建，至于性能到底有多强，大家可以参照它与传统打包工具的性能对比图:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-3.awebp")}}),t._v(" "),s("p",[t._v("当然，Esbuild 作为打包工具也有一些缺点。")]),t._v(" "),s("ul",[s("li",[t._v("不支持降级到 "),s("code",[t._v("ES5")]),t._v(" 的代码。这意味着在低端浏览器代码会跑不起来。")]),t._v(" "),s("li",[t._v("不支持 "),s("code",[t._v("const enum")]),t._v(" 等语法。这意味着单独使用这些语法在 "),s("code",[t._v("esbuild")]),t._v(" 中会直接抛错。")]),t._v(" "),s("li",[t._v("不提供操作打包产物的接口，像 Rollup 中灵活处理打包产物的能力(如"),s("code",[t._v("renderChunk")]),t._v("钩子)在 "),s("code",[t._v("Esbuild")]),t._v(" 当中完全没有。")]),t._v(" "),s("li",[t._v("不支持自定义 "),s("code",[t._v("Code Splitting")]),t._v(" 策略。传统的 Webpack 和 Rollup 都提供了自定义拆包策略的 API，而 Esbuild 并未提供，从而降级了拆包优化的灵活性。")])]),t._v(" "),s("p",[t._v("有如此多的局限性，但依然不妨碍 Vite 在"),s("strong",[t._v("开发阶段")]),t._v("使用它成功启动项目并获得极致的"),s("strong",[t._v("性能提升")]),t._v("，生产环境处于稳定性考虑当然是采用功能更加丰富、生态更加成熟的 Rollup 作为依赖打包工具了。")]),t._v(" "),s("h3",{attrs:{id:"二、单文件编译-作为-ts-和-jsx-编译工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、单文件编译-作为-ts-和-jsx-编译工具"}},[t._v("#")]),t._v(" 二、单文件编译——作为 TS 和 JSX 编译工具")]),t._v(" "),s("p",[t._v("在依赖预构建阶段， "),s("code",[t._v("Esbuild")]),t._v(" 作为 "),s("code",[t._v("Bundler")]),t._v(" 的角色存在。而在 "),s("code",[t._v("TS(X)/JS(X)")]),t._v(" 单文件编译上面，"),s("code",[t._v("Vite")]),t._v(" 也使用 "),s("code",[t._v("Esbuild")]),t._v(" 进行"),s("strong",[t._v("语法转译")]),t._v("，也就是将 "),s("code",[t._v("Esbuild")]),t._v(" 作为 "),s("code",[t._v("Transformer")]),t._v(" 来用。大家可以在架构图中"),s("code",[t._v("Vite Plugin Pipeline")]),t._v("部分注意到:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-4.webp")}}),t._v(" "),s("p",[t._v("也就是说，"),s("code",[t._v("Esbuild")]),t._v(" 转译 "),s("code",[t._v("TS")]),t._v(" 或者 "),s("code",[t._v("JSX")]),t._v(" 的能力通过 Vite 插件提供，这个 Vite 插件在"),s("strong",[t._v("开发环境")]),t._v("和"),s("strong",[t._v("生产环境")]),t._v("都会执行，因此，我们可以得出下面这个结论:")]),t._v(" "),s("blockquote",[s("p",[t._v("Vite 已经将 "),s("code",[t._v("Esbuild")]),t._v(" 的 "),s("code",[t._v("Transformer")]),t._v(" 能力用到了生产环境。尽管如此，对于低端浏览器场景，Vite 仍然可以做到语法和 Polyfill 安全，详情见 "),s("a",{attrs:{href:"https://juejin.cn/book/7050063811973218341/section/7066611951547187214",target:"_blank",rel:"noopener noreferrer"}},[t._v("小册第 15 节——语法降级与 Polyfill"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[t._v("这部分能力用来替换原先 "),s("code",[t._v("Babel")]),t._v(" 或者 "),s("code",[t._v("TSC")]),t._v(" 的功能，因为无论是 Babel 还是 TSC都有性能问题，大家对这两个工具普遍的认知都是: "),s("strong",[t._v("慢，太慢了")]),t._v("。")]),t._v(" "),s("p",[t._v("当 Vite 使用 Esbuild 做单文件编译之后，提升可以说"),s("strong",[t._v("相当大")]),t._v("了，我们以一个巨大的、50 多 MB 的纯代码文件为例，来"),s("a",{attrs:{href:"https://datastation.multiprocess.io/blog/2021-11-13-benchmarking-esbuild-swc-typescript-babel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("对比"),s("OutboundLink")],1),s("code",[t._v("Esbuild")]),t._v("、"),s("code",[t._v("Babel")]),t._v("、"),s("code",[t._v("TSC")]),t._v(" 包括 "),s("code",[t._v("SWC")]),t._v(" 的编译性能:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-5.awebp")}}),t._v(" "),s("p",[t._v("可以看到，虽然 "),s("code",[t._v("Esbuild Transfomer")]),t._v(" 能带来巨大的性能提升，但其自身也有局限性，最大的局限性就在于 "),s("code",[t._v("TS")]),t._v(" 中的类型检查问题。这是因为 Esbuild 并没有实现 TS 的类型系统，在编译 "),s("code",[t._v("TS")]),t._v("(或者 "),s("code",[t._v("TSX")]),t._v(") 文件时仅仅抹掉了类型相关的代码，暂时没有能力实现类型检查")]),t._v(" "),s("p",[t._v("也因此，"),s("strong",[t._v("快速上手")]),t._v("这一节，我让大家注意初始化工程的构建脚本，"),s("code",[t._v("vite build")]),t._v("之前会先执行"),s("code",[t._v("tsc")]),t._v("命令，也就是借助 TS 官方的编译器进行类型检查。")]),t._v(" "),s("p",[t._v("当然，要解决类型问题，我更推荐大家使用 TS 的编辑器插件。在开发阶段就能早早把问题暴露出来并解决，不至于等到项目要打包上线的时候。")]),t._v(" "),s("h3",{attrs:{id:"三、代码压缩-作为压缩工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、代码压缩-作为压缩工具"}},[t._v("#")]),t._v(" 三、代码压缩——作为压缩工具")]),t._v(" "),s("blockquote",[s("p",[t._v("Vite 从 2.6 版本开始，就官宣默认使用 Esbuild 来进行生产环境的代码压缩，包括 JS 代码和 CSS 代码。")])]),t._v(" "),s("p",[t._v("从架构图中可以看到，在生产环境中 Esbuild 压缩器通过插件的形式融入到了 Rollup 的打包流程中:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-6.webp")}}),t._v(" "),s("p",[t._v("那为什么 Vite 要将 Esbuild 作为生产环境下默认的压缩工具呢？因为压缩效率实在太高了！")]),t._v(" "),s("p",[t._v("传统的方式都是使用 "),s("code",[t._v("Terser")]),t._v(" 这种 "),s("code",[t._v("JS")]),t._v(" 开发的压缩器来实现，在 "),s("code",[t._v("Webpack")]),t._v(" 或者 "),s("code",[t._v("Rollup")]),t._v(" 中作为一个 "),s("code",[t._v("Plugin")]),t._v(" 来完成代码打包后的压缩混淆的工作。但 "),s("code",[t._v("Terser")]),t._v(" 其实很慢，主要有 2 个原因。")]),t._v(" "),s("ol",[s("li",[t._v("压缩这项工作涉及大量 AST 操作，并且在传统的构建流程中，AST 在各个工具之间无法共享，比如 Terser 就无法与 Babel 共享同一个 AST，造成了很多重复解析的过程。")]),t._v(" "),s("li",[t._v("JS 本身属于解释性 + JIT（即时编译） 的语言，对于压缩这种 CPU 密集型的工作，其性能远远比不上 Golang 这种原生语言。")])]),t._v(" "),s("p",[t._v("因此，Esbuild 这种从头到尾"),s("code",[t._v("共享 AST")]),t._v(" 以及"),s("strong",[t._v("原生语言编写")]),t._v("的 "),s("code",[t._v("Minifier")]),t._v(" 在性能上能够甩开传统工具的好几十倍。")]),t._v(" "),s("p",[t._v("举个例子，我们可以看下面这个实际大型库("),s("code",[t._v("echarts")]),t._v(")的压缩性能"),s("a",{attrs:{href:"https://github.com/privatenumber/minification-benchmarks",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试项目"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-7.awebp")}}),t._v(" "),s("p",[t._v("压缩一个大小为"),s("code",[t._v("3.2 MB")]),t._v("的库，"),s("code",[t._v("Terser")]),t._v(" 需要耗费"),s("code",[t._v("8798 ms")]),t._v("，而 "),s("code",[t._v("Esbuild")]),t._v(" 仅仅需要"),s("code",[t._v("361 ms")]),t._v("，压缩效率较 "),s("code",[t._v("Terser")]),t._v(" 提升了二三十倍，并且产物的体积几乎没有劣化，因此 Vite 果断将其内置为默认的压缩方案。")]),t._v(" "),s("p",[t._v("总的来说，Vite 将 Esbuild 作为自己的性能利器，将 Esbuild 各个垂直方向的能力("),s("code",[t._v("Bundler")]),t._v("、"),s("code",[t._v("Transformer")]),t._v("、"),s("code",[t._v("Minifier")]),t._v(")利用的淋漓尽致，给 Vite 的高性能提供了有利的保证。")]),t._v(" "),s("h2",{attrs:{id:"构建基石-rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建基石-rollup"}},[t._v("#")]),t._v(" 构建基石——Rollup")]),t._v(" "),s("p",[t._v("Rollup 在 Vite 中的重要性一点也不亚于 Esbuild，它既是 Vite 用作生产环境打包的核心工具，也直接决定了 Vite 插件机制的设计。那么，Vite 到底基于 Rollup 做了哪些事情？")]),t._v(" "),s("h3",{attrs:{id:"生产环境-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产环境-bundle"}},[t._v("#")]),t._v(" 生产环境 Bundle")]),t._v(" "),s("p",[t._v("虽然 "),s("code",[t._v("ESM")]),t._v(" 已经得到众多浏览器的原生支持，但生产环境做到完全"),s("code",[t._v("no-bundle")]),t._v("也不行，会有网络性能问题。为了在生产环境中也能取得优秀的产物性能，Vite 默认选择在生产环境中利用 "),s("code",[t._v("Rollup")]),t._v(" 打包，并基于 Rollup 本身成熟的打包能力进行扩展和优化，主要包含 3 个方面:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("CSS 代码分割。如果某个异步模块中引入了一些 CSS 代码，Vite 就会自动将这些 CSS 抽取出来生成单独的文件，提高线上产物的"),s("code",[t._v("缓存复用率")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("自动预加载。Vite 会自动为入口 chunk 的依赖自动生成预加载标签"),s("code",[t._v('<link rel="moduelpreload">')]),t._v(" ，如:")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 省略其它内容 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 入口 chunk --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/assets/index.250e0340.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--  自动预加载入口 chunk 所依赖的 chunk--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("modulepreload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/assets/vendor.293dca09.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这种适当预加载的做法会让浏览器提前下载好资源，优化页面性能。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("异步 Chunk 加载优化。在异步引入的 Chunk 中，通常会有一些公用的模块，如现有两个异步引入的 Chunk: "),s("code",[t._v("A")]),t._v(" 和 "),s("code",[t._v("B")]),t._v("，而且两者有一个公共依赖 "),s("code",[t._v("C")]),t._v("，如下图:")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-8.webp")}}),t._v(" "),s("p",[t._v("一般情况下，Rollup 打包之后，会先请求 A，然后浏览器在加载 A 的过程中才决定请求和加载 C，但 Vite 进行优化之后，请求 A 的同时会自动预加载 C，通过优化 Rollup 产物依赖加载方式节省了不必要的网络开销。")]),t._v(" "),s("h3",{attrs:{id:"兼容插件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容插件机制"}},[t._v("#")]),t._v(" 兼容插件机制")]),t._v(" "),s("p",[t._v("无论是开发阶段还是生产环境，Vite 都根植于 Rollup 的插件机制和生态，如下面的架构图所示:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-9.webp")}}),t._v(" "),s("p",[t._v("在开发阶段，Vite 借鉴了 "),s("a",{attrs:{href:"https://github.com/preactjs/wmr",target:"_blank",rel:"noopener noreferrer"}},[t._v("WMR"),s("OutboundLink")],1),t._v(" 的思路，自己实现了一个 "),s("code",[t._v("Plugin Container")]),t._v("，用来模拟 Rollup 调度各个 Vite 插件的执行逻辑，而 Vite 的插件写法完全兼容 Rollup，因此在生产环境中将所有的 Vite 插件传入 Rollup 也没有问题。")]),t._v(" "),s("p",[t._v("反过来说，Rollup 插件却不一定能完全兼容 Vite(这部分我们会在"),s("strong",[t._v("插件开发")]),t._v("小节展开来说)。不过，目前仍然有不少 Rollup 插件可以直接复用到 Vite 中，你可以通过这个站点查看所有兼容 "),s("code",[t._v("Vite")]),t._v(" 的 "),s("code",[t._v("Rollup")]),t._v(" 插件: "),s("a",{attrs:{href:"https://vite-rollup-plugins.patak.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite-rollup-plugins.patak.dev/"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/vite/8-10.webp")}}),t._v(" "),s("p",[t._v("狼叔在"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/mt2Uyh-lpHqHAHqjsen7zw",target:"_blank",rel:"noopener noreferrer"}},[t._v("《以框架定位论前端的先进性》"),s("OutboundLink")],1),t._v(" 提到现代前端框架的几大分类，Vite 属于"),s("code",[t._v("人有我优")]),t._v("的类型，因为类似的工具之前有 "),s("a",{attrs:{href:"https://www.snowpack.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snowpack"),s("OutboundLink")],1),t._v("，Vite 诞生之后补齐了作为一个 "),s("code",[t._v("no-bundle")]),t._v(" 构建工具的 Dev Server 能力(如 HMR)，确实比现有的工具能力更优。但更重要的是，Vite 在"),s("strong",[t._v("社区生态")]),t._v("方面比 Snowpack 更占先天优势。")]),t._v(" "),s("p",[t._v("Snowpack 自研了一套插件机制，类似 Rollup 的 Hook 机制，可以看出借鉴了 Rollup 的插件机制，但并不能兼容任何现有的打包工具。如果需要打包，只能调用其它打包工具的 API，自身不提供打包能力。")]),t._v(" "),s("p",[t._v("而 Vite 的做法是从头到尾根植于的 Rollup 的生态，设计了和 Rollup 非常吻合的插件机制，而 Rollup 作为一个非常成熟的打包方案，从诞生至今已经迭代了"),s("code",[t._v("六年多")]),t._v("的时间，npm 年下载量达到"),s("code",[t._v("上亿次")]),t._v("，产物质量和稳定性都经历过大规模的验证。某种程度上说，这种根植于已有成熟工具的思路也能打消或者降低用户内心的疑虑，更有利于工具的推广和发展。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("本小节的内容中，我给你拆解了 Vite 底层双引擎的架构，分别介绍了 Esbuild 和 Rollup 究竟在 Vite 中做些了什么，你需要重点掌握 "),s("strong",[t._v("Vite 的整体架构")]),t._v("以及 "),s("strong",[t._v("Esbuild 和 Rollup 在 Vite 中的作用")]),t._v("。")]),t._v(" "),s("p",[t._v("首先，Esbuild 作为构建的性能利器，Vite 利用其 Bundler 的功能进行依赖预构建，用其 Transformer 的能力进行 TS 和 JSX 文件的转译，也用到它的压缩能力进行 JS 和 CSS 代码的压缩。")]),t._v(" "),s("p",[t._v("在 Vite 当中，无论是插件机制、还是底层的打包手段，都基于 Rollup 来实现，可以说 Vite 是对于 Rollup 一种场景化的深度扩展，将 Rollup 从传统的 JS 库打包场景扩展至完整 Web 应用打包，然后结合开发阶段 "),s("code",[t._v("no-bundle")]),t._v(" 的核心竞争力，打造出了自己独具一格的技术品牌。")])])}),[],!1,null,null,null);e.default=_.exports}}]);