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
    const {data: newData} = newProps
    const {data: oldData} = this.props

    if (newData !== oldData) {
      var Frame = G2.Frame
      var frame = new Frame(newData)
      frame = Frame.combinColumns(frame, ['ACME', 'Compitor'], 'value', 'type', 'year')
      this.chart.changeData(frame, {
        'value': {
          alias: 'The Share Price in Dollars',
          min: 0,
          max: 30
        },
        year: {
          min: new Date().getFullYear() - 9,
          max: new Date().getFullYear()
        }
      })
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
    const {height} = props
    const chart = new G2.Chart({
      id: this.chartId,
      height: height,
      forceFit: true,
      plotCfg: {
        margin: [10, 15, 26, 30]
      }
    })

    chart.tooltip({
      crosshairs: true
    })

    chart.axis('value', {
      title: null,
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 0.5,
          lineDash: 1
        }
      }
    })
    chart.axis('year', {
      title: null,
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 0.5,
          lineDash: 1
        }
      }
    })

    chart.legend({
      title: null, // 不展示图例的标题
      dx: -90,
      dy: -160,
      position: 'right'
    })

    chart.area().position('year*value').color('type', '#00AEE3-#6A57B3').shape('smooth')
    chart.line().position('year*value').color('type', '#1EBFE7-#6D73BF').size(2).shape('smooth')
    chart.render()

    this.chart = chart
  }

  render () {
    return (<div id={this.chartId}/>)
  }
}
