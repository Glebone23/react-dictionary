import { compose, setDisplayName } from 'recompose';
import Home from './Home';

export const enhance = compose(setDisplayName('HomeContainer'));

export default enhance(Home);
