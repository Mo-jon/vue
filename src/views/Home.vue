<template>
  <div class="container">
    <Nav></Nav>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Nav,
    HelloWorld
  }
};
</script>
<style scoped lang='scss'>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>