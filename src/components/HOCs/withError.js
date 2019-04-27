import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';

const withAlert = BaseComponent => (props) => {
  const { open, handleClose } = props;
  return (
    <React.Fragment>
      <BaseComponent {...props} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Internal server error</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </React.Fragment>
  );
};

const withError = compose(
  setDisplayName('CheckAuthentication'),
  withState('open', 'setOpen', false),
  withHandlers({
    handleError: ({ setOpen }) => (result) => {
      if (result && result.status === 401) {
        return { logout: true };
      }

      setOpen(true);

      return result;
    },
    handleClose: ({ setOpen }) => () => {
      setOpen(false);
    },
  }),
  withAlert,
);

export default withError;
