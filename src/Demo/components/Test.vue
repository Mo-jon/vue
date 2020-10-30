<template>
  <div  style="background: #ccc">
    <h1>sync使用</h1>
    <span>{{ title }}</span>
    <p>{{ syncText }}</p>
    <p>{{ text }}</p>
    <button @click="updateProps">点击我更新sync数据</button>
  </div>
</template>

<script>
export default {
  name: "TextDocument",
  props: {
    title: String,
    text: String,
    syncText: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateProps() {
      this.count++;
      this.$emit("update:title", `v-bind.sync-title：${this.count}`);
      this.$emit("update:syncText", `更新 sync 数据${this.count}`);
    },
  },
};
</script>

<style>
</style>