/**
 * Created by Hsiang on 2017/7/24.
 */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NotFound from '../pages/NotFound'
// import { RouteTransition } from 'react-router-transition'
import RouteBundle from '../utils/RouteBundle.js'
import { inject, observer } from 'mobx-react'
// 懒加载页面
import DashboardV1 from 'bundle-loader?lazy!../pages/Dashboard-v1'
import DashboardV2 from 'bundle-loader?lazy!../pages/Dashboard-v2'

@inject('$route')
@observer
export class AdminRoute extends React.Component {
  render () {
    return (
      <Switch>
        <Route
          exact strict
          path='/admin'
          render={props => (
            // 跳转
            <Redirect {...this.props} to='/admin/dashboard_v1' />
          )}
        />
        <Route
          path='/admin/dashboard_v1'
          render={props => (
            <RouteBundle load={DashboardV1} {...this.props} />
          )}
        />
        <Route
          path='/admin/dashboard_v2'
          render={props => (
            <RouteBundle load={DashboardV2} {...this.props} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    )
  }
}