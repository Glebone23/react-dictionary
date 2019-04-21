import { compose, setDisplayName } from 'recompose';
import WordsGrid from './WordsGrid';

export const enhance = compose(setDisplayName('WordsGridContainer'));

export default enhance(WordsGrid);
