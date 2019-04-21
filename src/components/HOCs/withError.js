import { compose, setDisplayName, withHandlers } from 'recompose';

const withError = compose(
  setDisplayName('CheckAuthentication'),
  withHandlers({
    handleError: () => (result) => {
      if (result.status && result.status === 401) {
        return { logout: true };
      }
      return false;
    },
  }),
);

export default withError;
