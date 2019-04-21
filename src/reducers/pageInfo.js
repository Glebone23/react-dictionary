import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { setPageInfo } from '../actions';
import config from '../config';

export const initialPageInfoState = Map({ title: config.name });

const pageInfo = handleActions(
  {
    [setPageInfo]: (state, { payload: { title } }) => state.merge(Map({ title })),
  },
  initialPageInfoState,
);

export default pageInfo;
