import { compose, setDisplayName, withHandlers } from 'recompose';

const withError = compose(
  setDisplayName('CheckAuthentication'),
  withHandlers({
    handleError: () => ({ status }) => {
      if (status && status === 401) return { logout: true };
      return null;
    },
  }),
);

export default withError;
