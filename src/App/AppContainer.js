import {
  compose, setDisplayName, withProps,
} from 'recompose';
import { connect } from 'react-redux';
import { getUserInfo } from 'selectors';
import App from './App';

export const enhance = compose(
  setDisplayName('DictionaryContainer'),
  connect(
    state => ({
      userInfo: getUserInfo(state),
    }),
  ),
  withProps(({ userInfo }) => ({ isLoggedIn: userInfo.get('loggedIn') })),
);

export default enhance(App);
