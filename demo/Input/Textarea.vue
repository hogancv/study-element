<script setup>
import { ref } from "vue";
import {Input} from "study-element";
const test = ref("");
</script>
<template>
  <Input v-model="test" placeholder="可以是一个 Textarea" type="textarea">
  </Input>
</template>
