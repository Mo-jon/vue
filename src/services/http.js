import axios from 'axios'
import Qs from 'qs'
import store from "@/store";

export default class HttpClass {
  constructor() {
    this.http = axios;
    this.qs = Qs;
    this.base = `${process.env.VUE_APP_SERVE}TianDiTuAPI/`;
    this.defaultPath = 'API.php';
  }

  /** 请求配置 */
  requestConfig() {
    return {
      headers: {
        "Token": store.getters.token ? store.getters.token : '',
      },
      baseURL: this.base
    }
  }

  /**
   * 设置请求地址、钩子
   * @param {*} url 请求地址
   * @param {*} params 请求参数
   * @returns 
   * 请求配置sendConfig
   * 请求前sendBefore
   * 请求成功sendSuccess
   * 请求失败sendError
   * 请求结束sendEnd
   */
  setSend(url, params) {
    url = this.joinPath(url, params);
    return {
      sendConfig: this.requestConfig(),
      sendBefore: () => {
        console.log("[请求前sendBefore]");
      },
      sendSuccess: (data) => {
        console.log("[请求成功sendSuccess]",data);
        if (data.code === 1) {
          // 权限无效,清除登录信息
          store.commit("logout")
        }
      },
      sendError: (error) => {
        console.log("[请求失败sendError]", error);
      },
      sendEnd: () => {
        console.log("[请求结束sendEnd]");
      }
    };
  }

  /**
   * get请求
   * @param {string} url url路径
   * @param {object} params url参数
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      const {
        sendConfig,
        sendBefore,
        sendSuccess,
        sendError,
        sendEnd
      } = this.setSend(url, params);
      sendBefore();
      this.http.get(url, sendConfig).then((response) => {
        sendSuccess(response.data);
        resolve(response.data);
      }).catch((error) => {
        sendError(error);
        reject(error);
      }).finally(() => {
        sendEnd();
      })
    })
  }

  /**
   * post请求
   * @param {string} url url路径
   * @param {object} data body参数
   * @param {object} params url参数
   */
  post(url, data, params) {
    const {
      sendConfig,
      sendBefore,
      sendSuccess,
      sendError,
      sendEnd
    } = this.setSend(url, params);
    sendBefore();
    return new Promise((resolve, reject) => {
      this.http.post(url, this.qs.stringify(data), sendConfig).then((response) => {
        sendSuccess(response.data);
        resolve(response.data);
      }).catch((error) => {
        sendError(error);
        reject(error);
      }).finally(() => {
        sendEnd();
      })
    })
  }

  // 并接path
  joinPath(url, params) {
    let param = [];
    for (let key in params) {
      if (params[key] !== undefined) {
        param.push(`${key}=${params[key]}`);
      }
    }
    const path = url ? url + '?' + param.join('&') : this.defaultPath + '?' + param.join('&');
    return path;
  }
}