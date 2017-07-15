import React from 'react'
import { IndexRoute, Route, Router } from 'dva/router'
import Index from './routes/Index'
import Dashboard_v1 from './routes/Dashboard-v1'
import Dashboard_v2 from './routes/Dashboard-v2'

function RouterConfig ({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={Index}>
        <IndexRoute component={Dashboard_v1}/>
        <Route path="/dashboard_v1" component={Dashboard_v1}/>
        <Route path="/dashboard_v2" component={Dashboard_v2}/>
      </Route>
    </Router>
  )
}

export default RouterConfig
