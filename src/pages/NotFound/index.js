/**
 * Created by Hsiang on 2017/7/22.
 */

import React from 'react'
import PropTypes from 'prop-types'

export default class NotFound extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        <h1>404</h1>
        <h3>No match for <code>{location.pathname}</code></h3>
      </div>
    )
  }
}
