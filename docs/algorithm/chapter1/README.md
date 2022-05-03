## coding style

**降低代码耦合度**

[133.克隆图](https://leetcode-cn.com/problems/clone-graph/)
> 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

图中的每个节点都包含它的值 `val（int）` 和其邻居的列表（`list[Node]`）。
```java
class Node {
  public int val;
  public List<Node> neighbors;
}
```
使用的是 BFS 宽度优先搜索算法右边的代码
- 一边做宽度优先搜索找到所有的点
- 一边又复制所有的点
- 一边又复制所有的边
- 并且在复制边的时候又复制点
```javascript
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node === null) return null
  let nodes = [node]
  let start = 0
  let mapping = new Map()
  while (start < nodes.length) {
    let curt_node = nodes[start]
    let new_node, new_neighbor
    start += 1
    if (mapping.has(curt_node)) {
      new_node = mapping.get(curt_node)
    } else {
      new_node = new Node(curt_node.val)
      mapping.set(curt_node, new_node)
    }
    for (const neighbor of curt_node.neighbors) {
      if (mapping.has(neighbor)) {
        new_neighbor = mapping.get(neighbor)
      } else {
        new_neighbor = new Node(neighbor.val)
        mapping.set(neighbor, new_neighbor)
        nodes.push(neighbor)
      }
      new_node.neighbors.push(new_neighbor)
    }
  }
  return mapping.get(node)
}
```
**更好的实现方法**

将整个算法分解为三个步骤：
1. 找到所有点
2. 复制所有点
3. 复制所有边
```js
var cloneGraph = function(node) {
  if (node === null) return null

  let nodes = []
  let mapping = new Map()
  // step 1: find nodes
  nodes = find_nodes_by_bfs(node)
  // step 2: copy nodes
  copy_nodes(nodes, mapping)
  // step 3: copy edges
  copy_edges(nodes, mapping)

  return mapping.get(node)
  
}

function find_nodes_by_bfs(node) {
  let nodes = [node]
  let start = 0
  let visited = new Set(nodes)

  while (start < nodes.length) {
    let curt_node = nodes[start++]

    for (const neighbor of curt_node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        nodes.push(neighbor)
      }
    }
  }
  return nodes
}
function copy_nodes(nodes, mapping) {
  for (const curt_node of nodes) {
    let new_node = new Node(curt_node.val)
    mapping.set(curt_node, new_node)
  }
}
function copy_edges(nodes, mapping) {
  for (const old_node of nodes) {
    const new_node = mapping.get(old_node)
    for (const neighbor of old_node.neighbors) {
      const new_neighbor = mapping.get(neighbor)
      new_node.neighbors.push(new_neighbor)
    }
  }
}

```

### 好的代码质量(Coding Quality)

- Bug Free
- 好的代码风格(Coding Style),包括`变量名命名规范有意义`，`合理的使用空格`，`善用空行`
- 容易让人读懂的逻辑。要把复杂的事情用简单的方式，别把简单的事情写复杂了。
- 没有冗余代码
- 有边界检测和异常处理

### 提高 Coding Quality 的十二个技巧

- Coding Style 相关
  - 二元运算符两边加空格，单元运算符不加空格
  - 花括号和 for, if 之间要加空格，圆括号和 if 之间要加空格
  - 用空行分隔开不同的逻辑块
  - 逗号后面加空格
- Readability 相关
  - 函数名和变量名用1-2个单词作为名称
  - 确保一个函数内部不超过3层缩进(indention)
  - `多用子函数来减少入口函数的代码量`
  - `多用 continue 少用 if`
```js
  for ...
    if 条件1
    做一些处理...
      if 条件2
        做一些处理...
        做一些处理...
        做一些处理...
        做一些处理...
        做一些处理...


  for ...
    if !条件1
      continue
    做一些处理...
    if !条件2
      continue
    做一些处理...
    做一些处理...
    做一些处理...
    做一些处理...
    做一些处理...


  if 异常情况不够
    ...
    return


  if (A) {
    if (B) {
      ...
    } else {
      ...
    }
  } else {
    if (B) {
      ...
    } else {
      ..
    }
  }


  if (A && B) {
    ...
  }

  if (A && !B) {
    ...
  }
  ...
  ...
```

- Bug Free 相关
  - 不管有没有可能出问题，都要对入口函数的参数进行异常检测
  - 访问一个下标的时候，一定要确保这个下标不会越界
  - 访问一个对象的属性或者方法是，一定要确保这个对象不是空
  - 不用全局变量

### 四个复杂度

- 时间复杂度-核心考察点
  ```
    P问题 Polynomial
    O(n), O(n^2), O(n^3)
    O(n + m), O(✔n), O(1)
    O(logn), O(nlogn)

    NP问题 Nondeterministic Polynomial
    O(2^n), O(n^n), O(n!)

    只考虑最高项
    O(2^N + N^2) = O(2^N)
    o(N^3 + 1000N^2) = O(N^3)

    不考虑常数项和系数
    O(100N + 1000) = O(N)
    O(logN) = O(log(N^2)) = O(log4(N))

    小练习：
      O(max(n, m)) 和 O(n + m) 比较
      --> n + m > max(n, m) > (n + m) / 2
      --> O(n + m) > O(max(n, m)) > O((n + m) / 2)
      --> O(n + m) == O(max(n, m))

    时间复杂度为 O(N) 的算法有哪些？
      双指针算法、打擂台算法
      单调栈算法、单调队列算法
      ...
  ```
- 空间复杂度-次要考察点
- 编程复杂度-能看得懂
- 思维复杂度-能想得出

