<template>
  <div class="page-header">
    <div class="page-header__switch">
      <el-switch
        v-model="isLightMode"
        @change="handleSwitch"
        active-text="暗黑模式"
        inactive-text="明亮模式"
      />
    </div>
    <div class="page-header__picker">
      <span>采色板</span>
      <el-color-picker v-model="color" @change="handlePick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import changeColor from "../util/changeColor";

export default defineComponent({
  setup() {
    const color = ref("#409EFF");
    const isLightMode = ref(false);
    return {
      color,
      isLightMode,
    };
  },

  methods: {
    handlePick(value: string) {
      changeColor('--theme-color', value);
    },

    handleSwitch(value: boolean) {
      if (value) {
        changeColor('--theme-color', '#111');
        changeColor('--theme-font-color', '#fff');
      } else {
        changeColor('--theme-color', '#fff');
        changeColor('--theme-font-color', '#111');
      }
    },
  },
});
</script>

<style lang="less" scoped>
.page-header {
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: cornsilk;
  &__switch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__picker {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
