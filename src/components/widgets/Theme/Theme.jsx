import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Theme';

const propTypes = {
  children: PropTypes.string,
};

const defaultProps = {
  children: '',
};

function Theme({ children }) {
  return (
    <div
      style={{
        width: '100%',
        background: 'black',
        color: 'white',
        margin: '0.7em 0',
        padding: '0.3em',
      }}
    >
      {children}
    </div>
  );
}

Theme.displayName = displayName;
Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
