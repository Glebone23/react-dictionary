import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { LabelInput, Button, Alert } from 'components/controls';
import logo from 'logo.svg';
import {
  AuthPageWrapper, Logo, AuthFormWrapper, AuthHeadline,
} from 'components/elements';

const displayName = 'Login';

const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

const defaultProps = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
};

function Login({
  email, password, changeEmail, changePassword, handleLogin, isLoading, error,
}) {
  const showError = error !== '';
  return (
    <AuthPageWrapper>
      <Logo src={logo} alt="logo" />
      <AuthHeadline>{`Login to ${config.name}`}</AuthHeadline>
      <Alert isShown={showError}>{error}</Alert>
      <AuthFormWrapper>
        <form onSubmit={handleLogin}>
          <LabelInput type="email" label="Email address" name="email" value={email} onChange={changeEmail} />
          <LabelInput type="password" label="Password" name="password" value={password} onChange={changePassword} />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
}

Login.displayName = displayName;
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
