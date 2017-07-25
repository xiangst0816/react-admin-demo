/**
 * Created by Hsiang on 2017/7/24.
 */
import React from 'react'
import { Icon } from 'antd'

// NoticeMenu
export default (
  <section className='menu'>
    <section className='item'>
      <Icon type='setting'/>
      <span className='name'>Settings</span>
    </section>
    <section className='item'>
      <Icon type='user'/>
      <span className='name'>Profile</span>
    </section>
    <section className='item'>
      <Icon type='question-circle-o'/>
      <span className='name'>Help</span>
    </section>
    <section className='divider'/>
    <section className='item'>
      <Icon className='icon' type='logout'/>
      <span className='name'>Logout</span>
    </section>
  </section>
)

