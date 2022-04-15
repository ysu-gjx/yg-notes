# quick-start

## 环境搭建

```
npm i -g pnpm
```
设置镜像源
```
pnpm config set registry https://registry.npmmirror.com/
```

## 项目初始化
```
pnpm create vite
```
后续设置完1. 项目名称 2. 前端开发框架 3. 选择开发语言
```js
// 进入项目目录
cd vite-project
// 安装依赖
pnpm install
// 启动项目
pnpm run dev
```

## 项目入口加载
```
.
├── index.html
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── favicon.svg
│   ├── index.css
│   ├── logo.svg
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.json
└── vite.config.ts
```
值得注意的是，在项目根目录中有一个`index.html`文件，这个文件十分关键，因为 Vite 默认会把项目根目录下的`index.html`作为入口文件。也就是说，当你访问`http://localhost:3000`的时候，Vite 的 Dev Server 会自动返回这个 HTML 文件的内容。我们来看看这个 HTML 究竟写了什么:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
可以看到这个 `HTML` 文件的内容非常简洁，在 `body` 标签中除了 id 为 root 的根节点之外，还包含了一个声明了`type="module"`的 script 标签:
```html
<script type="module" src="/src/main.tsx"></script>
```
由于现代浏览器原生支持了 ES 模块规范，因此原生的 ES 语法也可以直接放到浏览器中执行，只需要在 `script` 标签中声明 `type="module"` 即可。比如上面的 `script` 标签就声明了 `type="module"`，同时 src 指向了`/src/main.tsx`文件，此时相当于请求了`http://localhost:3000/src/main.tsx`这个资源，Vite 的 Dev Server 此时会接受到这个请求，然后读取对应的文件内容，进行一定的中间处理，最后将处理的结果返回给浏览器

<img :src="$withBase('/assets/vite/1.awebp')" />

到这里可能你会诧异: 浏览器并不识别 tsx 语法，也无法直接 import css 文件，上面这段代码究竟是如何被浏览器正常执行的呢？

这就归功了 Vite Dev Server 所做的“中间处理”了，也就是说，在读取到 `main.tsx`文件的内容之后，Vite 会对文件的内容进行编译，大家可以从 Chrome 的网络调试面板看到编译后的结果

<img :src="$withBase('/assets/vite/2.awebp')" />

这里你只需要知道，Vite 会将项目的源代码编译成浏览器可以识别的代码，与此同时，一个 import 语句即代表了一个 HTTP 请求，如下面两个 import 语句:
```js
import "/src/index.css";
import App from "/src/App.tsx";
```
需要注意的是，在 Vite 项目中，**一个import 语句即代表一个 HTTP 请求**。上述两个语句则分别代表了两个不同的请求，Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码。当浏览器解析到新的 import 语句，又会发出新的请求，以此类推，直到所有的资源都加载完成。

现在，你应该知道了 Vite 所倡导的 `no-bundle` 理念的真正含义: **利用浏览器原生 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载，而不是先整体打包再进行加载**。相比 Webpack 这种必须打包再加载的传统构建模式，Vite 在开发阶段省略了繁琐且耗时的打包过程，这也是它为什么快的一个重要原因

## 初识配置文件
在使用 Vite 的过程，我们需要对 Vite 做一些配置，以满足日常开发的需要。你可以通过两种方式来对 Vite 进行配置，一是通过命令行参数，如 `vite --port=8888` ，二是通过配置文件，一般情况下，大多数的配置都通过配置文件的方式来声明。

Vite 当中支持多种配置文件类型，包括`.js、.ts、.mjs`三种后缀的文件，实际项目中一般使用`vite.config.ts`作为配置文件，以脚手架项目中的配置为例，具体的配置代码如下:
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```
可以看到配置文件中默认在 plugins 数组中配置了官方的 react 插件，来提供 React 项目编译和热更新的功能。

接下来，我们可以基于这个文件完成更加丰富的配置。之前我就遇到过这样一个需求: 页面的入口文件`index.html`并不在项目根目录下，而需要放到 src 目录下，如何在访问`localhost:3000`的时候让 Vite 自动返回 src 目录下的`index.html`呢？我们可以通过root参数配置项目根目录的位置:
```ts
// vite.config.ts
import { defineConfig } from 'vite'
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 手动指定项目根目录位置
  root: path.join(__dirname, 'src')
  plugins: [react()]
})
```
当手动指定root参数之后，Vite 会自动从这个路径下寻找index.html文件，也就是说当我直接访问 localhost:3000的时候，Vite 从src目录下读取入口文件，这样就成功实现了刚才的需求。

## 生产环境构建
有人说 `Vite` 因为其不打包的特性而不能上生产环境，其实这种观点是相当有误的。在开发阶段 Vite 通过 Dev Server 实现了不打包的特性，而在生产环境中，Vite 依然会基于 `Rollup` 进行打包，并采取一系列的打包优化手段

`package.json` 其中的`build`命令了，没错，这个命令就是 Vite 专门用来进行生产环境打包的。但可能你会有点疑惑，为什么在`vite build`命令执行之前要先执行`tsc`呢？

`tsc` 作为 TypeScript 的官方编译命令，可以用来编译 TypeScript 代码并进行类型检查，而这里的作用主要是用来做类型检查，我们可以从项目的`tsconfig.json`中注意到这样一个配置:
```ts
{
  "compilerOptions": {
    // 省略其他配置
    // 1. noEmit 表示只做类型检查，而不会输出产物文件
    // 2. 这行配置与 tsc --noEmit 命令等效
    "noEmit": true,
  },
}
```
虽然 Vite 提供了开箱即用的 TypeScript 以及 JSX 的编译能力，但实际上底层并没有实现 TypeScript 的类型校验系统，因此需要借助 tsc 来完成类型校验(在 Vue 项目中使用 vue-tsc 这个工具来完成)，在打包前提早暴露出类型相关的问题，保证代码的健壮性。

执行命令
```
pnpm run build
```
此时 Vite 已经生成了最终的打包产物，我们可以通过 `pnpm run preview` 命令预览一下打包产物的执行效果。
