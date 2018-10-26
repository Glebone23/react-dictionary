import styled from 'styled-components';
import config from 'config';

const { accentColor } = config.colors;

const ButtonStyled = styled.button`
  width: 100%;
  margin-left: 1px;
  margin-top: 0.5em;
  background: ${accentColor};
  height: 34px;
  border-radius: 3px;
  color: white;
  font-size: 0.9em;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  &[disabled] {
    filter: brightness(0.9) grayscale(0.1);
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
