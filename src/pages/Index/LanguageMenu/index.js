/**
 * Created by Hsiang on 2017/7/24.
 */
import { inject, observer } from 'mobx-react'
import React from 'react'
import classnames from 'classnames'
import { Dropdown, Icon } from 'antd'
import PropTypes from 'prop-types'
// Menu

@inject('$rootStore')
@observer
export default class LanguageMenu extends React.Component {
  static propTypes = {
    $rootStore: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    // let {languageLength} = this.props.$rootStore
    // this.languageLength = languageLength
  }
  changeLanguage (lang) {
    console.log(lang)
    this.props.$rootStore.setLanguage(lang)
  }

  render () {
    let {language} = this.props.$rootStore

    const Menu = (
      <section className='menu'>
        <section className='item' onClick={this.changeLanguage('enUS')}>
          <i className={classnames('flag', 'en')}/>
          <p>{language}</p>
          <span className='name'>English</span>
        </section>
        <section className='item' onClick={this.changeLanguage('znCN')}>
          <i className={classnames('flag', 'cn')}/>
          <span className='name'>简体中文</span>
        </section>
      </section>
    )


    return (
      <Dropdown overlay={Menu} trigger={['click']}>
          <span className='header__dropdown'>
            {language} <Icon type='down'/>
          </span>
      </Dropdown>
    )
  }
}

