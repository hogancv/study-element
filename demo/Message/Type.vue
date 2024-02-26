<template>
  <div class="basic block">
    <Button type="success" @click="open('success')"> Success </Button>
    <Button type="info" @click="open('info')"> Info </Button>
    <Button type="warning" @click="open('warning')"> warning </Button>
    <Button type="danger" @click="open('danger')"> Danger </Button>
  </div>
</template>

<script setup>
import { createMessage, Button } from "study-element";
const open = (type) => {
  createMessage({ message: "hello world", type });
};
</script>
