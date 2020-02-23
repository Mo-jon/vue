// 发送验证码指令
const sendSms = (el, binding) => {
  el.onclick = () => {
    if (binding.value == null || binding.value == '') {
      console.warn("[发送验证码]", "请填写手机号码");
    } else {
      console.log("[发送验证码]", binding.value);
      // 设置倒计时
      let time = 60;
      const setTime = setInterval(() => {
        el.disabled = time != 0;
        if (time == 0) {
          el.innerHTML = '验证码';
          clearInterval(setTime);
        } else {
          el.innerHTML = time + '秒';
          time--;
        }
      }, 1000);
    }
  };
}

export default sendSms;
