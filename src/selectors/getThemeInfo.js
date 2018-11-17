import { createSelector } from 'reselect';

const getThemeInfo = createSelector(state => state.get('themeInfo'), ThemeInfo => ThemeInfo);

export default getThemeInfo;
