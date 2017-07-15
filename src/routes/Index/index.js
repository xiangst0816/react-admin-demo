import React from 'react'
import { connect } from 'dva'
import classnames from 'classnames'
import { Link } from 'react-router'
import { Avatar, Badge, Dropdown, Icon, Input, Layout, Menu } from 'antd'
import styles from './index.less'
import dropdownMenu from './dropdown.less'

const Search = Input.Search
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const {Header, Sider, Content} = Layout
console.log(styles)

const menu = (
  <section className={classnames(dropdownMenu.menu)}>
    <section className={dropdownMenu.item}>Project</section>
    <section className={dropdownMenu.item}>Task</section>
    <section className={dropdownMenu.item}>User</section>
    <section className={dropdownMenu.divider}></section>
    <section className={dropdownMenu.item}>Email</section>
  </section>
)

// languageMenu
const languageMenu = (
  <section className={classnames(dropdownMenu.menu)}>
    <section className={dropdownMenu.item}>
      <i className={classnames(dropdownMenu.flag, dropdownMenu.en)}></i>
      <span className={dropdownMenu.name}>English</span>
    </section>
    <section className={dropdownMenu.item}>
      <i className={classnames(dropdownMenu.flag, dropdownMenu.ge)}></i>
      <span className={dropdownMenu.name}>German</span>
    </section>
    <section className={dropdownMenu.item}>
      <i className={classnames(dropdownMenu.flag, dropdownMenu.it)}></i>
      <span className={dropdownMenu.name}>Italian</span>
    </section>
    <section className={dropdownMenu.item}>
      <i className={classnames(dropdownMenu.flag, dropdownMenu.cn)}></i>
      <span className={dropdownMenu.name}>简体中文</span>
    </section>
  </section>
)

// noticeMenu
const noticeMenu = (
  <section className={classnames(dropdownMenu.menu, dropdownMenu.notice)}>
    <section className={dropdownMenu.special}>
      <strong className={styles.name}>You have 2 notifications</strong>
    </section>
    <section className={dropdownMenu.item}>
      <Avatar className={dropdownMenu.avatar} src={require('../../assets/avatar.jpg')}/>
      <div className={dropdownMenu.card}>
        <h4>Antd is awesome!</h4>
        <p>15 minutes ago</p>
      </div>
    </section>
    <section className={dropdownMenu.item}>
      <div className={dropdownMenu.card}>
        <h4>1.0 initial released</h4>
        <p>1 hour ago</p>
      </div>
    </section>
    <section className={dropdownMenu.special}>
      <span className={styles.name}>See all the notifications</span>
      <Icon className={styles.icon} type='setting'/>
    </section>
  </section>
)

// userMenu
const userMenu = (
  <section className={classnames(dropdownMenu.menu)}>
    <section className={dropdownMenu.item}>
      <Icon type="setting"/>
      <span className={dropdownMenu.name}>Settings</span>
    </section>
    <section className={dropdownMenu.item}>
      <Icon type="user"/>
      <span className={dropdownMenu.name}>Profile</span>
    </section>
    <section className={dropdownMenu.item}>
      <Icon type="question-circle-o"/>
      <span className={dropdownMenu.name}>Help</span>
    </section>
    <section className={dropdownMenu.divider}></section>
    <section className={dropdownMenu.item}>
      <Icon className={dropdownMenu.icon} type='logout'/>
      <span className={dropdownMenu.name}>Logout</span>
    </section>
  </section>
)

