<script setup>
import { ref } from "vue";
import {Input} from "study-element";
const test = ref("");
</script>
<template>
  <Input v-model="test" placeholder="基础文本框，请输入" />
  <span>{{ test }}</span>
  <input type="text" />
</template>
