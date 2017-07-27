import React from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { Login, PrivateRoute } from '../pages/Login'
import NotFound from '../pages/NotFound'
import { Provider } from 'mobx-react'
// mobx-react-router
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()
const routingStore = new RouterStore()
const history = syncHistoryWithStore(hashHistory, routingStore)

// main route to app
export class MainRoute extends React.Component {
  render () {
    return (
      <Provider $route={routingStore}>
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/admin' />
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
