/**
 * 后台管理系统的状态
 * 这部分配置是和用户使用习惯相关的, 需要在初始化的时候读取 localStorage 中的配置, 如果属性修改则同步到 localStorage
 *
 * 包括:
 * 主题/menu状态/...等
 * */
import { action, extendObservable, toJS } from 'mobx'

// 默认配置, 属性全部为响应式, 如果check不通过则使用默认配置
const DEFAULT_SETTINGS = {
  themeID: '1',                         // 主题ID
  navbarHeaderColor: 'bg-black',        // 导航条 header 颜色
  navbarCollapseColor: 'bg-white-only', // 导航条 aside 的颜色
  asideColor: 'bg-black',               // aside 的颜色
  headerFixed: true,                    // 导航条 header 是否固定
  asideFixed: true,                     // aside 是否固定
  asideFolded: false,                   // aside 是否折叠
  asideDock: false,                     // aside 是否固定 ?
  container: false,                     // 是否是 container 模式
  isFullscreen: false                   // 是否是 container 模式
}

export default class AppState {
  constructor () {
    let settings = window.localStorage.getItem('settings')
    if (settings) {
      try {
        settings = JSON.parse(settings)
        let isSettingsCorrect = this.checkSettingsFromLocalStorage(settings, DEFAULT_SETTINGS)
        if (isSettingsCorrect) {
          extendObservable(this, settings)
        } else {
          console.warn('用户自定义配置参数错误, 系统将使用默认配置!')
          this.useDefaultSettings()
        }
      } catch (err) {
        console.error(err)
        this.useDefaultSettings()
      }
    } else {
      this.useDefaultSettings()
    }
  }

  // 只能这么写
  @action asideToggle = () => {
    this.asideFolded = !this.asideFolded
    this.recordSettingsToLocalStorage()
  }

  @action fullscreenToggle = () => {
    this.isFullscreen = !this.isFullscreen
    this.recordSettingsToLocalStorage()
  }

  // 使用默认配置
  useDefaultSettings () {
    extendObservable(this, DEFAULT_SETTINGS)
    window.localStorage.setItem('settings', JSON.stringify(DEFAULT_SETTINGS))
  }

  // 检查从 LocalStorage 过来的配置信息是否有误, 防止有人篡改,
  // 如果settings不对, 则强制使用默认配置
  checkSettingsFromLocalStorage (settingsFromLocalStorage, DEFAULT_SETTINGS) {
    let keysForLocalStorage = Object.keys(settingsFromLocalStorage).sort()
    let keysForDefault = Object.keys(DEFAULT_SETTINGS).sort()
    if (keysForLocalStorage.length === keysForDefault.length) {
      return keysForLocalStorage.every((item) => ~keysForDefault.indexOf(item))
    } else {
      return false
    }
  }

  // 保存配置
  recordSettingsToLocalStorage () {
    window.localStorage.setItem('settings', JSON.stringify(toJS(this)))
  }
}

