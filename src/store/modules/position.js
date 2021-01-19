const position = {
    // 属性
    state: {
        list: [{
                id: 0,
                name: '桂林'
            },
            {
                id: 1,
                name: '柳州'
            },
            {
                id: 2,
                name: '南宁'
            }
        ],
        city: {}
    },
    // 计算属性
    getters: {},
    // 方法(限制异步)
    mutations: {
        setPosition(state, data) {
            state.city = data
            console.log("更新位置", state.city);
        }
    },
    // Action 提交的是 mutation，不直接变更状态(可以使 mutations 方法异步执行); 比如调用后台数据 api
    actions: {}
}

export default position;