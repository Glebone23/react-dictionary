import React from 'react';
import PropTypes from 'prop-types';
import { WordsGrid } from '../../widgets';
import {Headline, SubHeadline} from '../../elements';

const displayName = 'ThemePage';

const propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  words: [],
};

function ThemePage({ words }) {
  return (
    <React.Fragment>
      <Headline>Words</Headline>
      <SubHeadline>To learn list</SubHeadline>
      {words.map((word, key) => <WordsGrid text={word.word} key={key} />)}
    </React.Fragment>
  );
}

ThemePage.propTypes = propTypes;
ThemePage.defaultProps = defaultProps;
ThemePage.displayName = displayName;

export default ThemePage;
