import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginIcon from '@material-ui/icons/ExitToApp';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {
  Root, Bar, MenuButton, Title, MenuWrapper,
} from './Menu.styled';
import config from '../../../config';

const displayName = 'Menu';

const propTypes = {
  isOpen: PropTypes.bool,
  handleToggle: PropTypes.func,
  handleClose: PropTypes.func,
  btnRef: PropTypes.shape({}),
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  location: PropTypes.shape({}).isRequired,
  pageTitle: PropTypes.string,
};

const defaultProps = {
  isOpen: false,
  handleToggle: () => {},
  handleClose: () => {},
  logout: () => {},
  btnRef: {},
  isLoggedIn: false,
  pageTitle: '',
};

function Menu({
  isOpen, handleToggle, handleClose, btnRef, isLoggedIn, logout, location: { pathname }, pageTitle,
}) {
  const { home, login } = config.pages;

  return (
    <Root>
      <Bar>
        <Toolbar>
          <MenuButton
            buttonRef={btnRef}
            aria-owns={isOpen ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            aria-label="Menu"
          >
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">{pageTitle}</Title>
        </Toolbar>
        <MenuWrapper
          open={isOpen}
          onClose={handleToggle}
          onOpen={handleToggle}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={handleToggle}
            onKeyDown={handleToggle}
          >
            <ListItem
              button
              selected={pathname === home.pathname}
              component={Link}
              to={home.pathname}
              onClick={handleClose}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={home.title} />
            </ListItem>
            <ListItem
              button
              selected={pathname === '/profile'}
              component={Link}
              to="/profile"
              onClick={handleClose}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <Divider />
            {
              isLoggedIn
                ? (
                  <ListItem button onClick={(e) => { logout(); handleClose(e); }}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                )
                : (
                  <ListItem
                    button
                    selected={pathname === login.pathname}
                    component={Link}
                    to={login.pathname}
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary={login.title} />
                  </ListItem>
                )
            }
          </div>
        </MenuWrapper>
      </Bar>
    </Root>
  );
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = displayName;

export default withRouter(Menu);
