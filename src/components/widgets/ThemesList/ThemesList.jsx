import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/controls';
import { Theme } from 'components/widgets';
import ThemesWrapper from './ThemesList.styled';

const displayName = 'ThemeList';

const propTypes = {
  themes: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
};

const defaultProps = {
  themes: [],
  isLoading: true,
};

/* eslint-disable no-underscore-dangle */
function ThemesList({ themes, isLoading }) {
  return (
    <Loader isLoading={isLoading} delay={500} fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
      <ThemesWrapper>
        {themes.map(theme => (
          <Theme key={theme._id}>{theme.title}</Theme>
        ))}
      </ThemesWrapper>
    </Loader>
  );
}

ThemesList.displayName = displayName;
ThemesList.propTypes = propTypes;
ThemesList.defaultProps = defaultProps;

export default ThemesList;
