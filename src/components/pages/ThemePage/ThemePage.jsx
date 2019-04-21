import React from 'react';
import PropTypes from 'prop-types';
import { Headline } from '../../elements';

const displayName = 'ThemePage';

const propTypes = {
  themeInfo: PropTypes.shape({}).isRequired,
};

function ThemePage({ themeInfo }) {
  const title = themeInfo.get('title');
  return (
    <Headline>{title}</Headline>
  );
}

ThemePage.propTypes = propTypes;
ThemePage.displayName = displayName;

export default ThemePage;
