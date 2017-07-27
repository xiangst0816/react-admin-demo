/**
 * Created by Hsiang on 2017/7/27.
 */

import G2 from 'g2'
import React from 'react'
import PropTypes from 'prop-types'

let uniqueId = 0
function generateUniqueId () {
  return `rc-g2-${new Date().getTime()}-${uniqueId++}`
}

export default class HeaderChart extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  constructor (props, context) {
    super(props, context)
    this.chart = null
    this.chartId = generateUniqueId()
  }

  componentDidMount () {
    this.initChart(this.props)
  }

  componentWillReceiveProps (newProps) {
    const {data: newData, width: newWidth, height: newHeight} = newProps
    const {data: oldData, width: oldWidth, height: oldHeight} = this.props

    if (newData !== oldData) {
      this.chart.changeData([
        {
          name: '1',
          value: parseInt(newData)
        },
        {
          name: '2',
          value: 100 - parseInt(newData)
        }
      ])
    }

    if (newWidth !== oldWidth || newHeight !== oldHeight) {
      this.chart.changeSize(newWidth, newHeight)
    }
  }

  shouldComponentUpdate () {
    return false
  }

  componentWillUnmount () {
    this.chart.destroy()
    this.chart = null
    this.chartId = null
  }

  initChart (props) {
    const {width, height, data = 0} = props
    var Stat = G2.Stat
    const chart = new G2.Chart({
      id: this.chartId,
      width: width,
      height: height,
      plotCfg: {
        margin: [0, 0, 0, 0]
      },
      forceFit: false
    })

    chart.coord('theta', {
      radius: 0.8 // 设置饼图的大小
    })

    chart.source([
      {
        name: '1',
        value: parseInt(data)
      },
      {
        name: '2',
        value: 100 - parseInt(data)
      }
    ])

    chart.legend(null)

    chart.axis('name', {
      title: null,
      labels: null,
      tickLine: null,
      line: null,
      grid: null
    })

    chart.axis('value', {
      title: null,
      labels: null,
      tickLine: null,
      line: null,
      grid: null
    })

    // chart.interval().position('time*count')

    chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name', '#ffffff-#FDD83C')
    .selected(false);

    chart.render()
    chart.tooltip(false)
    // chart.tooltip({
    //   title: null,
    //   map: {
    //     value: 'value'
    //   }
    // });
    this.chart = chart
  }

  render () {
    return (<div id={this.chartId}/>)
  }
}
