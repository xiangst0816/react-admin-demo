import React from 'react'
import { Route, Router } from 'dva/router'
import Index from './routes/Index'
import Dashboard from './routes/Dashboard'

function RouterConfig ({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={Index}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  )
}

export default RouterConfig
