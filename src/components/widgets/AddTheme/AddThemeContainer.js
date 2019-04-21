import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';
import { isEmpty } from '../../../helpers';
import AddTheme from './AddTheme';

const enhance = compose(
  setDisplayName('AddThemeContainer'),
  withState('isShowInput', 'setShowInput', false),
  withState('inputValue', 'setInputValue', ''),
  withState('isLoading', 'setLoading', false),
  withHandlers({
    handleShowInput: ({ setShowInput }) => () => {
      setShowInput(true);
    },
    handleInputBlur: ({ setShowInput }) => () => {
      setShowInput(false);
    },
    handleInputChange: ({ setInputValue }) => (event) => {
      setInputValue(event.target.value);
    },
  }),
  withHandlers({
    handleSubmit: props => (event) => {
      const {
        inputValue, dispatchAddTheme, handleInputBlur, isLoading, setLoading,
      } = props;
      event.preventDefault();
      if (!isEmpty(inputValue) && !isLoading) {
        setLoading(true);
        dispatchAddTheme(inputValue)
          .then(() => setLoading(false))
          .catch(() => setLoading(false));
        handleInputBlur(props);
      }
    },
  }),
);

export default enhance(AddTheme);
