import React from 'react';
import PropTypes from 'prop-types';
import { Headline } from 'components/elements';

const displayName = 'ThemePage';

const propTypes = {
  themeInfo: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

function ThemePage({ themeInfo: { title } }) {
  return (
    <Headline>{title}</Headline>
  );
}

ThemePage.propTypes = propTypes;
ThemePage.displayName = displayName;

export default ThemePage;
