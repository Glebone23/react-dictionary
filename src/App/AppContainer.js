import {
  compose, setDisplayName, withProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../selectors';
import App from './App';
import { logoutUser } from '../actions';

export const enhance = compose(
  setDisplayName('DictionaryContainer'),
  connect(
    state => ({
      userInfo: getUserInfo(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchLogoutUser: logoutUser,
      },
      dispatch,
    ),
  ),
  withProps(({ userInfo }) => ({ isLoggedIn: userInfo.get('loggedIn') })),
);

export default enhance(App);
