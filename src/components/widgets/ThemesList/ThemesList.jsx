import React from 'react';
import PropTypes from 'prop-types';
import { Loader, Preloader } from '../../controls';
import { Theme, AddTheme } from '..';
import ThemesWrapper from './ThemesList.styled';

const displayName = 'ThemeList';

const propTypes = {
  themes: PropTypes.instanceOf(Array),
  dispatchAddTheme: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  themes: [],
  isLoading: true,
};

/* eslint-disable no-underscore-dangle */
function ThemesList({ themes, dispatchAddTheme, isLoading }) {
  return (
    <Loader isLoading={isLoading} delay={500} fallback={<Preloader />}>
      <ThemesWrapper>
        <AddTheme dispatchAddTheme={dispatchAddTheme} />
        {themes.map(theme => (
          <Theme key={theme._id} id={theme._id} isLink>{theme.title}</Theme>
        ))}
      </ThemesWrapper>
    </Loader>
  );
}
/* eslint-enable no-underscore-dangle */

ThemesList.displayName = displayName;
ThemesList.propTypes = propTypes;
ThemesList.defaultProps = defaultProps;

export default ThemesList;
