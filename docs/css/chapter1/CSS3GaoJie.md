# CSS3 高级属性

## 01. linear-gradient 线性渐变

linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片
- background: linear-gradient(color-stop1, color-stop2, ...)
- background: linear-gradient(direction, color-stop1, color-stop2, ...)
- background: linear-gradient(angle, color-stop1, color-stop2, ...)
```html
<style>
  div {
    float: left;
    width: 200px;
    height: 200px;
    margin: 20px;
  }
  .box1{
    /* red 上 - green 下  from to */
    background: linear-gradient(red 30%,green 50%);
  }
  .box2{
    /* 右  red  到  左 green  */
    background: linear-gradient(to left,red,green);
  }
  .box3{
    background: linear-gradient(to left top,red,green);
  }
  .box4{
    background: linear-gradient(90deg,red,green);
  }
</style>

<!-- 颜色A - B 渐变 -->
<div class="box1"></div>

<!-- 颜色A - B 渐变(带一个方位) -->
<div class="box2"></div>

<!-- 颜色A - B 渐变(带多个方位) -->
<div class="box3"></div>

<!-- 颜色A - B 渐变(带角度) -->
<div class="box4"></div>
```
## 02. radial-gradient 径向渐变
radial-gradient() 函数创建了一个图片，其由一个从原点辐射开的在两个或者多个颜色之前的渐变组成
- background: radial-gradient(#e66465, #9198e5)
- background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c)
- background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)
- background: radial-gradient(ellipse at top, #e66465, transparent),
              radial-gradient(ellipse at bottom, #4d9f0c, transparent)

```html
<style>
  div {
    float: left;
    width: 200px;
    height: 200px;
    margin: 20px;
  }
  .box1{
    background: radial-gradient(red,green);
  }
  .box2{
    background: radial-gradient(closest-side,green,blue);
  }
</style>
<!-- 颜色A - B 渐变 -->
<div class="box1"></div>

<!-- 颜色A - B 渐变(渐变的边缘形状与容器距离渐变中心点最近的一边相切) -->
<div class="box2"></div>

<!-- 颜色A - B 渐变(圆形（渐变的形状是一个半径不变的正圆）) -->
<div class="box3"></div>

<!-- 颜色A - B 渐变(椭圆形（轴对称椭圆）) -->
<div class="box4"></div>
```
## 03. background-size 背景尺寸
```html
<style>
  /* 背景八大  -  css3 */
  div {
    float:left;
    margin:20px;
    width:50px;
    height:50px;
  }
  /* px  %  cover contain auto 
  cover - 宽度 + 高度 - 50 * 50   裁剪
  contain -  宽度 / 宽度  - 留白

  容器比例   =  图片素材比例   雪碧图:宽度 高度
  rem + px 

  */
  .box1{
    background:#000 url(images/icon-wechat.png) no-repeat center;
    background-size: contain;
  }
  .box2{
    background:#000 url(images/icon-rp.png) no-repeat center;
    background-size: contain;
  }
  .box3{
    background:#000 url(images/icon-credit.png) no-repeat center;
    background-size: contain;
  }
</style>
<div class="box1"></div>

<div class="box2"></div>

<div class="box3"></div>

<div class="box4"></div>
<br>
<div class="box5"></div>
```
## 04. background-origin
```html
<style>
  /* 原点坐标点 */
  div {
    float: left;
    width: 500px;
    height: 300px;
    margin: 20px;
    border: 20px dashed red;
    padding: 30px;
    background: url(images/1.jpg) no-repeat;
    background-size: cover;
  }

  .box1 {
    /* 包含边框线 */
    background-origin: border-box;
  }

  .box2 {
    /* content 内容 */
    background-origin: content-box;
  }

  .box3 {
    /* 包含padding */
    background-origin: padding-box;
  }
</style>
<div class="box1"></div>

<div class="box2"></div>

<div class="box3"></div>

<div class="box4"></div>
```
## 05. background-clip 裁剪
```html
<style>
  div {
    float: left;
    width: 500px;
    height: 300px;
    margin: 20px;
    border: 20px dashed red;
    padding: 30px;
    background: url(images/1.jpg) no-repeat;
    background-size: cover;
  }

  .box1 {
    /* 边框往外 - 没有任何的效果 */
    background-clip: border-box;
  }

  .box2 {
    /* 内容往外 - padding + border */
    background-clip: content-box;
  }

  .box3 {
    /* padding往外 - border */
    background-clip: padding-box;
  }
  .box4{
    font-size:100px;
    font-weight:bold;
    -webkit-background-clip: text;
    background-clip: text;
    color:transparent
  }
</style>
<div class="box1"></div>

<div class="box2"></div>

<div class="box3"></div>

<div class="box4">IMOOC IMOOC IMOOC</div>
```
## 06. border-radius
```html
<style>
  div {
    width: 300px;
    height: 300px;
    margin: 20px;
    background-color: green;
      /* border-radius:50px/50px; */
    /* border-radius:50%; */
  }
</style>
<div class="box1"></div>
```
## 07. box-shadow
```html
<style>
  /* border + box-shadow */
  div {
    width: 300px;
    height: 300px;
    background-color: burlywood;
    /* 1.水平偏移 正- 右  负 - 左
        2.垂直偏移  正 - 下   负 - 上
        3.阴影的模糊度  只能是正值
        4.阴影的扩展大小 - 
        5.颜色  - rgba() alpha [0-1]
    */
    box-shadow:10px 10px 10px rgba(0,0,0,.4) inset,
                -20px -20px 10px rgba(0,0,0,.4);
  }
</style>
<div class="box1 active"></div>
```
## 08. text-shadow
```html
<style>
  .box1 {
    /* 
    没有扩展大小 + inset
    */
    font-size: 40px;
    font-weight: bold;
    text-shadow:10px 10px 10px red;
  }
</style>
<div class="box1">text-shadow</div>
```
## 09. filter 滤镜
CSS 属性将模糊或者颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染
- blur(px): 给图像设置高斯模糊
- brightness(%): 给图片应用一种线性乘法，使其看起来更亮或更暗
- contrast(%): 调整图像的对比度
- drop-shadow(h-shadow v-shadow blur spread color): 给图像设置一个阴影效果
- grayscale(%): 将图像转换为灰度图像
- hue-rotate(deg): 给图像应用色相旋转
- invert(%): 反转输入图像
- opacity(%): 转化图像的透明程度
- saturate(%): 转换图像饱和度。值定义转换的比例
- sepia(%): 将图像转换为深褐色
```html
<style>
  /* blur + opacity + drop-shadow 
  */
  .blur {
    /* 高斯模糊 */
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }

  .brightness {
    -webkit-filter: brightness(0.30);
    filter: brightness(0.30);
  }

  .contrast {
    -webkit-filter: contrast(180%);
    filter: contrast(180%);
  }

  .grayscale {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .huerotate {
    -webkit-filter: hue-rotate(180deg);
    filter: hue-rotate(180deg);
  }

  .invert {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }

  .opacity {
    /* 透明度 */
    -webkit-filter: opacity(50%);
    filter: opacity(50%);
  }

  .saturate {
    -webkit-filter: saturate(7);
    filter: saturate(7);
  }

  .sepia {
    -webkit-filter: sepia(100%);
    filter: sepia(100%);
  }

  .shadow {
    /* 阴影  */
    -webkit-filter: drop-shadow(8px 8px 10px green);
    filter: drop-shadow(8px 8px 10px green);
  }
</style>
<div class="blur"><img src="images/1.jpg" alt=""></div>

<div class="brightness"><img src="images/1.jpg" alt=""></div>

<div class="contrast"><img src="images/1.jpg" alt=""></div>

<div class="grayscale"><img src="images/1.jpg" alt=""></div>

<div class="huerotate"><img src="images/1.jpg" alt=""></div>

<div class="invert"><img src="images/1.jpg" alt=""></div>

<div class="opacity"><img src="images/1.jpg" alt=""></div>

<div class="saturate"><img src="images/1.jpg" alt=""></div>

<div class="sepia"><img src="images/1.jpg" alt=""></div>

<div class="shadow"><img src="images/1.jpg" alt=""></div>
```
## 10. clip-path
```html
<style>
  /* logo */
  /* 圆形circle（半径at圆心坐标） polygon() */
  .circle {
    width: 100px;
    height: 100px;
    background: #0cc;
    clip-path: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
  }

  /* 椭圆形ellipse（长、短轴半径at圆心坐标） */
  .ellipse {
    width: 100px;
    height: 100px;
    background: #aaa;
    clip-path: ellipse(25% 50% at 50% 50%);
    -webkit-clip-path: ellipse(25% 50% at 50% 50%);
  }

  /* 内置矩形inset (上右下左的边距round上右下左圆角) */
  .inset {
    width: 100px;
    height: 100px;
    background: #99f;
    clip-path: inset(10px 20px 30px 10px round 20px 5px 50px 0);
    -webkit-clip-path: inset(10px 20px 30px 10px round 20px 5px 50px 0);
  }

  /* 正三角形 */
  .triangle {
    width: 100px;
    height: 87px;
    background: #c00;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }

  /* 正方形 */
  .square {
    width: 100px;
    height: 100px;
    background: #069;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
</style>
<div class="circle"></div>
<div class="ellipse"></div>
<div class="inset"></div>
<div class="triangle"></div>
<div class="square"></div>
```



