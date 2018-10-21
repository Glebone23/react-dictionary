import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { loginUser } from 'actions';

const jwt = localStorage.getItem('token');
const loggedIn = !!(jwt && jwt.length > 0);

export const initialUserInfoState = Map({ loggedIn, token: jwt });

const userInfo = handleActions(
  {
    [`${loginUser}_${FULFILLED}`]: (state, { payload: { data } }) => {
      const token = fromJS(data.token);
      localStorage.setItem('token', token);
      return Map({ token, loggedIn: true });
    },
  },
  initialUserInfoState,
);

export default userInfo;
