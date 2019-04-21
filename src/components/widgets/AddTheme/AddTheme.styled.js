import styled from 'styled-components';
import config from '../../../config';
import ThemeCard from '../Theme/Theme.styled';

const { bgGray, borderGray, themeFont } = config.colors;
const AddThemeCard = styled(ThemeCard)`
  svg {
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    background: ${bgGray};
    color: ${themeFont};
    border-color: ${borderGray};
    svg {
      transform: scale(1.15);
    }
  }
`;

const AddThemeInput = styled.input`
  width: 100%;
  height: 45px;
  border: 0;
  outline: none !important;
  background: none;
  text-align: center;
  color: ${themeFont};
  font-weight: 800;
  font-size: 1em;
  &::placeholder {
    color: #d4d4d4;
  }
`;

export { AddThemeInput, AddThemeCard };
