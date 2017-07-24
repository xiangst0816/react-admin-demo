/**
 * Created by Hsiang on 2017/7/20.
 */

import { action, computed, observable } from 'mobx'
class Store {

  @observable asideFolded

  constructor () {
    this.asideFolded = false
  }

  @computed get totoString () {
    return this.asideFolded.toString()
  }

  // 只能这么写
  @action asideToggle = () => {
    this.asideFolded = !this.asideFolded
  }
}

export default new Store()