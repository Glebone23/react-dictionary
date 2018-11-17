import {
  compose, setDisplayName, lifecycle, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getThemeInfo } from 'selectors';
import { fetchCurrentTheme } from 'actions';
import ThemePage from './ThemePage';

const enhance = compose(
  setDisplayName('ThemePageContainer'),
  connect(
    state => ({
      themeInfo: getThemeInfo(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchFetchCurrentTheme: fetchCurrentTheme,
      },
      dispatch,
    ),
  ),
  lifecycle({
    componentDidMount() {
      const { match, dispatchFetchCurrentTheme } = this.props;
      const themeId = match.url.split('/')[2];
      dispatchFetchCurrentTheme(themeId);
    },
  }),
  mapProps(props => ({
    ...props,
    themeInfo: props.themeInfo,
  })),
);

export default enhance(ThemePage);
