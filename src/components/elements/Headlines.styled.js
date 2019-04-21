import styled from 'styled-components';
import config from '../../config';

const {
  screens: { mobile },
  colors: { mainDarkFontColor },
} = config;
const Headline = styled.h1`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 3px;
  color: ${mainDarkFontColor};
  @media (max-width: ${mobile}px) {
    text-align: left;
    padding-left: 0.3em;
  }
`;

const SubHeadline = styled.h2`
  text-align: center;
  margin-top: 3px;
  margin-bottom: 3px;
  color: #777;
  @media (max-width: ${mobile}px) {
    text-align: left;
    padding-left: 0.3em;
  }
`;

export { Headline, SubHeadline };
