<template>
  <div class="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/list">List</router-link>|
    <router-link to="/demo">Demo</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped lang='scss'>
.nav {
  display: flex;
  background: yellow;
}
</style>