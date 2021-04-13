# CSS 常见技巧

## 01. 设置 input 的 placeholder 的字体样式

```html
<style>
/* -webkit  -moz -ms  wepack - postcss  */
  input::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: red;
  }
</style>
<!-- 设置input的placeholder的字体样式  -->
<input type="text" placeholder="请设置用户名">
```

## 02. 单行和多行文本超出省略号
```html
<style>
  /* 省略号 4个 BFC mixin + 变量  框架 - 代码块 */
  .text1{
      width: 200px;
      white-space: nowrap;
      /* clip */
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .txt{
      display:-webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

      /* text-overflow: ellipsis;
      word-break: break-all; */
  }
</style>
<!-- 单行文本省略号 -->
<p class="text1">
  庭院深深，不知有多深？杨柳依依庭院深深，不知有多深？杨柳依依庭院深深，不知有多深？杨柳依依，...
</p>

<!-- 多行文本省略号 -->
<p class="txt">
  庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。
</p>
```

## 03. 负边距的使用实现 布局 4等分
```html
<style>
/* pc     4等分  中间间距 margin-left
    移动端  2等分  50% + 间距  两边没有间距 
*/
  *{margin:0;padding:0;}
  .item{margin-left:-3px;}
  .inner{
    /* box-sizing:border-box => padding + border*/
    float: left;
    width: 25%;
    height:100px;
    box-sizing:border-box;
    border-left:3px solid #fff;
  }
  /* 也可以flex 布局实现*/
  /* 
    .item{margin-left:-3px;display: flex}
    .inner{width:25%;height:100px;margin-left:3px}
   */

  .inner:nth-child(2n+1){background-color: rebeccapurple;}
  .inner:nth-child(2n){background-color: green;}
</style>

<div class="item">
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
</div>  
```
## 04. 利用定位同时设置方位 设置宽高
```html
 <style>
  * {margin: 0;padding: 0;}
  span {
      /* 全屏布局 - 京东+小米-移动分类页 200px - 子适应 */
      /* width:200px;  100% - 20px  calc() */
      border: 1px solid red;
      /* 100% - 200 -200 */
      position: absolute;
      left: 20px;
      right: 20px;
  }
</style>
<!-- 绝对定位和固定定位时，同时设置 left 和 right 等同于隐式地设置宽度  -->
<span>1</span>
```
## 05. 相邻兄弟选择器
```html
<style>
  ul {
    width: 500px;
    margin: auto;
    list-style: none;
    padding: 0;
    border: 1px solid red;
    text-align: center;
  }
  /* + 后面的元素才会起作用 */
  li+li{border-top:1px solid red;}
</style>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>
```
## 06. outline
```html
<style>
  * {padding: 0;margin: 0;}

  ul {
    list-style: none;
    width: 600px;
    margin: auto;
  }

  li {
    padding: 10px;
    border: 10px solid pink;
    outline-offset: -10px;
  }

  li+li {
    margin-top: -10px;
  }

  li:hover {
    /* border:10px solid gold; */
    outline:10px solid gold; 
  }
</style>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>
```
## 07. 更改滚动条样式
```html
<style>
  .scroll-container {
    width: 500px;
    height: 150px;
    border: 1px solid #ddd;
    padding: 15px;
    overflow: auto;
  }

  .scroll-container .row {
    margin: 0;
    line-height: 1.5;
  }

  .scroll-container::-webkit-scrollbar {
    width: 8px;
    background: white;
  }

  .scroll-container::-webkit-scrollbar-corner,
  /* 滚动条角落 */
  .scroll-container::-webkit-scrollbar-thumb,
  .scroll-container::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  .scroll-container::-webkit-scrollbar-corner,
  .scroll-container::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: rgba(180, 160, 120, 0.1);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }

  .scroll-container::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: #00adb5;
  }
</style>
<p class="scroll-container">
  庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。
</p>
```
## 08. CSS 绘制三角形
```html
<style>
/* 切图 - http 
  四个方位 20px   
*/
  .triangle1 {
    width: 0;
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: green greenyellow blue pink;
  }

  .triangle2 {
    width: 0;
    height: 0;
    border-width: 20px 20px 20px 20px;
    border-style: solid;
    border-color: green transparent transparent transparent;
  }
      
  .triangle3 {
    width: 0;
    height: 0;
    border-color: transparent red transparent transparent;
    border-style: solid;
    border-width: 22px 8px 0 0;
  }
</style>
<div class="triangle1"></div>
<div class="triangle2"></div>
<div class="triangle3"></div>
```
## 09. 虚线框的绘制
```html
<style>
  .dotted-line {
    width: 800px;
    margin: auto;
    padding: 20px;
    border: 1px dashed transparent;
    background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, #ccc .25em, white 0, white .75em);
  }
</style>
<p class="dotted-line">
  庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。庭院深深，不知有多深？杨柳依依，飞扬起片片烟雾，一重重帘幕不知有多少层。豪华的车马停在贵族公子寻欢作乐的地方，她登楼向远处望去，却看不见那通向章台的大路。春已至暮，三月的雨伴随着狂风大作，再是重门将黄昏景色掩闭，也无法留住春意。泪眼汪汪问落花可知道我的心意，落花默默不语，纷乱的，零零落落一点一点飞到秋千外。
</p>
```
## 10. 卡券效果制作
```html
<style>
  body {
    background-color: gainsboro;
  }

  .coupon {
    width: 300px;
    height: 100px;
    line-height: 100px;
    margin: 50px auto;
    text-align: center;
    position: relative;
    background: radial-gradient(circle at right bottom, transparent 10px, #ffffff 0) top right /50% 51px no-repeat,
        radial-gradient(circle at left bottom, transparent 10px, #ffffff 0) top left / 50% 51px no-repeat,
        radial-gradient(circle at right top, transparent 10px, #ffffff 0) bottom right / 50% 51px no-repeat,
        radial-gradient(circle at left top, transparent 10px, #ffffff 0) bottom left / 50% 51px no-repeat;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, .2));
  }

  .coupon span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    color: red;
    font-size: 50px;
    font-weight: 400;
  }
</style>
<p class="coupon">
  <span>200</span>优惠券
</p>

<p class="coupon">
  <span>200</span>优惠券
</p>

<p class="coupon">
  <span>200</span>优惠券
</p>
```
## 11. 隐藏文本
```html
<style>
  .logo {
    width: 190px;
    height: 80px;
    float: left;
    margin-top: 8px
  }

  .logo h1 {
    position: relative
  }

  .logo h1 .logo-bd {
    display: block;
    margin-left: 22px;
    padding-top: 58px;
    width: 142px;
    overflow: hidden;
    background: url(http://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png) 0 0 no-repeat;
    /* px em % rem vw vh vmin vmax  
    发挥你的想象力 让元素隐藏  文本  +  色块
    */
    /* text-indent:-9999px; */
    font-size:0;
  }
</style>
<div class="logo">
  <h1>
    <a href="#" role="img" class="logo-bd clearfix">淘宝网</a>
  </h1>
</div>
```
## 12. 表格边框合并
```html
<style>
  table{
    border-collapse: collapse;
  }
</style>
<table border='1'>
<!-- ... -->
</table>
```

