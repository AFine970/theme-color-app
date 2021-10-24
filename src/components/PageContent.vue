<template>
  <div class="page-content">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue 3 + Vite</h1>
    <h2>快速换肤实现方案</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="less" scoped>
.page-content {
  height: calc(100vh - 60px);
  text-align: center;
  background-color: @theme-color;
  color: @theme-font-color;
}
</style>
