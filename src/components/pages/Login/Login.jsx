import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { LabelInput, Button } from 'components/controls';
import logo from 'logo.svg';
import { Logo, LoginFormWrapper, LoginHeadline } from './Login.styled';

const displayName = 'Login';

const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  email: '',
  password: '',
  isLoading: false,
};

function Login({
  email, password, changeEmail, changePassword, handleLogin, isLoading,
}) {
  return (
    <React.Fragment>
      <Logo src={logo} alt="logo" />
      <LoginHeadline>{`Login to ${config.name}`}</LoginHeadline>
      <LoginFormWrapper>
        <form onSubmit={handleLogin}>
          <LabelInput type="email" label="Email address" name="email" value={email} onChange={changeEmail} />
          <LabelInput type="password" label="Password" name="password" value={password} onChange={changePassword} />
          <Button type="submit" style={{ width: '100%', marginLeft: '1px', marginTop: '1em' }} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
      </LoginFormWrapper>
    </React.Fragment>
  );
}

Login.displayName = displayName;
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
