import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BlubWrapper } from '../elements';

const displayName = 'Preloader';

function Preloader() {
  return (
    <BlubWrapper>
      <CircularProgress />
    </BlubWrapper>
  );
}

Preloader.displayName = displayName;

export default Preloader;
