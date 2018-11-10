import styled from 'styled-components';
import config from 'config';
import { Headline } from './Headlines.styled';

const { bgGray } = config.colors;

const AuthPageWrapper = styled.div`
  width: 300px;
  height: 100%;
  margin: auto;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 1.2em auto auto;
`;

const AuthFormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1.5em auto 0;
  background: ${bgGray};
  padding: 1.3em;
  border-radius: 5px;
  border: 1px solid rgba(170, 170, 170, 0.16);
`;

const AuthHeadline = styled(Headline)`
  font-size: 1.6em;
  font-weight: 100;
  letter-spacing: -0.4px;
  text-align: center !important;
  padding-left: 0;
`;

export {
  AuthPageWrapper, Logo, AuthFormWrapper, AuthHeadline,
};
