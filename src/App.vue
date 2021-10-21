<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ColorPick from './components/ColorPicker.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello Vue 3 + Vite</h1>
  <ColorPick></ColorPick>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: @light-theme-color;
  margin-top: 60px;
}
</style>
