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

- BEM 命名法
  - BEM：块(block)、元素(element)、修饰符(modifier)
  - block 代表了更高级别的抽象或组件
  - block__element 代表.block 的后代，用于形成一个完整的 .block 的整体
  - block--modifier 代表 .block 的不同状态或不同版本，用于修饰

页面模块的常用命名（也可以互相结合：submenu/mainnav/subnav/leftsidebar/topnav/dropmenu/...）

<table>
  <tr>
    <td>头：header</td>
    <td>导航：nav</td>
    <td>菜单：menu</td>
    <td>友情链接：friendlink</td>
  </tr>
  <tr>
    <td>页面外围包裹：wrapper</td>
    <td>子导航：subnav</td>
    <td>子菜单：submenu</td>
    <td>下载：download</td>
  </tr>
  <tr>
    <td>页面主题：main</td>
    <td>广告：banner</td>
    <td>侧栏：sidebar</td>
    <td>小技巧：tips</td>
  </tr>
  <tr>
    <td>内容：content</td>
    <td>标志：logo</td>
    <td>栏目：column</td>
    <td>滚动：scroll</td>
  </tr>
  <tr>
    <td>页脚：footer</td>
    <td>搜索：search</td>
    <td>热点：hot</td>
    <td>上一个：prev</td>
  </tr>
  <tr>
    <td>版权：copyright</td>
    <td>登录条：loginbar</td>
    <td>新闻：news</td>
    <td>下一个：next</td>
  </tr>
  <tr>
    <td>标签页：tab</td>
    <td>列表：list</td>
    <td>文本：text</td>
    <td>标题：title</td>
  </tr>
  <tr>
    <td>加入：joinus</td>
    <td>指南：guide</td>
    <td>服务：service</td>
    <td>状态：status</td>
  </tr>
  <tr>
    <td>投票：vote</td>
    <td>注册：register</td>
    <td>摘要/概要：summary</td>
    <td>合作伙伴：partner</td>
  </tr>
  <tr>
    <td>左中右：left、center、right</td>
    <td>图标：icon</td>
    <td>注释：note</td>
    <td>商标：brand/label</td>
  </tr>
  <tr>
    <td>面包屑：breadcrumb</td>
    <td>更多：extended/more</td>
    <td>线：line</td>
    <td>链接：link</td>
  </tr>
</table>


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
