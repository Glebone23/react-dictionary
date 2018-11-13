import styled from 'styled-components';
import config from 'config';

const {
  screens: { mobile },
  colors: { bgGray, borderGray, themeFont },
} = config;
const ThemeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  background: ${bgGray};
  color: ${themeFont};
  font-weight: 800;
  font-size: 1.25em;
  border-radius: 5px;
  border: 3px solid ${borderGray};
  margin: 0 0.2em 0.4em 0.2em;
  cursor: pointer;
  transition-property: color, border-color, background;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  user-select: none;
  i {
    font-size: 33px;
  }
  &:hover {
    background: linear-gradient(to left top, #b814f6, #de8b2d);
    color: white;
    border-color: #d8d8d8;
  }

  @media (max-width: ${mobile}px) {
    width: 100%;
    min-height: 12vh;
    height: auto;
    i {
      font-size: 28px;
    }
  }
`;

export default ThemeCard;
