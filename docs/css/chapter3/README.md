# 

## CSS 变量

- 不需要经过任何转译步骤，是浏览器原生支持的
- DOM 对象
- 好处：
  - 减少代码样式的重复性
  - 增加样式代码的扩展性
  - 提要要是代码的灵活性
  - 增多一种CSS 和 JS 的通讯方式
  - 不用深层遍历DOM 改变某个样式

- CSS 变量默认参数
  - var() 函数第二个参数表示默认值
  - CSS 变量是存在缺省值，只要定义正确，里面的值不对，结果会以默认值显示
```css
  body{--color:20px; background-color:#369;background-color:var(--color, #cd0000)}
  /* 显示结果为 transparent */
```
  - 定义变量值: 数值 - 带单位(不要加引号)  - 不带单位(不用后面直接写px单位，后面其实有一个空格，用calc())

```css
/* 变量区分大小写，只能作为属性值，不能作为属性名 */
:root {
  --red: #ff6f69;  /*Declaring a varibale*/
}

#title {
  color: var(--red);  /* Referencing it */
}
```

## 处理响应式

```html
<style>
  /* 
  1.需要适配的属性定义成变量
  - 列数 4
  2.
  */
  .box {
    --columns: 4;
    --margins: calc(24px / var(--columns));
    --space: calc(4px * var(--columns));
    --fontSize: calc(20px - 4 / var(--columns));
  }
  .box {
    width: 50%;
    min-width: 320px;
    margin: auto;
    overflow: hidden;
  }
  .cell {
    width: calc((100% - var(--margins) * var(--columns) * 2) / var(--columns));
    margin: var(--margins);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    background-color: #f0f3f9;
    float: left;
  }
  .cell-header {
    background: currentColor;
  }
  .cell-title {
    color: #fff;
    padding: var(--space);
    font-size: var(--fontSize);
  }

  .cell-content {
    height: 150px;
    padding: var(--space);
    font-size: var(--fontSize);
  }
  @media screen and (max-width: 1200px) {
    .box {
      --columns: 3;
    }
  }

  @media screen and (max-width: 900px) {
    .box {
      --columns: 2;
    }
  }

  @media screen and (max-width: 600px) {
      .box {
          --columns: 1;
      }
  }
</style>
<div class="box">
  <div class="cell" style="color: #F44336;">
    <header class="cell-header">
      <div class="cell-title">红色</div>
    </header>
    <main class="cell-content">改变浏览器的宽度</main>
  </div>
  <div class="cell" style="color: #E91E63;">
    <header class="cell-header">
      <div class="cell-title">粉色</div>
    </header>
    <main class="cell-content">会看到布局发生了变化</main>
  </div>
  <div class="cell" style="color: #9C27B0;">
    <header class="cell-header">
      <div class="cell-title">紫色</div>
    </header>
    <main class="cell-content">仅仅是通过CSS改变一个变量值实现</main>
  </div>
  <div class="cell" style="color: #00BCD4;">
    <header class="cell-header">
      <div class="cell-title">青色</div>
    </header>
    <main class="cell-content">这比传统的响应式处理要更省代码更好维护</main>
  </div>
  <div class="cell" style="color: #009688;">
    <header class="cell-header">
      <div class="cell-title">茶色</div>
    </header>
    <main class="cell-content">本例子主要为了演示响应式与变化效果</main>
  </div>
  <div class="cell" style="color: #4CAF50;">
    <header class="cell-header">
      <div class="cell-title">绿色</div>
    </header>
    <main class="cell-content">所以，至于布局变化细节是否合理就不用在意了。</main>
  </div>
</div>
```