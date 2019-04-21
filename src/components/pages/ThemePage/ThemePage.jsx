import React from 'react';
import PropTypes from 'prop-types';
import { WordsGrid } from '../../widgets';

const displayName = 'ThemePage';

const propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  words: [],
};

function ThemePage({ words }) {
  return words.map((word, key) => <WordsGrid text={word.word} key={key} />);
}

ThemePage.propTypes = propTypes;
ThemePage.defaultProps = defaultProps;
ThemePage.displayName = displayName;

export default ThemePage;
