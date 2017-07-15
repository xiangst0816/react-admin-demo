import React from 'react'
import { Router } from 'dva/router'
import PropTypes from 'prop-types'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig ({history}) {

  return (
    <Router history={history} routes={routes}>
      <Route path="/" component={IndexPage}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  )
}

const Routers = ({history, app}) => {

}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}
export default RouterConfig
