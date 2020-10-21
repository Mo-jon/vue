<template>
  <div class="container">
    <Nav></Nav>
    <div class="form">
      <input placeholder="请输入账号" v-model="phone" clearable />
      <input placeholder="请输入密码" v-model="passsword" clearable />
      <div class="sms-code">
        <input placeholder="请输入验证码" v-model="smsCode" />
        <button v-sendSms="phone" @click="isEmpty(phone, '请填写手机号码')">
          验证码
        </button>
      </div>
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Api from "@/services/api";
export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      phone: "",
      passsword: "",
      smsCode: "",
    };
  },
  directives: {
    // 发送验证码
    sendSms(el, binding) {
      el.onclick = () => {
        console.log("directive sendSms", el, binding);
        if (binding.value == null || binding.value == "") {
          console.warn("[发送验证码]", "请填写手机号码");
        } else {
          console.log("[发送验证码]", binding.value);
          // 设置倒计时
          let time = 60;
          const setTime = setInterval(() => {
            el.disabled = time != 0;
            if (time == 0) {
              el.innerHTML = "验证码";
              clearInterval(setTime);
            } else {
              el.innerHTML = time + "秒";
              time--;
            }
          }, 1000);
        }
      };
    },
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
      console.log("[登录]", this.phone, this.passsword, this.smsCode);
      // 保存登录信息，跳转主控制台
      // this.$store.commit("login");
      Api.login(this.phone, this.passsword)
        .then((result) => {
          if (result.error) {
            console.error(result.message);
            return;
          }
          console.log("登录成功", result);
          this.$store.commit("login", {
            account: result.data.admin_name,
            nextTime: result.data.admin_next_time,
            token: result.data.admin_token,
          });
          this.$router.push(`/demo`);
        })
        .catch((error) => {
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
    },
  },
  mounted() {
    console.log("[$env]", this.$env);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100vw;
  flex-direction: column;
  align-items: center;

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

