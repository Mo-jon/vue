import Vue from 'vue'

/**
 * javaScript 原型链追加自定义方法
 */
import './date'
import './array'

class Tool {
    constructor() {
        // 定时器
        this.timeout = null;
    }

    /**
     * 懒加载请求
     * @param {Number} time 延迟时间
     */
    goQuery(time = 500) {
        return new Promise(resolve => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                resolve();
            }, time);
        })
    }

    /**
     * 获取相关时间段
     * @param {Number} type 0~5
     */
    getTime(type) {
        let y = Number(new Date().getFullYear());
        let m = Number(new Date().getMonth() + 1);
        let d = Number(new Date().getDate());
        let w = Number(new Date().getDay());
        let todayTime = Number(new Date(y + "-" + m + "-" + d).getTime());
        let a = 86400000;

        console.log('本周-->', w)

        let result = [
            [
                // 今天
                new Date(y + "-" + m + "-" + d),
                new Date()
            ],
            [
                // 昨天
                new Date(todayTime - a),
                new Date(todayTime - a),
            ],
            [
                // 本周
                new Date(todayTime - a * (w - 1)),
                new Date()
            ],
            [
                // 上周
                new Date(todayTime - a * (w + 6)),
                new Date(todayTime - a * (w))
            ],
            [
                // 本月
                new Date(y + "-" + m),
                new Date()
            ],
            [
                // 上月
                m == 1 ? new Date((y - 1) + "-" + 12) : new Date(y + "-" + (m - 1)),
                new Date(new Date(y + "-" + m).getTime() - a)
            ],
        ]

        return [0, 1, 2, 3, 4, 5].includes(type) ? result[type] : result
    }
}

// 追加到vue属性中
Vue.prototype.$tool = new Tool();