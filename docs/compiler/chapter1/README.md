
## 1. 需求分析
  - 实现 JSX 语法转成 JS 语法的编译器
  - 需求：将一段 JSX 语法的代码生成一个 AST ，并支持遍历和修改这个 AST ，将 AST 重新生成 JS 语法的代码

JSX 代码  
```jsx
<h1 id="title"><span>hello</span>world</h1>
```
JS 代码
```js
React.createElement('h1',{
  id: 'title'
},React.createElement('span',null,'hello'),'world')
```
## 2. 编译器工作流
  - 解析(Parsing) **解析**是将最初原始的代码转换为一种更加抽象的表示(即AST)
  - 转换(Transformation) **转换**将对这个抽象的表示做一些处理，让它能做到编译器期望它做到的事情
  - 代码生成(Code Generation) 接收处理之后的代码表示，然后把它转换成新的代码
  
### 2.1 解析(Parsing)
  - 解析一般来说会分成两个阶段：词法分析(Lexical Analysis)和语法分析(Syntactic Analysis)
    - `词法分析` 接收原始代码,然后把它分割成一些被称为`token` 的东西，这个过程是在词法分析器(Tokenizer 或者 Lexer)中完的
    - Token 是一个数组，由一些代码语句的碎片组成。它们可以是数字、标签、标点符号、运算符或者其它任何东西
    - `语法分析` 接收之前生成的`token` 把它们转换成一种抽象的表示，这种抽象的表示描述了代码语句中的每一个片段以及它们之间的关系，这被称为中间表示(Intermediate representation)或抽象语法树(Abastract Syntax Tree,缩写为AST)
    - 抽象语法树是一个嵌套程度很深的对象，用一种更容易处理的方式代表了代码本身，也能给我们更多信息
原始 `jsx` 代码
```js
<h1 id="title"><span>hello</span>world</h1>
```
tokens
```js
[
  { type: 'Punctuator', value: '<' },
  { type: 'JSXIdentifier', value: 'h1' },
  { type: 'JSXIdentifier', value: 'id' },
  { type: 'Punctuator', value: '=' },
  { type: 'String', value: '"title"' },
  { type: 'Punctuator', value: '>' },
  { type: 'Punctuator', value: '<' },
  { type: 'JSXIdentifier', value: 'span' },
  { type: 'Punctuator', value: '>' },
  { type: 'JSXText', value: 'hello' },
  { type: 'Punctuator', value: '<' },
  { type: 'Punctuator', value: '/' },
  { type: 'JSXIdentifier', value: 'span' },
  { type: 'Punctuator', value: '>' },
  { type: 'JSXText', value: 'world' },
  { type: 'Punctuator', value: '<' },
  { type: 'Punctuator', value: '/' },
  { type: 'JSXIdentifier', value: 'h1' },
  { type: 'Punctuator', value: '>' }
]
```
抽象语法树 AST
[astexplorer](https://astexplorer.net/)
```js
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h1"
          },
          "selfClosing": false,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "id"
              },
              "value": {
                "type": "Literal",
                "value": "title",
                "raw": "\"title\""
              }
            }
          ]
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span"
              },
              "selfClosing": false,
              "attributes": []
            },
            "children": [
              {
                "type": "JSXText",
                "value": "hello",
                "raw": "hello"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span"2
                ]
              }
            }
          },
          {
            "type": "JSXText",
            "value": "world",
            "raw": "world"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h1"
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```

### 2.2 遍历(Traversal)
  - 为了能处理所有的节点，我们需要遍历它们，使用的是深度优先遍历(dfs)
  - 对于上面的 `AST` 的遍历流程是这样的
```js
const esprima = require('esprima')
const estraverse = require('estraverse-fb')

let sourceCode = `<h1 id="title"><span>hello</span>world</h1>`

let ast = esprima.parseScript(sourceCode, { jsx: true, tokens: true })

let indent = 0

function padding() {
  return " ".repeat(indent)
}

estraverse.traverse(ast, {
  enter(node) {
    console.log(padding() + node.type + '进入')
    indent += 2
  },
  leave(node) {
    indent -= 2
    console.log(padding() + node.type + '离开')
  }
})
```
```
Program进入
  ExpressionStatement进入
    JSXElement进入
      JSXOpeningElement进入
        JSXIdentifier进入
        JSXIdentifier离开
        JSXAttribute进入
          JSXIdentifier进入
          JSXIdentifier离开
          Literal进入
          Literal离开
        JSXAttribute离开
      JSXOpeningElement离开
      JSXClosingElement进入
        JSXIdentifier进入
        JSXIdentifier离开
      JSXClosingElement离开
      JSXElement进入
        JSXOpeningElement进入
          JSXIdentifier进入
          JSXIdentifier离开
        JSXOpeningElement离开
        JSXClosingElement进入
          JSXIdentifier进入
          JSXIdentifier离开
        JSXClosingElement离开
        JSXText进入
        JSXText离开
      JSXElement离开
      JSXText进入
      JSXText离开
    JSXElement离开
  ExpressionStatement离开
Program离开
```
### 2.3 转换(Transformation)
  - 编译器的下一步就是转换，它只是把 AST 拿过来然后对它做一些修改，它可以在同种语言下操作 AST ，也可以把 AST 翻译成全新的语言
  - 我们的 `AST` 中有很多相似的元素，这些元素都有 `type` 属性，他们被称为 `AST` 结点。这些结点含有若干属性，可以用于描述 AST 的部分信息
  - 当转换 AST 的时候我们可以添加、移动、替换这些结点，也可以根据现有的 AST 生成一个全新的 AST
  - 既然我们编译器的目标是把输入的代码转换为一种新的语言，所有这里会着重于产生一个针对新语言的全新的 AST
### 2.4 代码生成(Code Generation)  
  - 编译器的最后一个阶段是代码生成，这个阶段做的事情有时候会和转换(transformation)重叠，但是代码生成的最主要部分还是根据 AST 来输出代码
  - 代码生成有几种不同的工作方式，有些编译器将会重用之前生成的 token ，有些会创建独立的代码表示，但是我们这里还是着重于使用之前生成好的 AST
  - 我们的代码生成器需要知道如何 `打印` AST 中所有类型的结点，然后会递归地调用自身，直到所有代码都被 打印 到一个很长的字符串中

## 3. 有限状态机



```
## ast
- 解析我们的语法（js） => 语法树
- 遍历树（先序深度优先） => 更改树的内容
- 生成新的内容

## esprima
- 解析我们的语法（js） => 语法树

## estraverse
- 遍历语法树

## escodegen
- 把语法树生成
```

