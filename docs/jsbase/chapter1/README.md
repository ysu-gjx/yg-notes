# JS 中数据类型

原始值类型「基本数据类型」

    + undefined
    + null
    + boolean
    + number
      + NaN
      + Infinity
    + string
    + symbol
      + 可以做为对象的属性（属性的类型不是传统的String了）
      + 创建唯一值的
    + bigint

对象类型「下数所说的应该都是基于构造函数创造出来的实例」

    + Object 普通对象
    + Array 数组对象
    + RegExp 正则对象
    + Date 日期对象
    + Error 错误对象
    + Set/Map
    + ----
    + Math 数学函数对象
    + JSON JSON对象
    + ArrayBuffer DataView
    + ----
    + 生成器函数
    + Promise Proxy Reflect
    + ----
    + Number对象 \ String对象 \ Boolean布尔对象 \ Symbol符号对象 ...

`symbol`类型的应用：作为对象的非String类型的属性、创建唯一标识「统一宏管理」、内置原理也是基于Symbol的一些属性实现的...

```js
let syml = Symbol('A')
let syml2 = Symbol('A')
console.log(syml === syml2)  // false

let c = Symbol('A')
let obj = {
  name: 'zs',
  [c]: 100,
  [Symbol()]: 200
}
console.log(obj[Symbol('A')])  // -> undefined
console.log(obj[c]) // -> 100
console.log(Object.getOwnPropertySymbols(obj))  // -> [Symbol(), Symbol(A)]

/*
  Symbol.hasInstance
  Symbol.toPrimitive
  Symbol.toStringTag
  Symbol.iterator
// ... */
```

`bigint` 超大数字处理

`Number.MAX_SAFE_INTEGER` 超过安全数字，在运算结果就不一定准确了

// 场景：前后端数据通信中，服务器是可以存储超长数字，但是如果把大数返回客户端，处理起来不一定准确

## 类型检测
数据类型检测
`typeof / instanceof constructor / Object.prototype.toString.call`

<img :src="$withBase('/assets/typeof.jpg')" />

