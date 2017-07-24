/**
 * Created by Hsiang on 2017/7/20.
 */
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Login, PrivateRoute } from './pages/Login'
import NotFound from './pages/NotFound'
import { RouteTransition } from 'react-router-transition'
import PropTypes from 'prop-types'
import LazyRoute from './utils/LazyRoute'
// main route to app
class MainRoute extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <Switch>
          <PrivateRoute path='/admin'/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

// @withRouter
class AdminRoute extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    let listen = this.props.history.listen
    // before
    listen(function (location) {
      console.debug('----start----')
      console.debug(location)
      console.debug('--------')
    })

  }

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    return (
      <Switch>
        <Route
          exact strict
          path='/admin'
          key='/admin'
          render={props => (
            // 跳转
            <Redirect {...this.props} to='/admin/dashboard_v1'/>
          )}
        />
        <Route
          key='/admin/dashboard_v1'
          path='/admin/dashboard_v1'
          render={props => (
            <LazyRoute {...this.props} component={import('./pages/Dashboard-v1')}/>
          )}
        />
        <Route
          key='/admin/dashboard_v2'
          path='/admin/dashboard_v2'
          render={props => (
            <LazyRoute {...this.props} component={import('./pages/Dashboard-v2')}/>
          )}
        />
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export { MainRoute, AdminRoute }

{/*<RouteTransition*/}
{/*runOnMount*/}
{/*component={'section'}*/}
{/*className={'router-transition-wrapper'}*/}
{/*pathname={location.pathname}*/}
{/*atEnter={{opacity: 0}}*/}
{/*atLeave={{opacity: 0}}*/}
{/*atActive={{opacity: 1, height: 300}}*/}
{/*>*/}
{/*<Switch key={location.key} location={location}>*/}
{/*<Route*/}
{/*exact strict*/}
{/*path='/admin'*/}
{/*key={location.key}*/}
{/*render={props => (*/}
{/*// 跳转*/}
{/*<Redirect {...this.props} to='/admin/dashboard_v1'/>*/}
{/*)}*/}
{/*/>*/}
{/*<Route*/}
{/*key={location.key}*/}
{/*path='/admin/dashboard_v1'*/}
{/*render={props => (*/}
{/*<LazyRoute {...this.props} component={import('./pages/Dashboard-v1').then((data) => {*/}
{/*console.log('./pages/Dashboard-v1')*/}
{/*return data*/}
{/*})}/>*/}
{/*)}*/}
{/*/>*/}
{/*<Route*/}
{/*key={location.key}*/}
{/*path='/admin/dashboard_v2'*/}
{/*render={props => (*/}
{/*<LazyRoute {...this.props} component={import('./pages/Dashboard-v2').then((data) => {*/}
{/*console.log('./pages/Dashboard-v2')*/}
{/*return data*/}
{/*})}/>*/}
{/*)}*/}
{/*/>*/}
{/*<Route component={NotFound}/>*/}
{/*</Switch>*/}
{/*</RouteTransition>*/}