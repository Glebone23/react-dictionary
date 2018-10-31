import { compose, setDisplayName } from 'recompose';
import Signup from './Signup';

export const enhance = compose(setDisplayName('SignupContainer'));

export default enhance(Signup);
