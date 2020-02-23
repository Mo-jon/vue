<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- 全局变量 -->
    <p>这里有全局样式、全局 scss 变量的使用</p>

    <!-- 全局样式 -->
    <button class="button">按钮</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  // 全局变量
  color: $theme-color;
}
</style>
