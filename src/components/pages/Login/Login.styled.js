import styled from 'styled-components';
import { Headline } from 'components/elements';
import config from 'config';

const { bgGray } = config.colors;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 2em auto auto;
`;

const LoginFormWrapper = styled.div`
  width: 260px;
  margin: 1.5em auto 0;
  background: ${bgGray};
  padding: 1.3em;
  border-radius: 5px;
  box-shadow: 0 0 30px 0 rgba(204, 204, 204, 0.88);
`;

const LoginHeadline = styled(Headline)`
  font-size: 1.6em;
  font-weight: 100;
  text-align: center !important;
`;

export { Logo, LoginFormWrapper, LoginHeadline };
