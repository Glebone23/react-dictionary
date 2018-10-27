import {
  compose, setDisplayName, withState, setPropTypes, lifecycle,
} from 'recompose';
import PropTypes from 'prop-types';
import Loader from './Loader';

const enhance = compose(
  setDisplayName('LoaderContainer'),
  setPropTypes({
    delay: PropTypes.number,
  }),
  withState('startFallback', 'setFallback', false),
  lifecycle({
    componentDidMount() {
      const { delay, setFallback } = this.props;
      if (delay > 0) {
        const dataStart = Date.now();
        const interval = setInterval(() => {
          if (Date.now() - dataStart >= delay) {
            setFallback(true);
            clearInterval(interval);
          }
        }, 16);
      } else setFallback(true);
    },
  }),
);

export default enhance(Loader);
