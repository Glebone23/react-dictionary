import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const displayName = 'PrivateRoute';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool,
};

const defaultProps = {
  isPrivate: true,
};

const ProtectedRoute = ({
  component: Component, isLoggedIn, isPrivate, ...rest
}) => {
  if (isPrivate) {
    return (
      <Route
        {...rest}
        render={props => (
          isLoggedIn === true
            ? <Component {...props} />
            : <Redirect to="/login" />
        )}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn === false
          ? <Component {...props} />
          : <Redirect to="/" />
      )}
    />
  );
};

ProtectedRoute.displayName = displayName;
ProtectedRoute.propTypes = propTypes;
ProtectedRoute.defaultProps = defaultProps;

export default ProtectedRoute;
