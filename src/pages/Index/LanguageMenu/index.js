/**
 * Created by Hsiang on 2017/7/24.
 */
import { inject, observer } from 'mobx-react'
import React from 'react'
import classnames from 'classnames'
// Menu
import { Dropdown, Icon } from 'antd'
import PropTypes from 'prop-types'

@inject('$rootStore')
@observer
export default class LanguageMenu extends React.Component {
  static propTypes = {
    $rootStore: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
  }

  render () {
    let {langText, setLanguage} = this.props.$rootStore

    const MenuOptions = (
      <section className='menu'>
        <section className='item' onClick={() => setLanguage('enUS')}>
          <i className={classnames('flag', 'en')} />
          <span className='name'>English</span>
        </section>
        <section className='item' onClick={() => setLanguage('zhCN')}>
          <i className={classnames('flag', 'cn')} />
          <span className='name'>简体中文</span>
        </section>
      </section>
    )

    return (
      <Dropdown overlay={MenuOptions} trigger={['click']}>
        <span className='header__dropdown'>
          {langText} <Icon type='down' />
        </span>
      </Dropdown>
    )
  }
}

