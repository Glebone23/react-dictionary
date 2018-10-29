import React from 'react';
import PropTypes from 'prop-types';
import { AlertWrapper } from 'components/elements';

const displayName = 'Alert';

const propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  children: '',
  type: 'success',
};

function Alert({ children, type }) {
  return <AlertWrapper type={type}>{children}</AlertWrapper>;
}

Alert.displayName = displayName;
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
