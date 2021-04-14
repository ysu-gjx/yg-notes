# 选择器

<img width="600" :src="$withBase('/assets/css/CSS3 选择器.png')" />

## 选择器汇总
<css-Selector />

## 基本选择器
- 通配符选择器  *{margin:0;padding:0}
- 元素选择器    p{color: red}
- ID选择器      #box{color:red}
- 类选择器      .box{color:red}

```html
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* p{
      background-color: blue;
  } */
  .text1{
    background-color: blueviolet;
  }
  #txt{
    background-color: cadetblue;
  }
</style>
<p class="text1">庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。</p>
<p class="text2">庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。</p>
<p class="text">庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。</p>
<div id="txt">庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。</div>
```
## 层次（关系）选择器
```html
<style>
  /* 后代选择器  儿子+孙子 */
  ul li {
    /* border: 1px solid red; */
    color:red;
  }
</style>
<style>
  /* 子代选择器 */
  .list>li{
      border: 1px solid red;
  }
</style>
<ul class="list">
  <li>
    <h1>h1</h1>
    <p>p1</p>
    <ul>
        <li>
            <span>1</span>
        </li>
    </ul>
  </li>
  <li>
    <h1>h1</h1>
    <p>p1</p>
  </li>
</ul>

<style>
  /* 相邻兄弟  + 前面 - 参照物  + 后面的元素才会受样式的影响*/
  h1+p {
    color: red;
  }

  ul{
    border:1px solid red;
  }
  li+li{
    border-top:1px solid red;
  }
</style>
<style>
  /* 所有兄弟 */
  h1~p {
    border: 1px solid red;
  }
</style>
<div>
  <p>p0</p>
  <h1>h1</h1>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
</div>

<ul>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
</ul>
```
## 动态伪类选择器
- a 的四种状态
```html
<style>
  /* love(link visited)   hate (hover active)  喜欢 讨厌*/
  a:link{color:#000}
  a:visited{color:gray}
  a:hover{color:red}
  a:active{color:#000;background-color: green;}

  /* a{color:#000}
  a:hover{color:green} */
</style>
<div>
  <a href="https://www.baidu.com/">庭院深深，不知有多深？</a>
</div>
```
- focus
```html
<style>
  input{
    border:1px solid #000;
    outline: none;
  }
  input:focus{
    border:1px solid red;
  }
</style>
<p>点击文本输入框表单可以看到淡蓝色背景:</p>
<form>
  用户名: <input type="text" name="firstname" /><br>
  密　码: <input type="text" name="lastname" />
</form>
```
## 目标伪类选择器
- target(一个)
```html
<style>
  .menuSection {
    display: none;
  }

  :target {
    /*这里的:target就是指id="brand"的div对象*/
    display: block;
  }
</style>
<!-- id => #  -->
<!-- :target选择器称为目标选择器，用来匹配文档(页面)的url的某个标志符的目标元素  -->
<h2><a href="#brand">Brand</a></h2>
<div class="menuSection" id="brand">
  content for Brand
</div>
```
- target(多个)
```html
<style>
  /* 伪类选择器  :  */
  #brand:target {
    display: none;
    background: orange;
    color: #fff;
  }

  #jake:target {
    background: blue;
    color: #fff;
  }

  #aron:target {
    background: red;
    color: #fff;
  }
</style>
<h2><a href="#brand">Brand</a></h2>
<div class="menuSection" id="brand">
  content for Brand
</div>
<h2><a href="#jake">Brand</a></h2>
<div class="menuSection" id="jake">
  content for jake
</div>
<h2><a href="#aron">Brand</a></h2>
<div class="menuSection" id="aron">
  content for aron
</div>
```
## UI 元素状态伪类选择器
- checked
```html
<style>
  /* input 表单  :checked */
  form {
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    margin: 30px auto;
  }

  .wrapper {
    margin-bottom: 10px;
  }

  .box {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    border: 2px solid orange;
    vertical-align: middle;
  }

  .box input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  .box span {
    position: absolute;
    top: -10px;
    right: 3px;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    color: orange;
  }
  /* 默认隐藏  [type="checkbox"]  属性选择器*/
  input+span {
    opacity: 0;
  }

  /* 选中的时候显示 :checked  */
  input:checked+span {
    opacity: 1;
  }
</style>
<input type="checkbox">

<form action="#">
  <div class="wrapper">
    <div class="box">
      <input type="checkbox" checked id="usename" /><span>√</span>
    </div>
    <lable for="usename">我是选中状态</lable>
  </div>
  <div class="wrapper">
    <div class="box">
      <input type="checkbox" checked="checked"  id="usepwd" /><span>√</span>
    </div>
    <label for="usepwd">我是未选中状态</label>
  </div>
</form>
```
- enabled
```html
<style>
  /* :enabled 可以点击的input */
  div {
    margin: 20px;
  }

  input:enabled {
    background: #ccc;
    border: 2px solid red;
  }
</style>
<form action="#">
  <div>
    <label for="name">Text Input:</label>
    <input type="text" name="name" id="name" placeholder="可用输入框" />
  </div>
  <div>
    <label for="name">Text Input:</label>
    <input type="text" name="name" id="name" placeholder="禁用输入框" disabled="disabled" />
  </div>
</form>
```
- disabled
```html
<style>
  /* :disabled 控制不可点击的input的样式 */
  form {
    margin: 50px;
  }

  div {
    margin-bottom: 20px;
  }

  input {
    background: #fff;
    padding: 10px;
    border: 1px solid orange;
    border-radius: 3px;
  }

  input:disabled {
    background: rgba(0, 0, 0, .15);
    border: 10px solid red;
    color: rgba(0, 0, 0, .15);
  }
</style>
<form action="#">
  <div>
    <input type="text" name="name" id="name" placeholder="我是可用输入框" />
  </div>
  <div>
    <input type="text" name="name" id="name" placeholder="我是不可用输入框" disabled />
  </div>
</form>
```
## 结构性伪类选择器
- root
```html
<style>
  * {margin: 0}
  /* html 根元素 */
  :root {background: orange;}
</style>
<div>:root选择器的演示</div>
```
- not
```html
<style>
  form {width: 200px;margin: 20px auto;}
  div {margin-bottom: 20px;}
  /* submit的类型排除  input= "text" */
  input:not([type="submit"]) {
    border: 1px solid red;
    background: #ccc;
  }
  input[type="submit"]{
    border:0;
    background-color: grey;
    cursor: pointer;
  }
  /* div:not(.box){background-color: green;} */
</style>
<div>1</div>
<div class="box">2</div>

<form action="#">
  <div>
    <label for="name">Text Input:</label>
    <input type="text" class="txt" name="name" id="name" placeholder="John
            Smith" />
  </div>
  <div>
    <label for="name">Password Input:</label>
    <input type="text"  class="txt" name="name" id="name" placeholder="John
            Smith" />
  </div>
  <div>
    <input type="submit"  value="Submit" />
  </div>
</form>
```
- empty
```html
<style>
  /* :empty选择器表示的就是空。用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，哪怕是一个空格 */
  p:empty {
    /* display: none; */
    width: 100px;
    height: 20px;
    background: #ff0000;
  }
</style>
<h1>这是标题</h1>
<p>第一个段落。</p>
<p></p>
<p> </p>
<p>第三个段落。</p>
<p>第四个段落。</p>
<p>第五个段落。</p>
```
- first-child
- last-child
- only-child
- nth-child(n)
- nth-last-child(n)
- first-of-type
- last-of-type
- only-of-type
- nth-of-type(n)
- nth-last-of-type(n)
```html
<style>
/* nth-child(n)   第几个
    nth-of-type(n) 第几个   先过滤元素，在看第几个
    总结：  子元素标签统一的  - nth-child(n) / nth-of-type(n)
          子元素标签不统一  - nth-of-type(n)  筛选 span  - 偶数行
*/
.box span:nth-child(2n){
  display: block;
  background-color: red;
}

/* .box span:nth-of-type(2n){
    display: block;
    background-color: red;
} */
</style>
<section class="box">
  <p>我是第1个p标签</p>
  <span>1</span>
  <p>我是第2个p标签</p>
  <span>2</span>
  <p>我是第3个p标签</p>
  <span>3</span>
  <p>我是第4个p标签</p>
  <span>4</span>
  <p>我是第5个p标签</p>
  <span>5</span>
</section>
```
## 伪元素选择器
- first-letter
- first-lint
- before
- after
```html
<style>
/* - 清浮动 */
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
</style>
```
- placeholder
- selection
```html
<style>
/*  ::selection 选中 */
::selection {
  color: pink;
}
</style>
```
## 属性选择器
```html
<style>
/*  单词匹配  -  abc text   
    [foo]       所有属性
    [foo=abc]   等于
    [foo~=abc]  含有 abc text 两个单词    
    [foo|=abc]  开头 / abc- 开头   (abc efj)

    字符匹配  字母 abc
    [foo^=abc]  开始
    [foo$=abc]  末尾
    [foo*=abc]  都可以

    /* 以f开头的字符(忽略大小写) - FOUr five */
    li[data-index^='f'i]:after {
      content: '支持i正则';
      color: green;
    }
*/
```
###
