import React from 'react';
import PropTypes from 'prop-types';
import { InputField, LabelField } from '../elements';

const displayName = 'LabelInput';

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
};

function LabelInput({
  label, name, type, value, onChange, placeholder,
}) {
  return (
    <React.Fragment>
      <LabelField htmlFor={name}>{label}</LabelField>
      <InputField type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </React.Fragment>
  );
}

LabelInput.displayName = displayName;
LabelInput.propTypes = propTypes;
LabelInput.defaultProps = defaultProps;

export default LabelInput;
