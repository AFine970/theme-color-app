<template>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color" @change="onPick"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import changeColor from "../util/changeColor";

export default defineComponent({
  setup() {
    const color = ref("#409EFF");
    return {
      color,
    };
  },

  methods: {
    onPick(value: string) {
      changeColor(value)
    }
  }
});
</script>

<style lang="less" scoped>
.demo-color-block {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  .demonstration {
    margin-right: 16px;
  }
}
</style>
