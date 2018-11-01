import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import { validateEmail, validatePassword, isEmpty } from 'helpers';
import Signup from './Signup';

export const enhance = compose(
  setDisplayName('SignupContainer'),
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
    handleSignup: props => (event) => {
      event.preventDefault();
      const {
        firstName, lastName, email, password, setError, setLoading,
      } = props;
      setLoading(true);
      let error = 'Invalid';
      // START Validation of every input
      if (isEmpty(firstName)) error = `${error} First name`;
      else if (isEmpty(lastName)) error = `${error} Last name`;
      else if (!validateEmail(email)) error = `${error} Email address`;
      else if (!validatePassword(password)) {
        error = 'Please enter a stronger password. Make sure it\'s 6 characters or more';
      }
      // END Validation of every input
      if (error !== 'Invalid') {
        setError(error);
        setLoading(false);
      } else setError('');
    },
  }),
);

export default enhance(Signup);
