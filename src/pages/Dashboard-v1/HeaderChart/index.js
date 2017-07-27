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
      this.chart.changeData(newData)
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
    const {width, height, data} = props
    const chart = new G2.Chart({
      id: this.chartId,
      width: width,
      height: height,
      plotCfg: {
        margin: [0, 0, 0, 0]
      },
      forceFit: false
    })
    chart.source(data)

    chart.axis('time', {
      title: null,
      labels: null,
      tickLine: null,
      line: null,
      grid: null
    })

    chart.axis('count', {
      title: null,
      labels: null,
      tickLine: null,
      line: null,
      grid: null
    })

    chart.interval().position('time*count')
    chart.render()
    chart.tooltip(false)

    this.chart = chart
  }

  render () {
    return (<div id={this.chartId}/>)
  }
}
