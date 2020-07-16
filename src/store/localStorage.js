class LocalStorage {
  constructor() {}

  /**
   * 存储数据n
   * @param {string} name 存储名称
   * @param {object} jsonObject 
   */
  set(name, value) {
    localStorage.setItem(
      name.toString(),
      JSON.stringify(value)
    );
  }

  /**
   * 获取数据
   * @param {string} name 获取名称
   */
  get(name) {
    const result = localStorage.getItem(name);
    return JSON.parse(result)
  }

  /**
   * 清除数据
   * @param {string} name 删除名称
   */
  remove(name) {
    localStorage.removeItem(name);
  }
}

export default new LocalStorage();