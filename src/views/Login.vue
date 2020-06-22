<template>
  <div class="login">
    <div class="form">
      <input placeholder="请输入手机号" v-model="phone" clearable />
      <div class="sms-code">
        <input placeholder="请输入验证码" v-model="smsCode" />
        <button v-sendSms="phone" @click="isEmpty(phone,'请填写手机号码')">验证码</button>
      </div>
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import sendSms from "@/directives/sendSms";
import LocalStorage from "@/services/localStorage";
import Api from "@/services/api";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      smsCode: ""
    };
  },
  directives: {
    // 发送验证码
    sendSms
  },
  methods: {
    // 提交登录
    submit() {
      if (
        this.isEmpty(this.phone, "请填写手机号码") ||
        this.isEmpty(this.smsCode, "请输入验证码")
      ) {
        return;
      }
      console.log("[登录] phone:", this.phone, "smsCode:", this.smsCode);
      // 保存登录信息，跳转主控制台
      // this.$store.commit("login");
      Api.login(this.phone, this.smsCode)
        .then(result => {
          if (result.error) {
            console.error(result.message);
            return;
          }
          console.log("登录成功", result);
          LocalStorage.login({
            account: result.data.admin_name,
            nextTime: result.data.admin_next_time,
            token: result.data.admin_token
          });
          this.$router.push(`/`);
        })
        .catch(error => {
          console.error("服务器异常", error);
        });
    },
    // 验证输入是否为空
    isEmpty(value, messgae) {
      if (value == null || value == "") {
        console.warn(messgae);
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    console.log("[$env]", this.$env);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  width: 100vw;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;

    & > * {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>

