import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from 'actions';
import { getUserInfo } from 'selectors';
import { validateEmail, validatePassword } from 'helpers';
import config from 'config';
import Login from './Login';

export const enhance = compose(
  setDisplayName('LoginContainer'),
  connect(
    state => ({
      userInfo: getUserInfo(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchLoginUser: loginUser,
      },
      dispatch,
    ),
  ),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('isLoading', 'setLoading', false),
  withState('error', 'setError', ''),
  withHandlers({
    changeEmail: ({ setEmail, isLoading }) => event => (
      !isLoading ? setEmail(event.currentTarget.value) : null
    ),
    changePassword: ({ setPassword, isLoading }) => event => (
      !isLoading ? setPassword(event.currentTarget.value) : null
    ),
    handleLogin: ({
      email,
      password,
      setLoading,
      isLoading,
      dispatchLoginUser,
      setError,
      setPassword,
    }) => (event) => {
      event.preventDefault();
      const errorName = config.errors[401];
      if (!isLoading) {
        if (validateEmail(email) && validatePassword(password)) {
          setLoading(true);
          dispatchLoginUser({ email, password })
            .catch(() => {
              setPassword('');
              setError(errorName);
              setLoading(false);
            });
        } else {
          setPassword('');
          setError(errorName);
        }
      }
    },
  }),
);

export default enhance(Login);
