import React, { Component } from 'react'

export default class LazyRoute extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      showLoader: false
    }
    console.log('LazyRoute')
    console.log(props)



    // window.setTimeout(() => {
    //   this.release()
    // }, 3000)
  }

  componentDidMount () {

    this.release = this.props.history.block()

    this.props.component.then((module) => {
      window.setTimeout(() => {
        this.component = module.default
        this.setState({loaded: true})
        this.release()
      }, 0)
    })
  }

  render () {
    const {loaded} = this.state
    const Component = this.component
    if (loaded) {
      return <Component {...this.props} />
    } else {
      return (<div />)
    }
  }
}