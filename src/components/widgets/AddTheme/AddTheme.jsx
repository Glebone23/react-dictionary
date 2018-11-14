import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/controls';
import { AddThemeInput, AddThemeCard } from './AddTheme.styled';

const displayName = 'AddTheme';

const propTypes = {
  handleShowInput: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputBlur: PropTypes.func,
  isShowInput: PropTypes.bool,
  inputValue: PropTypes.string,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  handleInputBlur: undefined,
  isShowInput: false,
  isLoading: false,
  inputValue: '',
};

function AddTheme({
  isShowInput,
  handleShowInput,
  handleInputBlur,
  handleInputChange,
  handleSubmit,
  inputValue,
  inputRef,
  isLoading,
}) {
  if (isShowInput) setTimeout(() => inputRef.current.focus());
  return (
    <AddThemeCard onClick={handleShowInput}>
      <form onSubmit={handleSubmit}>
        <Loader isLoading={isLoading} delay={500} defaultPreloaderSize={50}>
          {isShowInput ? (
            <AddThemeInput
              placeholder="Theme name"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              ref={inputRef}
            />
          ) : (
            <i className="far fa-plus-square" />
          )}
        </Loader>
      </form>
    </AddThemeCard>
  );
}

AddTheme.displayName = displayName;
AddTheme.propTypes = propTypes;
AddTheme.defaultProps = defaultProps;

export default AddTheme;
