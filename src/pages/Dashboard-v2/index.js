import React from 'react'
import styles from './style.less'
import { inject, observer } from 'mobx-react'
import Footer from '../../components/Footer'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
@inject('rootStore', 'appStore')
@observer
class Page extends React.Component {
  static propTypes = {
    appStore: PropTypes.object.isRequired,
    rootStore: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className='dashboard-v2'>

        <h1 className={styles.title}>Dashboard-v2</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>123123123To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href='https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md'>Getting Started</a>
          </li>
        </ul>
        <hr />
        <hr />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur dignissimos
           doloremque eveniet, exercitationem expedita fugit ipsa iusto laboriosam nam odit omnis provident quae quo
           tempore vero voluptate!</p>
        {/*<Footer />*/}
      </div>
    )
  }
}

export default Page
