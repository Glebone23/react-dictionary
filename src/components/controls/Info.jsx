import React from 'react';
import PropTypes from 'prop-types';
import { InfoWrapper } from 'components/elements';

const displayName = 'Info';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

function Info({ children }) {
  return (
    <InfoWrapper>{children}</InfoWrapper>
  );
}

Info.displayName = displayName;
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;
