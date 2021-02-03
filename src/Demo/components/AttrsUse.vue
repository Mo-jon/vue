<template>
  <div class='attrs'>
    <h6>$attrs、$listeners、inheritAttrs使用</h6>
    <label for="attrs">{{$attrs.label}}</label>
    <input id="attrs" type="text" v-bind="$attrs">
    <button @click="$emit('clickAttrs','触发$listeners事件')">触发$listeners事件</button>
  </div>
</template>

<script>
export default {
  name: "ComponentName",
  inheritAttrs: false, // 不在 <div class='attrs'> 元素显示 $attrs 的属性
  data() {
    return {};
  },
  mounted() {
    console.log("$attrs", this.$attrs);
    console.log("$listeners", this.$listeners);
  },
};
</script>

<style scoped lang='scss'>
.attrs {
  overflow: hidden;
  background-color: #ccc;
}
</style>