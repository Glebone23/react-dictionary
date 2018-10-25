import { createSelector } from 'reselect';

const getThemes = createSelector(state => state.get('themes'), themes => themes);

export default getThemes;
