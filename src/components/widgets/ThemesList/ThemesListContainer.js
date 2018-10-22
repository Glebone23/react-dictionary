import { compose, setDisplayName } from 'recompose';
import ThemesList from './ThemesList';

export const enhance = compose(setDisplayName('ThemesListContainer'));

export default enhance(ThemesList);
