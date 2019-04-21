import styled from 'styled-components';
import config from '../../../config';

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
  transition-property: box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  user-select: none;
  text-decoration: none;
  i {
    font-size: 40px;
  }
  &:hover {
    box-shadow: 0 0 15px 0 #aaa;
  }

  @media (max-width: ${mobile}px) {
    width: 100%;
    min-height: 14vh;
    height: auto;
    i {
      font-size: 28px;
    }
  }
`;

export default ThemeCard;
