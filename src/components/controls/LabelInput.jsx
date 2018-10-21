import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'LabelInput';

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: 'text',
  value: '',
  style: {},
};

function LabelInput({
  label, name, type, value, onChange, style,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ ...style, width: '100%', border: '1px solid #dcdcdc' }}
      />
      <br />
    </label>
  );
}

LabelInput.displayName = displayName;
LabelInput.propTypes = propTypes;
LabelInput.defaultProps = defaultProps;

export default LabelInput;
