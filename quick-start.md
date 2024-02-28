# 快速上手

## 安装

```bash
npm i study-element -S
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import StElement from "study-element";
// 引入样式
import "study-element/dist/index.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(StElement).mount("#app");
```

```vue
<template>
  <st-button>我是Button</st-button>
</template>
```

**单个导入**

StElement 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <Button>我是StButton</Button>
</template>
<script>
import { Button } from "study-element";
export default {
  components: { Button },
};
</script>
```
