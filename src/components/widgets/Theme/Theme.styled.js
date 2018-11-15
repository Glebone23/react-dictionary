import styled from "styled-components";
import config from "config";

const {
  screens: { mobile },
  colors: { bgGray, borderGray, themeFont }
} = config;
const ThemeCard = styled.div`
  display: flex;
  position: relative;
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
  i {
    font-size: 33px;
  }
  div {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 37px;
    border-radius: 50%;
    transition: all 0.25s ease-in-out;
    i {
      font-size: 22px;
    }
    &:hover {
      transform: scale(1.1);
      background: #e9e9e9;
    }
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
    div {
      top: 50%;
      margin-top: -17.5px;
      right: 5px;
      i {
        &:before {
          content: "\f142" !important;
        }
      }
    }
  }
`;

export default ThemeCard;
