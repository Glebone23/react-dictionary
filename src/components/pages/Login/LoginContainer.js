import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from 'actions';
import { getUserInfo } from 'selectors';
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
    changeEmail: ({ setEmail }) => event => setEmail(event.currentTarget.value),
    changePassword: ({ setPassword }) => event => setPassword(event.currentTarget.value),
    handleLogin: ({
      email, password, setLoading, isLoading, dispatchLoginUser, history,
    }) => (event) => {
      event.preventDefault();
      /* eslint-disable no-console */
      if (!isLoading) {
        setLoading(true);
        dispatchLoginUser({ email, password })
          .then(() => history.push('/'))
          .catch(() => {
            console.log('Wrong email or password');
            setLoading(false);
          });
      }
    },
  }),
);

export default withRouter(enhance(Login));
