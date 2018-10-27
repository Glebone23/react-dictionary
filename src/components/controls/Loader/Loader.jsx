import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Loader';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  startFallback: PropTypes.bool,
};

const defaultProps = {
  startFallback: false,
};

function Loader({
  isLoading, fallback, startFallback, children,
}) {
  if (isLoading && startFallback) return fallback;
  if (isLoading && !startFallback) return <React.Fragment />;
  return children;
}

Loader.displayName = displayName;
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
