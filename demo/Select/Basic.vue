<script setup>
import { ref } from "vue";
import { Select } from "study-element";
const test = ref("");
const options2 = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4", disabled: true },
];
</script>
<template>
  <Select v-model="test" placeholder="基础选择器，请选择" :options="options2" />
</template>
