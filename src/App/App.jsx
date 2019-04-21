import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../components/controls';
import Menu from '../components/widgets/Menu';
import {
  Login, Signup, Home, ThemePage,
} from '../components/pages';
import config from '../config';

const displayName = 'Dictionary';

const propTypes = {
  isLoggedIn: PropTypes.bool,
  dispatchLogoutUser: PropTypes.func,
};

const defaultProps = {
  isLoggedIn: false,
  dispatchLogoutUser: () => {},
};

function App({ isLoggedIn, dispatchLogoutUser }) {
  const { home, login, signup } = config.pages;
  return (
    <React.Fragment>
      <Router basename="/react-dictionary">
        <div>
          <Menu isLoggedIn={isLoggedIn} logout={dispatchLogoutUser} />
          <Switch>
            <ProtectedRoute exact path={home.pathname} isLoggedIn={isLoggedIn} component={Home} />
            <ProtectedRoute exact path="/theme/:themeId" isLoggedIn={isLoggedIn} component={ThemePage} />
            <ProtectedRoute exact path={login.pathname} isLoggedIn={isLoggedIn} isPrivate={false} component={Login} />
            <ProtectedRoute exact path={signup.pathname} isLoggedIn={isLoggedIn} isPrivate={false} component={Signup} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
