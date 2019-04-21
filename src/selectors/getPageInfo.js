import { createSelector } from 'reselect';

const getPageInfo = createSelector(state => state.get('pageInfo'), pageInfo => pageInfo);

export default getPageInfo;
