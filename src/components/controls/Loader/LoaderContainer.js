import {
  compose, setDisplayName, withState, setPropTypes, lifecycle, defaultProps,
} from 'recompose';
import PropTypes from 'prop-types';
import Loader from './Loader';

let timeout;

const enhance = compose(
  setDisplayName('LoaderContainer'),
  setPropTypes({
    delay: PropTypes.number,
  }),
  defaultProps({
    delay: 0,
  }),
  withState('startFallback', 'setFallback', false),
  lifecycle({
    componentDidMount() {
      const { delay, setFallback } = this.props;
      if (delay > 0) {
        timeout = setTimeout(() => {
          setFallback(true);
        }, delay);
      } else setFallback(true);
    },
    componentWillUnmount() {
      clearTimeout(timeout);
    },
  }),
);

export default enhance(Loader);
