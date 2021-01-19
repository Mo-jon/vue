<template>
  <div class="container">
    <Nav></Nav>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="logout()">退出登录</button>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Nav,
    HelloWorld,
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
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