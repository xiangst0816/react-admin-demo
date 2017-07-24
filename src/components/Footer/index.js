/**
 * Created by Hsiang on 2017/7/22.
 */

import React from 'react'
import { Layout } from 'antd'
import style from './style.module.css'
const {Footer} = Layout

export default class Page extends React.Component {
  render () {
    return (
      <Footer className={style.footer}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    )
  }
}
