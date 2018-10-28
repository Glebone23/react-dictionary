import React from 'react';
import {
  BlubWrapper, Blub1, Blub2, Blub3,
} from 'components/elements';

const displayName = 'Preloader';

function Preloader() {
  return (
    <BlubWrapper>
      <Blub1 />
      <Blub2 />
      <Blub3 />
    </BlubWrapper>
  );
}

Preloader.displayName = displayName;

export default Preloader;
