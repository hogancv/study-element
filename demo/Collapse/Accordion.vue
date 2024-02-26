<template>
  <div class="basic block">
    <Collapse v-model="openedValue" accordion>
      <CollapseItem name="a" title="Title A">
        <div>AAAAAAAAAAAA</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div>BBBBBBBBBBBBBB</div>
      </CollapseItem>
      <CollapseItem name="c" title="Title C">
        <div>CCCCCCCCCCCCCCCCCC</div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Collapse, CollapseItem } from "study-element";
const openedValue = ref("a");
</script>
