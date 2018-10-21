import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ProtectedRoute } from 'components/controls';
import { Login, ToLearn } from 'components/pages';

const displayName = 'Dictionary';

const propTypes = {
  isLoggedIn: PropTypes.bool,
};

const defaultProps = {
  isLoggedIn: false,
};

function App({ isLoggedIn }) {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" isLoggedIn={isLoggedIn} component={ToLearn} />
        <ProtectedRoute exact path="/login" isLoggedIn={isLoggedIn} isPrivate={false} component={Login} />
      </Switch>
    </Router>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
