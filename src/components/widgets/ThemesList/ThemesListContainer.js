import {
  compose, setDisplayName, lifecycle, mapProps, withState,
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
  withState('isLoading', 'setLoading', true),
  lifecycle({
    componentDidMount() {
      const { dispatchFetchThemes, setLoading } = this.props;
      dispatchFetchThemes()
        .then(() => setLoading(false))
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('Unauthorized or no connection');
        });
    },
  }),
  mapProps(props => ({
    ...props,
    themes: props.themes.toJS(),
  })),
);

export default enhance(ThemesList);
