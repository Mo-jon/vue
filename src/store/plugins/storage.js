/**
 * vuex 插件，用于localStorage持久化存储
 * @param {*} store 
 */

const storage = store => {
  // 自动登录
  autoLogin(store)
  // 同步位置信息
  syncPosition(store);

  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }, 相当于接收store.commit(type, payload)

    console.log("mutation.type", mutation.type, state);
    switch (mutation.type) {
      case 'login':
        // 登录信息持久化
        storageTool.set('user', state.user);
        console.log("持久化登录信息", state.user);
        break;

      case 'logout':
        // 清空登录信息
        storageTool.remove('user');
        console.log("清空登录信息");
        break;

      case 'setPosition':
        // 当前城市持久化
        storageTool.set('city', state.position.city);
        console.log("当前城市持久化");
        break;

      default:
        break;
    }
  })
}

// 持久化存储公用方法
const storageTool = {
  /**
   * 存储数据n
   * @param {string} name 存储名称
   * @param {object} jsonObject 
   */
  set: function (name, value) {
    localStorage.setItem(
      name.toString(),
      JSON.stringify(value)
    );
  },

  /**
   * 获取数据
   * @param {string} name 获取名称
   */
  get: function (name) {
    const result = localStorage.getItem(name);
    return JSON.parse(result)
  },

  /**
   * 清除数据
   * @param {string} name 删除名称
   */
  remove: function (name) {
    localStorage.removeItem(name);
  }
}

// 自动登录
function autoLogin(store) {
  const user = storageTool.get('user');
  user && store.commit("login", user);
}

// 同步城市持久化到vuex
function syncPosition(store) {
  const city = storageTool.get('city');
  city && store.commit("setPosition", city);
}

export default storage;