<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/demo">Demo</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
