import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import logo from 'logo.svg';
import {
  AuthPageWrapper, Logo, AuthFormWrapper, AuthHeadline,
} from 'components/elements';
import { LabelInput, Button, Alert } from 'components/controls';

const displayName = 'Signup';

const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

const defaultProps = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  isLoading: false,
  error: '',
};

function Signup({
  email,
  password,
  firstName,
  lastName,
  changeEmail,
  changePassword,
  changeFirstName,
  changeLastName,
  handleSignup,
  isLoading,
  error,
}) {
  const showError = error !== '';
  return (
    <AuthPageWrapper>
      <Logo src={logo} alt="logo" />
      <AuthHeadline>{`Join ${config.name}`}</AuthHeadline>
      <Alert isShown={showError}>{error}</Alert>
      <AuthFormWrapper>
        <form onSubmit={handleSignup}>
          <LabelInput
            label="First name"
            name="firstName"
            value={firstName}
            onChange={changeFirstName}
            placeholder="Pick up a first name"
          />
          <LabelInput
            label="Last name"
            name="lastName"
            value={lastName}
            onChange={changeLastName}
            placeholder="Pick up a last name"
          />
          <LabelInput
            type="email"
            label="Email address"
            name="email"
            value={email}
            onChange={changeEmail}
            placeholder="you@example.com"
          />
          <LabelInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={changePassword}
            placeholder="Create a password"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Joining...' : 'Join'}
          </Button>
        </form>
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
}

Signup.displayName = displayName;
Signup.propTypes = propTypes;
Signup.defaultProps = defaultProps;

export default Signup;
