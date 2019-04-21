import {
  compose, setDisplayName, lifecycle, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getThemeInfo } from '../../../selectors';
import { fetchCurrentTheme, setPageInfo } from '../../../actions';
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
        dispatchSetPageInfo: setPageInfo,
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
    componentDidUpdate() {
      const { dispatchSetPageInfo, themeInfo } = this.props;
      const title = themeInfo.get('title');

      dispatchSetPageInfo({ title: title ? `Theme: ${title}` : null });
    },
  }),
  mapProps(props => ({
    ...props,
    // themeInfo: props.themeInfo,
    words: props.themeInfo.get('words').toJS(),
  })),
);

export default enhance(ThemePage);
