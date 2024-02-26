<template>
  <div class="basic block">
    <Button @click="open"> 可关闭消息 </Button>
  </div>
</template>

<script setup>
import { createMessage, Button } from "study-element";
const open = () => {
  createMessage({ message: "hello world", showClose: true, duration: 0 });
};
</script>
