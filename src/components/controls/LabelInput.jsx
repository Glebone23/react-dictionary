import React from 'react';
import PropTypes from 'prop-types';
import { InputField, LabelField } from 'components/elements';

const displayName = 'LabelInput';

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: 'text',
  value: '',
};

function LabelInput({
  label, name, type, value, onChange,
}) {
  return (
    <React.Fragment>
      <LabelField htmlFor={name}>{label}</LabelField>
      <InputField type={type} name={name} value={value} onChange={onChange} />
    </React.Fragment>
  );
}

LabelInput.displayName = displayName;
LabelInput.propTypes = propTypes;
LabelInput.defaultProps = defaultProps;

export default LabelInput;
