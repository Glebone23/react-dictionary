import { createRef } from 'react';
import {
  compose, setDisplayName, withState, withHandlers, withProps,
} from 'recompose';
import { isEmpty } from 'helpers';
import AddTheme from './AddTheme';

const enhance = compose(
  setDisplayName('AddThemeContainer'),
  withState('isShowInput', 'setShowInput', false),
  withState('inputValue', 'setInputValue', ''),
  withState('isLoading', 'setLoading', false),
  withProps(() => ({
    inputRef: createRef(),
  })),
  withHandlers({
    handleShowInput: ({ setShowInput }) => () => {
      setShowInput(true);
    },
    handleInputBlur: ({ setShowInput, setInputValue }) => () => {
      setShowInput(false);
      setInputValue('');
    },
    handleInputChange: ({ setInputValue }) => (event) => {
      setInputValue(event.target.value);
    },
  }),
  withHandlers({
    handleSubmit: props => (event) => {
      const {
        inputValue, dispatchAddTheme, handleInputBlur, setLoading,
      } = props;
      event.preventDefault();
      if (!isEmpty(inputValue)) {
        setLoading(true);
        dispatchAddTheme(inputValue).then(() => setLoading(false));
        handleInputBlur(props);
      }
    },
  }),
);

export default enhance(AddTheme);
