import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuWrapper from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import config from '../../../config';

const displayName = 'Menu';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool,
  handleToggle: PropTypes.func,
  handleClose: PropTypes.func,
  btnRef: PropTypes.shape({}),
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  location: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  isOpen: false,
  handleToggle: () => {},
  handleClose: () => {},
  btnRef: {},
  isLoggedIn: false,
  logout: () => {},
};

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bar: {
    backgroundColor: config.colors.accentColor,
  },
  menuWrapper: {
    background: '#00000040',
    '& div[role="document"]': {
      top: '0 !important',
      left: '0 !important',
      width: 240,
      borderRadius: 0,
    },
  },
};

function Menu({
  classes, isOpen, handleToggle, handleClose, btnRef, isLoggedIn, logout, location: { pathname },
}) {
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Button
            buttonRef={btnRef}
            aria-owns={isOpen ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </Button>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {config.name}
          </Typography>
        </Toolbar>
        <MenuWrapper
          open={isOpen}
          onClose={handleClose}
          TransitionComponent={Slide}
          TransitionProps={{ direction: 'right' }}
          className={classes.menuWrapper}
        >
          <MenuItem selected={pathname === '/'} component={Link} to="/" onClick={handleClose}>Home</MenuItem>
          <MenuItem
            selected={pathname === '/profile'}
            component={Link}
            to="/profile"
            onClick={handleClose}
          >
            Profile
          </MenuItem>
          <Divider />
          {
            isLoggedIn
              ? <MenuItem onClick={(e) => { logout(); handleClose(e); }}>Logout</MenuItem>
              : (
                <MenuItem
                  selected={pathname === '/login'}
                  component={Link}
                  to="/login"
                  onClick={handleClose}
                >
                Login
                </MenuItem>
              )
          }
        </MenuWrapper>
      </AppBar>
    </div>
  );
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = displayName;

export default compose(
  withRouter,
  withStyles(styles),
)(Menu);
