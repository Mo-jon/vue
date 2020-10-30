<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import LocalStorage from "./store/localStorage";
export default {
  name: "App",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 从LocalStorage自动登录
    setUser() {
      let user = LocalStorage.get("user");
      if (user) {
        this.$store.commit("login", user);
      } else {
        this.$router.push(`/login`);
      }
    }
  },
  mounted() {
    this.setUser();
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
