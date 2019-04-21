import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import config from '../../../config';

const Root = styled.div`
  flex-grow: 1;
  display: flex;
`;

const Bar = styled(AppBar)`
  && {
    background-color: ${config.colors.accentColor};
    position: static;
  }
`;

const MenuButton = styled(Button)`
  && {
    color: inherit;
    margin-left: -12px;
    margin-right: 20px;
  }
`;

const Title = styled(Typography)`
  && {
    flex-grow: 1;
    color: inherit;
  }
`;

const MenuWrapper = styled(SwipeableDrawer)`
  && {
    & div[role="document"] {
      width: 240px
    }
  }
`;

export {
  Root, Bar, MenuButton, Title, MenuWrapper,
};
