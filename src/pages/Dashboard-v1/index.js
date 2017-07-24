import { Col, Row } from 'antd'
import classnames from 'classnames'
import React from 'react'
import styles from './style.less'
import PropTypes from 'prop-types'
// var G2 = require('g2')
class Page extends React.Component {

  static propTypes = {
    $appStore: PropTypes.object.isRequired,
    $rootStore: PropTypes.object.isRequired
  }

  // componentWillMount () {
  //   console.debug('Dashboard-v1 componentWillMount')
  // }
  //
  // componentDidMount () {
  //   console.debug('Dashboard-v1 componentDidMount')
  // }
  //
  // componentWillUnmount () {
  //   console.debug('Dashboard-v1 componentWillUnmount')
  // }

  render (data) {
    // console.log('当前页面的this: Dashboard -> index.js')
    // console.log(this)
    // console.log('data')
    // console.log(data)

    return (
      <article className='dashboard-v1'>
        <section className='v1--dashboard'>
          <header className='header'>
            <div>
              <h1>Dashboard</h1>
              <small>Welcome to antd application</small>
            </div>
            <div>
              right-box
            </div>
          </header>
          <section className='detail'>
            <Row gutter={20}>
              <Col xs={24} lg={10}>
                <Row gutter={20}>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b1', 'text-danger')}>
                      <h1>523</h1>
                      <small>New items</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b2')}>
                      <h1>987</h1>
                      <small>Uploadss</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b3')}>
                      <h1>233</h1>
                      <small>Comments</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b4')}>
                      <h1>12</h1>
                      <small>Feeds</small>
                    </div>
                  </Col>
                </Row>
                <Row gutter={20}>
                  <Col xs={24} lg={24}>
                    <div className={classnames('summaryBox', 'b5')}>
                      <div className={styles.b5Chart}>
                        <span>123</span>
                      </div>
                      <div className='b5Text'>
                        <h1>$12,670</h1>
                        <small>Revenue, 60% of the goal</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} lg={14}>
                <div className='summaryBox'>
                  <h1>523</h1>
                  <small>New items</small>
                </div>
              </Col>
            </Row>
          </section>
        </section>
        <aside className='v1--aside'>
          aside
        </aside>
      </article>
    )
  }
}

export default Page
