import { createAction } from 'redux-actions';
import { UserModel } from 'models';

const payloadCreator = body => UserModel.login(body);

const loginUserAsync = createAction('LOGIN_USER', payloadCreator);

const loginUser = data => dispatch => dispatch(loginUserAsync(data));

loginUser.toString = loginUserAsync.toString;

export default loginUser;
