/**
 * 应用层面的状态, 这部分的配置时需要验证的, 不能直接从存储中读取并生效,
 * 必须验证, 类似sessionStorage的机制
 *
 * 包括:
 * 登录状态/等级/权限等
 * */
import { action, observable } from 'mobx'
import axios from 'axios'

export default class RootStore {
  @observable authenticated
  @observable authenticating
  @observable items
  @observable item

  constructor () {
    this.authenticated = true // TODO: debug
    this.authenticating = false
    this.items = []
    this.item = {}
  }

  async fetchData (pathname, id) {
    let {data} = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    )
    console.log(data)
    data.length > 0 ? this.setData(data) : this.setSingle(data)
  }

  @action setData = (data) => {
    this.items = data
  }

  @action setSingle = (data) => {
    this.item = data
  }

  @action clearItems = () => {
    this.items = []
    this.item = {}
  }

  @action authenticate = () => {
    return new Promise((resolve, reject) => {
      this.authenticating = true
      setTimeout(() => {
        this.authenticated = !this.authenticated
        this.authenticating = false
        resolve(this.authenticated)
      }, 1000)
    })
  }
}
