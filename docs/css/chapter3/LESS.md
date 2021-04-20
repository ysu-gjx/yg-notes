# less

## install

`npm install -g less`

## 编译
- node js 中使用less
  - 运行：`lessc styles.less styles.css`
  - 单文件自动检测编译：插件 watcher-lessc
  - 命令：watcher-lessc -i style.less -o style.css
- 浏览器环境
  - `<link rel="stylesheet/less" type="text/css" href="styles.less">`
  - `<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js"></script>`

- 工具编译
  - [考拉](http://koala-app.com/index-zh.html)
- 其他方法
  - [在线编译工具](https://ecomfe.github.io/est/fiddle)
  - vscode插件：easy less
  - webpack
## less 的功能
- 变量(Variables)
- 混合(Mixins) 是一种将一组属性从一个规则集包含(或混入)到另一个规则集的方法
- 扩展(Extend)
- 嵌套(Nesting)
- 运算(Operations)
- 转义(Escaping)
- 函数(Functions)
- 命名空间和访问符
- 映射(Maps)
- 作用域(Scope)
- 注释(Comment)
- 导入(Importing)


