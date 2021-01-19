<template>
  <div class="container">
    <Nav></Nav>
    <span v-pre>{{ this will not be compiled }}</span>

    <!-- 全局变量 @/assets/styles/variables.scss 的 $theme-color-->
    <p>这里有全局样式、全局 scss 变量的使用</p>

    <!-- 全局样式 @/assets/styles/globals.scss 的 class="button" -->
    <button class="button">按钮</button>

    <p>使用 vuex: {{ JSON.stringify(user) }}</p>
    <button @click="updateUser()">更新vuex, 执行updateUser</button>
    <ul>
      <li
        v-for="item in cityList"
        :key="item.id"
        @click="changeCity(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <P>城市切换：{{ JSON.stringify(city) }}</P>
    <hr />
    <p>当前时间：{{ nowDate }}</p>

    <TextDocument
      v-bind.sync="doc"
      :syncText.sync="syncText"
    ></TextDocument>

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

    <button @click="sendProxy()">发送@deraw/vue-cli-plugin-proxy代理请求</button>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import TextDocument from "./components/Test";
import SlotUse from "./components/SlotUse";
import axios from "axios";
import { mapState } from "vuex";
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
    // 导入city模块nowCity
    ...mapState({
      user: "user",
      city: (state) => state.position.city,
    }),
    cityList() {
      return this.$store.state.position.list;
    },
    nowDate() {
      // 时间格式化
      return new Date().format("yyyy-MM-dd hh:mm:ss");
    },
  },
  methods: {
    updateUser() {
      this.$store.dispatch("updateUser");
    },
    changeCity(item) {
      console.log("切换城市", item);
      this.$store.commit("setPosition", item);
    },
    // 发送@deraw/vue-cli-plugin-proxy代理请求
    sendProxy() {
      console.log("发送@deraw/vue-cli-plugin-proxy代理请求", arguments);
      axios.get("/baidu");
    },
  },
  mounted() {
    // console.log("-->", this.city);
    // 使用工具类
    console.log("tool.getTime-->", this.$tool.getTime());
    console.log("[$env]", this.$env);
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