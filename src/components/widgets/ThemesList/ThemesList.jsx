import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from 'components/widgets';

const displayName = 'ThemeList';

const propTypes = {
  themes: PropTypes.instanceOf(Array),
};

const defaultProps = {
  themes: [],
};

/* eslint-disable no-underscore-dangle */
function ThemesList({ themes }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {themes.map(theme => (
        <Theme key={theme._id}>{theme.title}</Theme>
      ))}
    </div>
  );
}

ThemesList.displayName = displayName;
ThemesList.propTypes = propTypes;
ThemesList.defaultProps = defaultProps;

export default ThemesList;
