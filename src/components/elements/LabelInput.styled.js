import styled from 'styled-components';
import config from '../../config';

const { mainDarkFontColor, accentColor } = config.colors;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 15px;
  display: block;
  padding: 6px 8px;
  outline: none;
  border: 1px solid #dcdcdc;
  &:focus {
    border-color: ${accentColor};
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(83, 193, 246, 0.43);
  }
`;

const LabelField = styled.label`
  font-weight: 600;
  margin-left: 1px;
  margin-bottom: 7px;
  font-size: 0.85em;
  color: ${mainDarkFontColor};
`;

export { InputField, LabelField };
