import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { ProtectedRoute } from 'components/controls';
import {
  Login, Signup, Home, ThemePage,
} from 'components/pages';

const displayName = 'Dictionary';

const propTypes = {
  isLoggedIn: PropTypes.bool,
};

const defaultProps = {
  isLoggedIn: false,
};

function App({ isLoggedIn }) {
  return (
    <Router basename="/react-dictionary">
      <Switch>
        <ProtectedRoute exact path="/" isLoggedIn={isLoggedIn} component={Home} />
        <ProtectedRoute exact path="/theme/:themeId" isLoggedIn={isLoggedIn} component={ThemePage} />
        <ProtectedRoute exact path="/login" isLoggedIn={isLoggedIn} isPrivate={false} component={Login} />
        <ProtectedRoute exact path="/signup" isLoggedIn={isLoggedIn} isPrivate={false} component={Signup} />
      </Switch>
    </Router>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
