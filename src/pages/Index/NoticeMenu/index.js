/**
 * Created by Hsiang on 2017/7/24.
 */
import React from 'react'
import classnames from 'classnames'
import { Avatar, Icon } from 'antd'

// NoticeMenu
export default (
  <section className={classnames('menu', 'notice')}>
    <section className='special'>
      <strong className='name'>You have 2 notifications</strong>
    </section>
    <section className='item'>
      <Avatar className='avatar' src={require('../../../assets/avatar.jpg')}/>
      <div className='card'>
        <h4>Antd is awesome!</h4>
        <p>15 minutes ago</p>
      </div>
    </section>
    <section className='item'>
      <div className='card'>
        <h4>1.0 initial released</h4>
        <p>1 hour ago</p>
      </div>
    </section>
    <section className='special'>
      <span className='name'>See all the notifications</span>
      <Icon className='icon' type='setting'/>
    </section>
  </section>
)

