import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from 'actions';
import { getUserInfo } from 'selectors';
import { validateEmail, validatePassword } from 'helpers';
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
      history,
      setError,
      setPassword,
    }) => (event) => {
      event.preventDefault();
      const errorName = 'Incorrect email or password';
      if (!isLoading) {
        if (validateEmail(email) && validatePassword(password)) {
          setLoading(true);
          dispatchLoginUser({ email, password })
            .then(() => history.push('/'))
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

export default withRouter(enhance(Login));
