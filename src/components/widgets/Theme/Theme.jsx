import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ThemeCard from './Theme.styled';

const displayName = 'Theme';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  children: '',
  onClick: undefined,
};

function Theme({ children, id, onClick }) {
  return <ThemeCard as={NavLink} to={`/theme/${id}`} onClick={onClick}>{children}</ThemeCard>;
}

Theme.displayName = displayName;
Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
