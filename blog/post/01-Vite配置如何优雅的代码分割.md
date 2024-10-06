---
title: Vite配置如何优雅的code spliiting代码分割
date: 2022/08/28
desc: Vite配置如何优雅的code spliiting代码分割
tags: ['#全部','#前端']
---

[[toc]]

## Vite如何配置分割代码

### 1.什么是代码分割/code spliiting

前端生态 rollup 和 webpack都有的概念。
如果把所有代码都打包到一起，可能最终的代码非常大。从而影响加载时间。

而且，很多代码是初始加载时，不需要的。因此，我们可以根据代码使用的紧急程度，将代码分割打包后，可以按需加载。

### 2.Vite 中 rollup code spliiting分割默认方法原理

rollup code-spliiting代码分割 默认是由es6 esm(ECMAScript Module)的`import`, `export` js模块化功能实现的，CommonJS标准无法实现。

```js
// 提前安装rollup
npm i -g rollup
```

案例
目录

```
├─dist
└─src
        foo.js
        main.js
        main1.js
```

**（1）按照动态导入语句分割打包测试。**

```js
//// foo.js
export default 'hello foo!';

// main.js文件
// 动态导入案例1
export default function () {
    import('./foo.js')
    .then(() => {
        // console.log(导入成功);
    })
    .catch(() => {});
}
```

```js
执行 rollup src/main.js   -f cjs -d dist
```

打包/main.js 生成两个文件

![image.png](//p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cdec8186d78a401ab6da25cc4d37d66d~tplv-k3u1fbpfcp-watermark.image?)
打包后的代码展示

```js
// dist\foo-xxxxxx.js
'use strict'
const foo = 'hello foo!'
exports.default = foo

// dist\main.js
'use strict'

// 动态导入案例1
function main() {
  Promise.resolve().then(() => { return require('./foo-e385385a.js') })
    .then(() => {
      // console.log(导入成功);
    })
    .catch(() => {})
}

module.exports = main
```

按照动态导入语句分割打包测试验证成功。

**（2）按照资源导入入口点分割打包测试。**

```js
// foo.js
export default 'hello foo!'
```

```js
// main.js文件
// 资源静态导入案例1
import foo from './foo.js';
export default function () {
    console.log(foo);
}

// main1.js文件
// 资源静态导入案例2
import foo from './foo.js';
export default function () {
    console.log(foo);
}
```

```js
执行 rollup src/main.js src/main1.js  -f cjs -d dist
```

打包/main.js和/main1.js文件 生成三个文件

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8a559d52625410c9a4dcdc9b34821ab~tplv-k3u1fbpfcp-watermark.image?)
打包后的代码展示

```js
// dist\foo-xxxx.js
'use strict'

var foo = 'hello foo!'

exports.foo = foo

// dist\main.js

'use strict'
var foo = require('./foo-f41bffe6.js')
// 静态导入案例
function main() {
  console.log(foo.foo)
}
module.exports = main

// dist\main1.js
'use strict'
var foo = require('./foo-f41bffe6.js')
function main1() {
  console.log(foo.foo)
}
module.exports = main1
```

按照资源导入入口点分割打包测试验证成功。

**（3）manualChunks函数 手动自定义分割。（下面的案例）**

### 3.如何在Vite中配置（vite.config.ts）代码分割/code spliiting （核心关键）

### Vite代码分割方法1

```js
// vite.config.ts
build: {
    // rollup 配置
    rollupOptions: {
        output: {
            // key自定义 value[] 插件同步package.json名称 或 src/相对路径下的指定文件 （自己鼠标点击进去可以看manualChunks ts类型）
            manualChunks: {
                // vue vue-router合并打包
                vue: ['vue', 'vue-router'],
                echarts: ['echarts'],
                lodash: ['lodash'],
                // 两个文件合并成一个helloWorld文件
                helloWorld: ['src/components/HelloWorld.vue','src/components/HelloWorld1.vue'],
                ...
            }
        }
    }
}
```

### Vite代码分割方法2

```js
// vite.config.ts
build: {
    // rollup 配置
    rollupOptions: {
        output: {
            manualChunks(id: any): string {
                if (id.includes("style.css")) {
                    // 需要单独分割那些资源 就写判断逻辑就行
                    return 'src/style.css';
		}
                if (id.includes("HelloWorld.vue")) {
                    // 单独分割hello world.vue文件
                    return 'src/components/HelloWorld.vue';
		}
                // // 最小化拆分包
                if (id.includes("node_modules")) {
                    return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
		}
            }
        }
    }
}
```
