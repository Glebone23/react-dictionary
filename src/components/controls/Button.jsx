import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from '../elements';

const displayName = 'Button';

const propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

const defaultProps = {
  onClick: undefined,
  children: '',
  type: 'button',
  disabled: false,
};

function Button({
  onClick, children, type, disabled,
}) {
  return (
    <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
