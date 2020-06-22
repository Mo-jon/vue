<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{syncText}}</p>
    <p>{{text}}</p>
    <button @click="updateProps">点击我更新props数据</button>
  </div>
</template>

<script>
export default {
  name: "TextDocument",
  props: {
    title: String,
    text: String,
    syncText: String
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    updateProps() {
      this.count++;
      this.$emit("update:title", `这是一个新标题${this.count}`);
      this.$emit("update:syncText", `更新 sync 数据${this.count}`);
    }
  }
};
</script>

<style>
</style>