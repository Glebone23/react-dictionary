import React from 'react';
import PropTypes from 'prop-types';
import ThemeCard from './Theme.styled';

const displayName = 'Theme';

const propTypes = {
  children: PropTypes.string,
};

const defaultProps = {
  children: '',
};

function Theme({ children }) {
  return <ThemeCard>{children}</ThemeCard>;
}

Theme.displayName = displayName;
Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
