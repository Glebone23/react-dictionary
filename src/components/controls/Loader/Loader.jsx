import React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from '..';

const displayName = 'Loader';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fallback: PropTypes.node,
  children: PropTypes.node.isRequired,
  startFallback: PropTypes.bool,
  defaultPreloaderSize: PropTypes.number,
};

const defaultProps = {
  startFallback: false,
  fallback: undefined,
  defaultPreloaderSize: 150,
};

function Loader({
  isLoading, fallback, defaultPreloaderSize, startFallback, children,
}) {
  if (isLoading && startFallback) return fallback || <Preloader defaultPreloaderSize={defaultPreloaderSize} />;
  if (isLoading && !startFallback) return <React.Fragment />;
  return children;
}

Loader.displayName = displayName;
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
