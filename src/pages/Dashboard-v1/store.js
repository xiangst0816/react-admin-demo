import { action, computed, observable } from 'mobx'
import axios from 'axios'

class Store {

  @observable data
  @observable isFetchingData

  constructor () {
    this.data = {}

    this.fetchData = this::this.fetchData
    this.setData = this::this.setData
  }

  // 数据处理
  @action setData (data) {
    this.data = data
    this.isFetchingData = 'false'
  }

  // 获取原始数据
  @action
  async fetchData () {
    this.isFetchingData = 'true'
    const url = `http://localhost:3000/api/dashboard`
    let response = await axios.get(url)
    if (response.status === 200) {
      console.debug('fetchData')
      console.debug(response.data)
      this.setData(response.data)
    } else {
      console.error('数据获取失败: ' + url)
    }
  }
}

export default new Store()