import {
  compose, setDisplayName, lifecycle, mapProps,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getThemes } from 'selectors';
import { fetchThemes } from 'actions';
import ThemesList from './ThemesList';

export const enhance = compose(
  setDisplayName('ThemesListContainer'),
  connect(
    state => ({
      themes: getThemes(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchFetchThemes: fetchThemes,
      },
      dispatch,
    ),
  ),
  lifecycle({
    componentDidMount() {
      this.props.dispatchFetchThemes();
    },
  }),
  mapProps(props => ({
    ...props,
    themes: props.themes.toJS(),
  })),
);

export default enhance(ThemesList);
