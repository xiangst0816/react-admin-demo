/**
 * 问题是资源下载了但是还是现实loading, 这个方案不好
 * !!!abandon!!!
 * !!!abandon!!!
 * !!!abandon!!!
 * */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
const NOOP = () => {}

class DefaultLoadingComponent extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    console.log('DEFAULT_LOADING_COMPONENT')
    console.log(this.props)
    let {location} = this.props
    return (
      <section style={{textAlign: 'center'}}>
        <h2>Loading</h2>
        <p>Please Waiting For Pages</p>
        <small>{location.pathname}</small>
      </section>
    )
  }
}

export default class LazyRoute extends Component {

  static propTypes = {
    component: PropTypes.object.isRequired,
    loadingComponent: PropTypes.object,
    location: PropTypes.object.isRequired,
    onBeforeEnter: PropTypes.func,
    onAfterEnter: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {loaded: false}
    this.onBeforeEnter = props.onBeforeEnter || NOOP
    this.onAfterEnter = props.onAfterEnter || NOOP
    this.finalComponent = this.loadingComponent = props.loadingComponent || DefaultLoadingComponent
  }

  componentDidMount () {
    this.props.component.then((module) => {
      window.setTimeout(() => {
        this.finalComponent = module.default
        this.setState({loaded: true})
      }, 0)
    })
  }

  render () {
    const {loaded} = this.state
    const FinalComponent = this.finalComponent
    const LoadingComponent = this.loadingComponent

    if (loaded) {
      this.onAfterEnter(this.props.location)
      return <FinalComponent {...this.props} />
    } else {
      this.onBeforeEnter(this.props.location)
      return (<LoadingComponent {...this.props} />)
    }
  }
}
