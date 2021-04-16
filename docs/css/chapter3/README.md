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

```css
/* 变量区分大小写，只能作为属性值，不能作为属性名 */
:root {
  --red: #ff6f69;  /*Declaring a varibale*/
}

#title {
  color: var(--red);  /* Referencing it */
}
```