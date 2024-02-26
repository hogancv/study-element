<script setup>
import { ref } from "vue";
import {Input} from "study-element";
const test = ref("some text");
</script>
<template>
  <Input v-model="test" disabled />
</template>
