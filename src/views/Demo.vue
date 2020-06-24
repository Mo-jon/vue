<template>
  <div class="container">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/demo">Demo</router-link>
    </div>
    <span v-pre>{{ this will not be compiled }}</span>
    <text-document v-bind.sync="doc" :syncText.sync="syncText"></text-document>
    <p>使用 vuex: {{JSON.stringify(userInfo)}}</p>
    <button @click="updateUserInfo()">更新vuex</button>
    <ul>
      <li v-for="item in cityList" :key="item.id" @click="changeCity(item.id)">{{item.name}}</li>
    </ul>
    <P>城市切换：{{JSON.stringify(nowCity)}}</P>
    <hr />
    <p>当前时间：{{nowDate}}</p>
  </div>
</template>

<script>
import TextDocument from "@/components/Test";
export default {
  name: "ComponentName",
  components: {
    "text-document": TextDocument
  },
  data() {
    return {
      doc: {
        title: "标题",
        text: "这是一个用 v-bind.sync 来处理多个 props 的做法"
      },
      syncText: "传入一个 sync 数据",
      cityId: 0
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    cityList() {
      return this.$store.state.city.list;
    },
    nowCity() {
      return this.$store.state.city.nowCity;
    },
    nowDate() {
      // 时间格式化
      return new Date().format("yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    updateUserInfo() {
      this.$store.dispatch("updataUserInfo");
    },
    changeCity(id) {
      console.log("切换城市", id);
      this.$store.commit("setNowCity", id);
    }
  },
  mounted() {
    console.log("-->", this.$store.getters.getCity);
    // 使用工具类
    console.log("tool.getTime-->", this.$tool.getTime());
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