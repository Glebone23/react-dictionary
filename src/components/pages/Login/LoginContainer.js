import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from 'actions';
import { getUserInfo } from 'selectors';
// import validateEmail from 'helpers';
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
  withHandlers({
    changeEmail: ({ setEmail, isLoading }) => event => (!isLoading ? setEmail(event.currentTarget.value) : null),
    changePassword: ({ setPassword, isLoading }) => event => (
      !isLoading ? setPassword(event.currentTarget.value) : null
    ),
    handleLogin: ({
      email, password, setLoading, isLoading, dispatchLoginUser, history,
    }) => (event) => {
      event.preventDefault();
      // TODO validate email and password!
      // TODO add alert(div) with errors while logging in before login form!
      /* eslint-disable no-console */
      if (!isLoading) {
        setLoading(true);
        dispatchLoginUser({ email, password })
          .then(() => history.push('/'))
          .catch(() => {
            console.log('Incorrect email or password');
            setLoading(false);
          });
      }
    },
  }),
);

export default withRouter(enhance(Login));
