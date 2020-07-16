<template>
  <div class="container">
    <Nav></Nav>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.crop_name}}--{{item.crop_id}}</li>
    </ul>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Api from "@/services/api";
export default {
  name: "ComponentName",
  components: {
    Nav
  },
  props: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    getList() {
      Api.shopList().then(res => {
        this.list = res.data;
      });
    }
  },
  mounted() {
    this.getList();
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