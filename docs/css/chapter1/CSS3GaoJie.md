# CSS3 高级属性

## 01.linear-gradient 线性渐变

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
### radial-gradient 径向渐变
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
### 04. background-size 背景尺寸
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
###
###



