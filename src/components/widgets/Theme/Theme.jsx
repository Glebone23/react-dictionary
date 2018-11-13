import React from 'react';
import PropTypes from 'prop-types';
import ThemeCard from './Theme.styled';

const displayName = 'Theme';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  children: '',
  onClick: undefined,
};

function Theme({ children, onClick }) {
  return <ThemeCard onClick={onClick}>{children}</ThemeCard>;
}

Theme.displayName = displayName;
Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
