# 权重和命名

## 权重

优先级等级
- 相同权重后写的生效
- 顺序：!important > 行内样式 > id选择器 > 类选择器 > 标签选择器 > 通配符 > 继承 > 浏览器默认

| 选择器         | 权值           | 权级  |
| ------------- |:-------------:| -----:|
| !important    | 10000     | 5级 |
| 内联样式       | 1000      | 4级 |
| id 选择器      | 100       | 3级 |
| class 选择器   | 10        | 2级 |
| 元素选择器      | 1         | 1级 |
| 通配符选择器    | 0         | 0级 |

- 0级： 通配符选择器(*)、选择符(+、>、~、空格、||)、:not()
- 1级： 元素、关系、伪元素
- 2级： 类选择器、属性选择器、伪类
- 3级： ID 选择器
- 4级： style 内联选择器
- 5级： !important

## 题目
```html
<ul class="shopping-list" id="awesome">
  <li><span>Milk</span></li>
  <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>
```
```css
/*Sausage 最后颜色 -  权值  1 
ul   父元素
li   Sausage
*/
ul{color: red;}
li {color: blue;}

/* =================================================== */

/* 
ul 继承父元素
li Sausage
*/
ul {color: red;}
#must-buy {color: blue;}
/* =================================================== */
/* Sausage 
.shopping-list .favorite  => li   20
#must-buy  => li   100 
*/
.shopping-list .favorite {color: red;}
#must-buy {color: blue;}
/* =================================================== */

/* 
  ul#awesome #must-buy  =>  li
  .favorite span  => span   !important
*/
ul#awesome #must-buy {color: red;}
.favorite span {color: blue !important;}
/* =================================================== */

/*  
  ul.shopping-list li .highlight  =>  span
  ul.shopping-list li .highlight:nth-of-type(odd)  => span:nth-of-type(odd)  => span
*/

/* 1 + 10 + 1 + 10 = 22  */
ul.shopping-list li .highlight {color: red;}

/* 1+ 10 + 1 + 10 + 10 = 32 */
ul.shopping-list li .highlight:nth-of-type(odd) {color: blue;}
/* =================================================== */

/* 
  #awesome .highlight:nth-of-type(1):nth-last-of-type(1) => 
  span:nth-of-type(1):nth-last-of-type(1)  => span

  #awesome .favorite:not(#awesome) .highlight  => span
  
*/

  /* 100 + 10 + 10 + 10 = 130  */
  #awesome .highlight:nth-of-type(1):nth-last-of-type(1) {color: blue;}

  /* 100 + 10 + 0 + 100 + 10 = 220 */
  #awesome .favorite:not(#awesome) .highlight {color: red;}
/* =================================================== */
```
## 命名
- 驼峰命名法
- 帕斯卡命名法（所有单词首字母大写）
- 匈牙利命名法

  在名称前面加上一个或多个小写字母作为前缀，例如：head_navigation、red_navMenuButton

- 

```html
<!-- 
  骆驼命名法    
  帕斯卡命名法
  匈牙利命名法
  BEM命名法
-->

<!-- 组件复用 +  自定义 -->

<!-- 京东 -->
<div id="J_app">
  <div class="J_header"></div>
  <div class="jd_container"></div>
  <div class="J_footer"></div>
</div>

<!-- 小米 烤串 -->
<div id="app">
  <div class="site-header"></div>
  <div class="home-main"></div>
  <div class="site-footer"></div>
</div>
```