- [typeof](https://262.ecma-international.org/10.0/#sec-typeof-operator)
  * typeof 返回字符串
  * typeof 实现CALL的对象 「函数、箭头函数、生成器函数、构造函数」  --> 'function'
  * typeof 剩下未实现CALL的对象  --> 'object'

- **instanceof**

  new 一个对象，那么这个新对象就是它原型链继承上面的对象了，通过 instanceof 我们能判断这个对象是否是之前那个构造函数生成的对象，这样就基本可以判断出这个新对象的数据类型。
```js
function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if(typeof left !== 'object' || left === null) return false;

  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);

  while(true) {                  //循环往下寻找，直到找到相同的原型对象
    if(proto === null) return false;
    if(proto === right.prototype) return true;//找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto);
  }
}

// 验证一下自己实现的myInstanceof是否OK
console.log(myInstanceof(new Number(123), Number));    // true
console.log(myInstanceof(123, Number));                // false
```
- **Object.prototype.toString**  
```js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```

- 通用检测函数
```js
function getType(obj){
  let type  = typeof obj
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')  // 注意正则中间有个空格
}
```
##  数据类型转换

对象转换为数字或者字符串：「字符串拼接、数学运算、特殊方法处理、==比较（隐式转换、显式转换）...」
  1. 首先检测对象的 Symbol.toPrimitive 这个属性，获取其原始值
  2. 如果没有这个属性，则继续调用它的valueOf，也是获取原始值

     原始值：`number\string\boolean\null\undefined\symbol\bigint`
  3. 如果值不是原始值，则继续调用toString转换为字符串
  4. 再把字符串基于Number转换为数字
```js
let obj = {
  name: 'zs'
}
console.log(obj - 10)  //数学运算：先把obj隐式转换为数字，再进行运算

let obj2 = {
  name: 'zs',
  [Symbol.toPrimitive](hint) {
    // hint检测到浏览器隐式规定的转换类型:'number'/'string'/'default'
    // console.log(hint)
    return 10
  }
}
console.log(obj2 - 10) // -> 0  hint -> number
```
### 隐式类型转换

凡是通过逻辑运算符 (&&、 ||、 !)、运算符 (+、-、*、/)、关系操作符 (>、 <、 <= 、>=)、相等运算符 (==) 或者 if/while 条件的操作，如果遇到两个数据类型不一样的情况，都会出现隐式类型转换

'==' 的隐式类型转换规则

==相等  ===绝对相等
  - ==在比较的时候，如果两边类型不一致，则转换为相同的数据类型
    
    如果其中一个是 Symbol 类型，那么返回 false

    `NaN==NaN -> false    Object.is(NaN,NaN)->true`

    `null==undefined -> true    null===undefined -> false `  
    
    `null & undefined`和其他任何值比较都是不相等的

    对象==字符串   对象转换为字符串

    **剩余的情况都是转换为数字**

  - ===类型不一致，不会转换，直接false
```js
let a = ?
if (a == 1 && a == 2 && a == 3) {
  console.log('OK')
}
```
**第一类：隐式进行数据类型转换的时候进行处理的**
```js
var a = {
  i: 0
}
// valueOf / toString 也可以 
a[Symbol.toPrimitive] = function () {
  return ++this.i
}

// 数组方式
var a2 = [1, 2, 3]
// a2.shift() -> 1, 2, 3
a2.toString = a2.shift
```
**第二类 数据劫持  也可以用 es6 Proxy**
```js
let i = 0
// var a = 12  全局上下文中，基于var / function 声明变量，也相当于给window 设置了全局变量
// 浏览器环境 设置在 window 上
Object.defineProperty(window, 'a', {
  get() {
    return ++i
  }
})

console.log(a)  // 1
console.log(a)  // 2
console.log(a)  // 3
```

### 强制类型转换

强制类型转换方式包括 Number()、parseInt()、parseFloat()、toString()、String()、Boolean()

把其它数据类型转换为 Number 类型：
  `Number([val])` 隐式转换一般调取的都是这个方法  「浏览器有自己的特殊处理，针对于每一种情况都有详细的规则」

  - 如果是布尔值，true 和 false 分别被转换为 1 和 0；

  - 如果是数字，返回自身；

  - 如果是 null，返回 0；

  - 如果是 undefined，返回 NaN；

  - 如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为 0；如果不是以上格式的字符串，均返回 NaN；

  - 如果是 Symbol，抛出错误；

  - 如果是对象，前面介绍过了

  `parsetInt/parseFloat([val])` 
  `parsetInt([val],[radix])`处理机制
  - [val] 必须是一个字符串，如果不是，则也要默认转换为字符串
  - [radix]不设置(或者写的是零)：正常都是按照10处理的，如果字符串是以”0x“开始的，默认值是16...
  - 先在[val]中，找到所有符合[radix]进制的内容（从左到右查找，直到遇到不符合的为止「不论后面是否还有符合进制的，都不在查找了」），然后再把找到的内容看做[radix]进制，转换为十进制
  - [radix]范围  2~36，除了0以外(0->10/16)，不在这个范围内，结果都是NaN
```js
// 把其它进制转换为10进制？
// '10101'  2机制 -> 10进制
// 1*2^0 + 0*2^1 + 1*2^2 + 0*2^3 + 1*2^4

// parseInt('12px')  -> parseInt('12px', 10) -> 在字符串中找到所有符合10进制的内容 '12' -> 最后把 '12'看做10进制，转换为10进制 -> 12
// parseInt('12', 1) -> NaN
// parseInt(null) -> parseInt('null', 10) -> NaN

let arr = [27.2,0,'0013','14px',123];
arr = arr.map(parseInt);
console.log(arr);
// arr.map((item, index, array) => {
//   return parseInt(item, index, array)
//   27.2   0     27
//   0      1     NaN
//   '0013' 2     1
//   '14px' 3     1
//   123    4     3 + 2*4 + 1*16 = 27
// })

 ```
把其它数据类型转换为 Boolean 类型：

    只有 0 / NaN / null / undefined / 空字符串  转换为false, 其余都是true
    场景
      if (...) {}
      ! 取反
      !! 转换为布尔
      ...

**'+' 的隐式类型转换规则**
```
+ 两边都有值，有一边出现字符串或者对象，则为字符串拼接
    特殊：{} + 10 -> 10  {}看做代码块(ES6 块级上下文)，真正运算的只有 +10 -> 10
          ({} + 10) -> '[object Object]10'
+ 只有一边或者 ++x 再或者 x++,都是数学运算
    +'10' -> 10
    10+(++x) 先累加  在运算
    10+(x++) 先运算  在累加
    x++ !== (x+=1 == x=x+1)
```
```js
let result = 100 + true + 21.2 + null + undefined + "hello" + [] + null + 9 + false;
console.log(result);
// -> 100 + 0 + 21.2 + 0 + undefined -> NaN + "hello" + "" -> "NaNhello" -> "NaNhellonull9false"

// 10+{} -> "10[object Object]"  原本是想把{}变为数字，但是Symbol.toPrimitive/valueOf/toString，调到toString变为字符串，此时符合了有一边变为字符串了，则是字符串拼接

let x = '10'
console.log(++x) // -> 11

x = '10'
console.log(x++) // -> 10

x = '10'
x += 1
console.log(x) // -> '101'
```


