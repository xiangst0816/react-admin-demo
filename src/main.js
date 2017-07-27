/**
 * 应用的入口, 用于初始化之前的操作
 * */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './styles/main.scss'
import App from './app'
import { useStrict } from 'mobx'
// enable MobX strict mode
useStrict(true)

const start = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

// 启动
start(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    start(require('./app').default)
  })
}
