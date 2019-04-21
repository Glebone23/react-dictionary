import React from 'react';
import PropTypes from 'prop-types';
import { BlubWrapper } from '../elements';

const displayName = 'Preloader';

const propTypes = {
  defaultPreloaderSize: PropTypes.number,
};

const defaultProps = {
  defaultPreloaderSize: 150,
};

function Preloader({ defaultPreloaderSize }) {
  return (
    <BlubWrapper size={defaultPreloaderSize}>
      <div />
      <div />
      <div />
    </BlubWrapper>
  );
}

Preloader.displayName = displayName;
Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;

export default Preloader;