class IndexPage extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <Layout id={styles.main}>
        <Sider
          className={styles.sider}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <div className={styles.inner}></div>
          </div>

          <div className={styles.userBox}>
            <Avatar className={styles.avatar} size="large" src={require('../../assets/avatar.jpg')}/>
            <h5>Hsiang</h5>
            <p>FrontEnd Engineer</p>
          </div>

          {/*<div className={styles.divider}></div>*/}
          {/*默认展开第一*/}

          <div className={styles.menuGroupName}>Navigation</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard-v1']} defaultOpenKeys={['Dashboard']}>
            <SubMenu key="Dashboard" title={<span><Icon type="area-chart"/><span>Dashboard</span></span>}>
              <Menu.Item key="Dashboard-v1">Dashboard v1</Menu.Item>
              <Menu.Item key="Dashboard-v2">
                Dashboard v2
                &ensp;
                <Badge status="success"/>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="Calendar">
              <Icon type="calendar"/>
              <span>Calendar</span>
            </Menu.Item>
            <Menu.Item key="Email">
              <Icon type="mail"/>
              <span>Email</span>
            </Menu.Item>
            <Menu.Item key="Apps">
              <Icon type="appstore-o"/>
              <span>Apps</span>
            </Menu.Item>
          </Menu>

          <div className={styles.menuGroupName}>Components</div>
          <Menu theme="dark" mode="inline" defaultOpenKeys={['Components']}>
            <SubMenu key="Layout" title={<span><Icon type="area-chart"/><span>Layout</span></span>}>
              <Menu.Item key="Layout-Grid">Grid</Menu.Item>
              <Menu.Item key="Layout-Layout">Layout</Menu.Item>
            </SubMenu>
            <SubMenu key="General" title={<span><Icon type="area-chart"/><span>General</span></span>}>
              <Menu.Item key="General-Icon">Icon</Menu.Item>
              <Menu.Item key="General-Button">Button</Menu.Item>
            </SubMenu>
            <SubMenu key="Navigation" title={<span><Icon type="area-chart"/><span>Navigation</span></span>}>
              <Menu.Item key="General-Demo">Demo</Menu.Item>
            </SubMenu>
            <SubMenu key="DataEntry" title={<span><Icon type="area-chart"/><span>Data Entry</span></span>}>
              <Menu.Item key="DataEntry-Demo">Demo</Menu.Item>
            </SubMenu>
            <SubMenu key="DataDisplay" title={<span><Icon type="area-chart"/><span>Data Display</span></span>}>
              <Menu.Item key="DataDisplay-Demo">Demo</Menu.Item>
            </SubMenu>
            <SubMenu key="Feedback" title={<span><Icon type="area-chart"/><span>Feedback</span></span>}>
              <Menu.Item key="Feedback-Demo">Demo</Menu.Item>
            </SubMenu>
            <SubMenu key="Other" title={<span><Icon type="area-chart"/><span>Other</span></span>}>
              <Menu.Item key="Other-Demo">Demo</Menu.Item>
            </SubMenu>
          </Menu>

          {/*Your Stuff*/}
          <div className={styles.menuGroupName}>Your Stuff</div>
          <Menu theme="dark" mode="inline" defaultOpenKeys={['YourStuff']}>
            <Menu.Item key="YourStuff-Profile">Profile</Menu.Item>
            <Menu.Item key="YourStuff-Documents">Documents</Menu.Item>
          </Menu>

        </Sider>
        <Layout>
          <Header className={styles.header} style={{background: '#fff', padding: 0}}>
            <section className={styles.header__left}>
              <section className={styles.header__icon}>
                <Icon
                  className={styles.icon}
                  type={classnames({'menu-unfold': this.state.collapsed, 'menu-fold': !this.state.collapsed})}
                  onClick={this.toggle}
                /></section>
              <section className={styles.header__icon}>
                <Icon className={styles.icon} type='user'/>
              </section>
              <Dropdown overlay={menu} trigger={['click']}>
                <span className={styles.header__dropdown}>
                Feature <Icon type="down"/>
              </span>
              </Dropdown>
              <Dropdown overlay={menu} trigger={['click']}>
                <span className={styles.header__dropdown}>
                New <Icon type="down"/>
              </span>
              </Dropdown>

              {/*搜索*/}
              <div className={styles.header__input}>
                <Search
                  className={styles.input}
                  placeholder="input search text"
                  style={{width: 200, height: 30, display: 'flex'}}
                  onSearch={value => console.log(value)}
                />
              </div>
            </section>

            <section className={styles.header__right}>
              {/*语言*/}
              <Dropdown overlay={languageMenu} trigger={['click']}>
                <span className={styles.header__dropdown}>
                Language(EN) <Icon type="down"/>
              </span>
              </Dropdown>
              {/*全屏*/}
              <section className={styles.header__icon}>
                <Icon className={styles.icon} type={true ? 'arrows-alt' : 'shrink'}/>
              </section>
              {/*通知栏*/}
              <Dropdown overlay={noticeMenu} trigger={['click']} placement='bottomCenter'>
                <section className={styles.header__icon}>
                  <Badge count={4}>
                    <Icon className={styles.icon} type="bell"/>
                  </Badge>
                </section>
              </Dropdown>

              {/*个人中心*/}
              <Dropdown overlay={userMenu} trigger={['click']}>
                <section className={styles.header__dropdown}>
                  <span>Hsiang</span>
                  <Icon type="down"/>
                  <Avatar className={styles.avatar} size="large" src={require('../../assets/avatar.jpg')}/>
                  <Badge dot style={{background: 'green', top: 12, right: -3}}></Badge>
                </section>
              </Dropdown>
            </section>

          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            Content




          </Content>
        </Layout>
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
