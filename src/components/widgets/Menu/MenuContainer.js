import React from 'react';
import {
  compose, setDisplayName, withState, withHandlers, withProps,
} from 'recompose';
import Menu from './Menu';

export const enhance = compose(
  setDisplayName('MenuContainer'),
  withState('isOpen', 'setIsOpen', false),
  withProps({
    btnRef: React.createRef(),
  }),
  withHandlers({
    handleToggle: ({ isOpen, setIsOpen }) => () => setIsOpen(!isOpen),
    handleClose: ({ setIsOpen, btnRef }) => (event) => {
      if (btnRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
    },
  }),
);

export default enhance(Menu);
