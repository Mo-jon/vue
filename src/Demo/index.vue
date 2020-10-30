<template>
  <div class="container">
    <Nav></Nav>
    <span v-pre>{{ this will not be compiled }}</span>

    <!-- 全局变量 @/assets/styles/variables.scss 的 $theme-color-->
    <p>这里有全局样式、全局 scss 变量的使用</p>

    <!-- 全局样式 @/assets/styles/globals.scss 的 class="button" -->
    <button class="button">按钮</button>

    <p>使用 vuex: {{ JSON.stringify(user) }}</p>
    <button @click="updataUser()">更新vuex</button>
    <ul>
      <li v-for="item in cityList" :key="item.id" @click="changeCity(item.id)">
        {{ item.name }}
      </li>
    </ul>
    <P>城市切换：{{ JSON.stringify(nowCity) }}</P>
    <hr />
    <p>当前时间：{{ nowDate }}</p>

    <TextDocument v-bind.sync="doc" :syncText.sync="syncText"></TextDocument>

    <SlotUse :scope="slotData">
      <template #header>slot-header内容</template>
      <p>默认slot内容</p>
      <template #footer="slotProps">
        <hr />
        <b>slot-footer的prop</b>
        <p>Footer content ----{{ slotProps }}</p>
        <p>{{ slotProps.scope.text }}</p>
      </template>
    </SlotUse>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import TextDocument from "./components/Test";
import SlotUse from "./components/SlotUse";
export default {
  name: "Demo",
  components: {
    Nav,
    TextDocument,
    SlotUse,
  },
  data() {
    return {
      doc: {
        title: "v-bind.sync",
        text: "这是一个用 v-bind.sync 来处理多个 props 的做法",
      },
      syncText: "传入一个 sync 数据",
      cityId: 0,
      slotData: {
        content: "slotProps-content",
        text: {
          name: "slotProps-text-name",
        },
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
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
    },
  },
  methods: {
    updataUser() {
      this.$store.dispatch("updataUser");
    },
    changeCity(id) {
      console.log("切换城市", id);
      this.$store.commit("setNowCity", id);
    },
  },
  mounted() {
    console.log("-->", this.$store.getters.getCity);
    // 使用工具类
    console.log("tool.getTime-->", this.$tool.getTime());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only (添加scoped表示只限组件内使用，不加作用于全局) -->
<style lang='scss'>
// 全局样式
</style>
<style scoped lang='scss'>
// 组件样式
.container {
  p {
    // 全局变量 @/assets/styles/variables.scss 的 $theme-color
    color: $theme-color;
  }
}
</style>