import React from 'react';
import {
  compose, setDisplayName, withState, withHandlers, withProps, lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getPageInfo } from '../../../selectors';
import Menu from './Menu';
import config from '../../../config';
import { setPageInfo } from '../../../actions';

const onRouteChanged = (pathname, dispatch) => {
  const pages = Object.values(config.pages);
  const pathMain = `/${pathname.split('/')[1]}`;
  const page = pages.filter(pageItem => pageItem.pathname === pathMain).shift();

  dispatch({ title: page ? page.title : null });
};

export const enhance = compose(
  setDisplayName('MenuContainer'),
  connect(
    state => ({
      pageInfo: getPageInfo(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchSetPageInfo: setPageInfo,
      },
      dispatch,
    ),
  ),
  withState('isOpen', 'setIsOpen', false),
  withProps(({ pageInfo }) => ({
    btnRef: React.createRef(),
    pageTitle: pageInfo.get('title'),
  })),
  withHandlers({
    handleToggle: ({ isOpen, setIsOpen }) => () => setIsOpen(!isOpen),
    handleClose: ({ setIsOpen, btnRef }) => (event) => {
      if (btnRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { dispatchSetPageInfo, location: { pathname } } = this.props;

      onRouteChanged(pathname, dispatchSetPageInfo);
    },
    componentDidUpdate(prevProps) {
      const { dispatchSetPageInfo, location: { pathname } } = this.props;

      if (pathname !== prevProps.location.pathname) {
        onRouteChanged(pathname, dispatchSetPageInfo);
      }
    },
  }),
);

export default withRouter(enhance(Menu));
