/**
 * index.js 用于将 template, store 和 style 整合一起,
 * 根据需要将 "根状态" 注入组件
 * */
import { inject, observer } from 'mobx-react'
import { Avatar, Badge, Dropdown, Icon, Input, Layout, Menu } from 'antd'
import classnames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { AdminRoute } from '../../router/index'
import PropTypes from 'prop-types'
// 当前页面的 store 响应式数据
// styles
import './style.less'
import './dropdown.less'

const Search = Input.Search
const SubMenu = Menu.SubMenu
const {Header, Sider, Content} = Layout
const menu = (
  <section className='menu'>
    <section className='item'>Project</section>
    <section className='item'>Task</section>
    <section className='item'>User</section>
    <section className='divider'/>
    <section className='item'>Email</section>
  </section>
)

// languageMenu
const languageMenu = (
  <section className='menu'>
    <section className='item'>
      <i className={classnames('flag', 'en')}/>
      <span className='name'>English</span>
    </section>
    <section className='item'>
      <i className={classnames('flag', 'ge')}/>
      <span className='name'>German</span>
    </section>
    <section className='item'>
      <i className={classnames('flag', 'it')}/>
      <span className='name'>Italian</span>
    </section>
    <section className='item'>
      <i className={classnames('flag', 'cn')}/>
      <span className='name'>简体中文</span>
    </section>
  </section>
)

