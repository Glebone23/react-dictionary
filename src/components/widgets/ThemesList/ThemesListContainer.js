import {
  compose, setDisplayName, lifecycle, mapProps, withState,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getThemes, getUserInfo } from '../../../selectors';
import { fetchThemes, logoutUser, addTheme } from '../../../actions';
import withError from '../../HOCs';
import ThemesList from './ThemesList';

export const enhance = compose(
  setDisplayName('ThemesListContainer'),
  connect(
    state => ({
      themes: getThemes(state),
      userInfo: getUserInfo(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchFetchThemes: fetchThemes,
        dispatchLogoutUser: logoutUser,
        dispatchAddTheme: addTheme,
      },
      dispatch,
    ),
  ),
  withState('isLoading', 'setLoading', true),
  lifecycle({
    componentDidMount() {
      const {
        dispatchFetchThemes, setLoading, handleError, dispatchLogoutUser,
      } = this.props;
      dispatchFetchThemes()
        .then(() => setLoading(false))
        .catch((res) => {
          if (handleError(res.response).logout) dispatchLogoutUser();
        });
    },
  }),
  mapProps(props => ({
    ...props,
    themes: props.themes.toJS().reverse(),
  })),
);

export default withError(enhance(ThemesList));
