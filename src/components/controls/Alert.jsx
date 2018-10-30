import React from 'react';
import PropTypes from 'prop-types';
import { AlertWrapper } from 'components/elements';

const displayName = 'Alert';

const propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  isShown: PropTypes.bool,
};

const defaultProps = {
  children: '',
  type: 'error',
  isShown: true,
};

function Alert({ children, type, isShown }) {
  return <AlertWrapper type={type} isShown={isShown}>{children}</AlertWrapper>;
}

Alert.displayName = displayName;
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
