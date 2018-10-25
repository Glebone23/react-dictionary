import { compose, setDisplayName } from 'recompose';
import Theme from './Theme';

export const enhance = compose(setDisplayName('ThemeContainer'));

export default enhance(Theme);
