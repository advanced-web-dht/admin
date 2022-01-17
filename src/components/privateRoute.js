import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
}

export default PrivateRoute
