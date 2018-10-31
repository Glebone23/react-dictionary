import React from 'react';
import config from 'config';
import logo from 'logo.svg';
import {
  AuthPageWrapper, Logo, AuthFormWrapper, AuthHeadline,
} from 'components/elements';

const displayName = 'Signup';

function Signup() {
  return (
    <AuthPageWrapper>
      <Logo src={logo} alt="logo" />
      <AuthHeadline>{`Join ${config.name}`}</AuthHeadline>
      <AuthFormWrapper />
    </AuthPageWrapper>
  );
}

Signup.displayName = displayName;

export default Signup;
