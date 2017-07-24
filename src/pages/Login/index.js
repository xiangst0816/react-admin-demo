/**
 * Created by Hsiang on 2017/7/22.
 */
import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import LazyRoute from 'lazy-route'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('$appStore')
@observer
class Login extends React.Component {
  static propTypes = {
    $appStore: PropTypes.object.isRequired
  }
  render () {
    const {from} = {from: {pathname: '/admin'}}
    let {authenticated, authenticating, authenticate} = this.props.$appStore

    let authenticatingText = authenticating ? 'authenticating' : 'none'

    if (authenticated) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <p>login state: {authenticatingText}</p>
        <button onClick={authenticate}>Log in</button>
      </div>
    )
  }
}

@inject('$appStore')
@observer
class PrivateRoute extends React.Component {
  static propTypes = {
    $appStore: PropTypes.object.isRequired
  }
  render ({...rest}) {
    let {authenticated} = this.props.$appStore
    if (authenticated) {
      return (
        <Route {...rest} render={props => (
          <LazyRoute {...props} component={import('../Index')} />
        )} />
      )
    } else {
      return (
        <Route {...rest} render={props => (
          <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
          }} />
        )} />
      )
    }
  }
}

export { Login, PrivateRoute }
