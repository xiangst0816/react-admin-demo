/**
 * Created by Hsiang on 2017/7/24.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DefaultLoadingComponent extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    let {location} = this.props
    return (
      <section style={{textAlign: 'center'}}>
        <h2>Loading</h2>
        <p>Please Waiting For Pages!</p>
        <small>{location.pathname}</small>
      </section>
    )
  }
}

class RouteBundle extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired
  }

  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render () {
    const FinalComponent = this.state.mod
    if (FinalComponent) {
      return (<FinalComponent {...this.props} />)
    } else {
      return (<DefaultLoadingComponent {...this.props} />)
    }
  }
}

export default RouteBundle
