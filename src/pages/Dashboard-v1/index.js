import { Col, Row } from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import React from 'react'
import styles from './style.less'
import CountUp from 'react-countup'
import store from './store'
import { inject, observer, Provider } from 'mobx-react'

import HeaderChart from './HeaderChart'
import PieChartRevenue from './PieChartRevenue'
import CampaignChart from './CampaignChart'

@inject('store')
@observer
class Page extends React.Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.store.fetchData()
  }

  render () {
    let {data, isFetchingData} = this.props.store
    let summary = data.summary || {}
    let latestCampaign = data.latestCampaign || []

    return (
      <article className='dashboard-v1'>
        <section className='v1--dashboard'>
          <header className='header'>
            <div className='header__left'>
              <h1>Dashboard</h1>
              <small>Welcome to antd application - {isFetchingData}</small>
            </div>
            <div className='header__right'>
              <section className='statisticsBox'>
                <p>
                  <CountUp start={0} end={summary.newItems && summary.newItems.total} duration='1'/>
                  <small>items</small>
                </p>
                <section>
                  <HeaderChart width={100} height={20} data={summary.newItems && summary.newItems.data}/>
                </section>
              </section>
              <section className='statisticsBox'>
                <p>
                  <CountUp start={0} end={summary.revenue && summary.revenue.total}
                           prefix='$' redraw useGrouping duration='1'/>
                  <small>revenue</small>
                </p>
                <section>
                  <HeaderChart width={100} height={20} data={summary.revenue && summary.revenue.data}/>
                </section>
              </section>
            </div>
          </header>
          <section className='detail'>
            <Row gutter={20}>
              <Col xs={24} lg={10}>
                <Row gutter={20}>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b1', 'text-danger')}>
                      <h1><CountUp start={0} end={summary.newItems && summary.newItems.total} duration='1'/></h1>
                      <small>New items</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b2')}>
                      <h1><CountUp start={0} end={summary.upLoads} duration='1'/></h1>
                      <small>Uploadss</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b3')}>
                      <h1><CountUp start={0} end={summary.comments} duration='1'/></h1>
                      <small>Comments</small>
                    </div>
                  </Col>
                  <Col xs={12} lg={12}>
                    <div className={classnames('summaryBox', 'b4')}>
                      <h1><CountUp start={0} end={summary.feeds} duration='1'/></h1>
                      <small>Feeds</small>
                    </div>
                  </Col>
                </Row>
                <Row gutter={20}>
                  <Col xs={24} lg={24}>
                    <div className={classnames('summaryBox', 'b5')}>
                      <div className='b5Chart'>
                        <PieChartRevenue width={50} height={50} data={summary.revenue && summary.revenue.percent}/>
                      </div>
                      <div className='b5Text'>
                        <h1>
                          <CountUp start={0} end={summary.revenue && summary.revenue.total}
                                   prefix='$' redraw useGrouping duration='1'/>
                        </h1>
                        <small>Revenue, {summary.revenue && summary.revenue.percent}% of the
                               goal
                        </small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} lg={14}>
                <div className={classnames('summaryBox', 'b6')}>
                  <h3>Latest Campaign</h3>
                  <CampaignChart  height={250} data={latestCampaign}  />
                </div>
              </Col>
            </Row>
          </section>
        </section>
        <aside className='v1--aside'>

        </aside>
      </article>
    )
  }
}

@observer
class Container extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Page {...this.props} />
      </Provider>
    )
  }
}

export default Container
