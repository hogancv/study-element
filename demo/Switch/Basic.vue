<script setup>
import { ref } from 'vue'
import {Switch} from 'study-element'
const test = ref(false)
</script>
<template>
  <Switch v-model="test" />
</template>