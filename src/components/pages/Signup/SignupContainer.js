import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserModel } from '../../../models';
import { validateEmail, validatePassword, isEmpty } from '../../../helpers';
import { getUserInfo } from '../../../selectors';
import { loginUser } from '../../../actions';
import config from '../../../config';
import Signup from './Signup';

export const enhance = compose(
  setDisplayName('SignupContainer'),
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
  withState('firstName', 'setFirstName', ''),
  withState('lastName', 'setLastName', ''),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('isLoading', 'setLoading', false),
  withState('error', 'setError', ''),
  withHandlers({
    changeFirstName: ({ setFirstName, isLoading }) => event => (
      !isLoading ? setFirstName(event.currentTarget.value) : null
    ),
    changeLastName: ({ setLastName, isLoading }) => event => (
      !isLoading ? setLastName(event.currentTarget.value) : null
    ),
    changeEmail: ({ setEmail, isLoading }) => event => (
      !isLoading ? setEmail(event.currentTarget.value) : null
    ),
    changePassword: ({ setPassword, isLoading }) => event => (
      !isLoading ? setPassword(event.currentTarget.value) : null
    ),
    handleSignup: ({
      firstName,
      lastName,
      email,
      password,
      setError,
      setLoading,
      dispatchLoginUser,
    }) => (event) => {
      event.preventDefault();
      setLoading(true);
      const errorStartName = 'Invalid';
      let error = errorStartName;
      // START Validation of every input
      if (isEmpty(firstName)) error = `${error} First name`;
      else if (isEmpty(lastName)) error = `${error} Last name`;
      else if (!validateEmail(email)) error = `${error} Email address`;
      else if (!validatePassword(password)) error = 'Please make sure password is 6 characters or more';
      // END Validation of every input
      if (error !== errorStartName) {
        setError(error);
        setLoading(false);
      } else {
        setError('');
        UserModel.signup({
          firstName, lastName, email, password,
        })
          .then(() => {
            dispatchLoginUser({ email, password })
              .catch(() => setError(config.errors[500]));
          })
          .catch((res) => {
            const { status } = res.response;
            if (status === 409) setError(config.errors[409]);
            else setError(config.errors[500]);
            setLoading(false);
          });
      }
    },
  }),
);

export default enhance(Signup);