// noticeMenu
const noticeMenu = (
  <section className={classnames('menu', 'notice')}>
    <section className='special'>
      <strong className='name'>You have 2 notifications</strong>
    </section>
    <section className='item'>
      <Avatar className='avatar' src={require('../../assets/avatar.jpg')}/>
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

// userMenu
const userMenu = (
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

/**
 * 当前页面的模板
 * */
@inject('$rootStore', '$appStore')
@observer
class Index extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    $rootStore: PropTypes.object.isRequired
  }

  render () {
    const {location, $rootStore} = this.props
    let pathName = location.pathname
    let {asideFolded, asideToggle} = $rootStore
    let {isFullscreen, fullscreenToggle} = $rootStore
    return (
      <Layout id='layout'>
        <Sider
          className='layout__sider'
          trigger={null}
          collapsible
          collapsed={asideFolded}
        >
          <div className='logo'>
            <div className='inner'/>
          </div>

          <div className='userBox'>
            <Avatar className='avatar' size='large' src={require('../../assets/avatar.jpg')}/>
            <h5>Hsiang</h5>
            <p>FrontEnd Engineer</p>
          </div>

          {/* <div className={styles.divider}></div> */}
          {/* 默认展开第一 */}

          <div className='menuGroupName'>Navigation</div>
          <Menu theme='dark' mode='inline'
                selectedKeys={[pathName]}
                defaultSelectedKeys={[pathName]}
                defaultOpenKeys={['Dashboard']}>
            <SubMenu key='Dashboard' title={<span><Icon type='area-chart'/><span>Dashboard</span></span>}>
              <Menu.Item key='/admin/dashboard_v1'>
                <Link to='/admin/dashboard_v1'>Dashboard v1</Link>
              </Menu.Item>

              <Menu.Item key='/admin/dashboard_v2'>
                <Link to='/admin/dashboard_v2'>Dashboard v2 &ensp;<Badge status='success'/></Link>
              </Menu.Item>

            </SubMenu>
            <Menu.Item key='calendar'>
              <Icon type='calendar'/>
              <span>Calendar</span>
            </Menu.Item>
            <Menu.Item key='mail'>
              <Icon type='mail'/>
              <span>Email</span>
            </Menu.Item>
            <Menu.Item key='Apps'>
              <Icon type='appstore-o'/>
              <span>Apps</span>
            </Menu.Item>
          </Menu>

          <div className='menuGroupName'>Components</div>
          <Menu theme='dark' mode='inline' defaultOpenKeys={['Components']}>
            <SubMenu key='Layout' title={<span><Icon type='area-chart'/><span>Layout</span></span>}>
              <Menu.Item key='Layout-Grid'>Grid</Menu.Item>
              <Menu.Item key='Layout-Layout'>Layout</Menu.Item>
            </SubMenu>
            <SubMenu key='General' title={<span><Icon type='area-chart'/><span>General</span></span>}>
              <Menu.Item key='General-Icon'>Icon</Menu.Item>
              <Menu.Item key='General-Button'>Button</Menu.Item>
            </SubMenu>
            <SubMenu key='Navigation' title={<span><Icon type='area-chart'/><span>Navigation</span></span>}>
              <Menu.Item key='General-Demo'>Demo</Menu.Item>
            </SubMenu>
            <SubMenu key='DataEntry' title={<span><Icon type='area-chart'/><span>Data Entry</span></span>}>
              <Menu.Item key='DataEntry-Demo'>Demo</Menu.Item>
            </SubMenu>
            <SubMenu key='DataDisplay' title={<span><Icon type='area-chart'/><span>Data Display</span></span>}>
              <Menu.Item key='DataDisplay-Demo'>Demo</Menu.Item>
            </SubMenu>
            <SubMenu key='Feedback' title={<span><Icon type='area-chart'/><span>Feedback</span></span>}>
              <Menu.Item key='Feedback-Demo'>Demo</Menu.Item>
            </SubMenu>
            <SubMenu key='Other' title={<span><Icon type='area-chart'/><span>Other</span></span>}>
              <Menu.Item key='Other-Demo'>Demo</Menu.Item>
            </SubMenu>
          </Menu>

          {/* Your Stuff */}
          <div className='menuGroupName'>Your Stuff</div>
          <Menu theme='dark' mode='inline' defaultOpenKeys={['YourStuff']}>
            <Menu.Item key='YourStuff-Profile'>Profile</Menu.Item>
            <Menu.Item key='YourStuff-Documents'>Documents</Menu.Item>
          </Menu>
        </Sider>
        <Layout className='layout__content'>
          <Header className='layout__content--header'>
            <section className='header__left'>
              <section className='header__icon'>
                <Icon
                  className='icon'
                  type={classnames({'menu-unfold': asideFolded, 'menu-fold': !asideFolded})}
                  onClick={asideToggle}
                /></section>
              <section className='header__icon'>
                <Icon className='icon' type='user'/>
              </section>
              <Dropdown overlay={menu} trigger={['click']}>
                <span className='header__dropdown'>
                Feature <Icon type='down'/>
                </span>
              </Dropdown>
              <Dropdown overlay={menu} trigger={['click']}>
                <span className='header__dropdown'>
                New <Icon type='down'/>
                </span>
              </Dropdown>

              {/* 搜索 */}
              <div className='header__input'>
                <Search
                  className='input'
                  placeholder='input search text'
                  style={{width: 200, height: 30, display: 'flex'}}
                  onSearch={value => console.log(value)}
                />
              </div>
            </section>
            <section className='header__right'>
              {/* 语言 */}
              <Dropdown overlay={languageMenu} trigger={['click']}>
                <span className='header__dropdown'>
                Language(EN) <Icon type='down'/>
                </span>
              </Dropdown>
              {/* 全屏 */}
              <section className='header__icon' onClick={fullscreenToggle}>
                <Icon className='icon' type={isFullscreen ? 'arrows-alt' : 'shrink'}/>
              </section>
              {/* 通知栏 */}
              <Dropdown overlay={noticeMenu} trigger={['click']} placement='bottomCenter'>
                <section className='header__icon'>
                  <Badge count={4}>
                    <Icon className='icon' type='bell'/>
                  </Badge>
                </section>
              </Dropdown>

              {/* 个人中心 */}
              <Dropdown overlay={userMenu} trigger={['click']}>
                <section className='header__dropdown'>
                  <span>Hsiang</span>
                  <Icon type='down'/>
                  <Avatar className='avatar' size='large' src={require('../../assets/avatar.jpg')}/>
                  <Badge dot style={{background: 'green', top: 12, right: -3}}/>
                </section>
              </Dropdown>
            </section>
          </Header>
          <Content className='layout__content--body'>
            {/* <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}> */}
            <AdminRoute {...this.props} />
          </Content>
          {/* <Footer className="layout__content--footer"> */}
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
          {/* </Footer> */}
        </Layout>
      </Layout>
    )
  }
}

export default Index
