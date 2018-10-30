import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { loginUser, logoutUser } from 'actions';

const jwtName = 'token';
const jwt = localStorage.getItem(jwtName);
const loggedIn = !!(jwt && jwt.length > 0);

export const initialUserInfoState = Map({ loggedIn, token: jwt });

const userInfo = handleActions(
  {
    [logoutUser]: () => {
      localStorage.removeItem(jwtName);
      return Map({ token: '', loggedIn: false });
    },
    [`${loginUser}_${FULFILLED}`]: (state, { payload: { data } }) => {
      const token = fromJS(data.token);
      localStorage.setItem(jwtName, token);
      return Map({ token, loggedIn: true });
    },
  },
  initialUserInfoState,
);

export default userInfo;
