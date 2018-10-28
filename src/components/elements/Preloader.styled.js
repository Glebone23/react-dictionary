import styled, { keyframes } from 'styled-components';
import config from 'config';

const color = config.colors.accentColor;
const size = 150;

const blub = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(.8);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  }
  75% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
  }
  100% {
    opacity: 0.5;
    transform: scale(.8);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
  }
`;

const BlubWrapper = styled.div`
  margin: 80px auto;
  position: relative;
  width: ${size}px;
  height: ${size}px;
`;

const Blub = styled.div`
  background: ${color};
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  opacity: 0.5;
  transform: scale(.8);
  animation: ${blub} 1.5s ease-in-out infinite;
`;

const Blub1 = styled(Blub)`
  width: ${size}px;
  height: ${size}px;
`;

const Blub2 = styled(Blub)`
  top: ${size * 0.1}px;
  left: ${size * 0.1}px;
  width: ${size * 0.8}px;
  height: ${size * 0.8}px;
  filter: brightness(0.9);
  animation-delay: 0.2s;
`;
const Blub3 = styled(Blub)`
  top: ${size * 0.2}px;
  left: ${size * 0.2}px;
  width: ${size * 0.6}px;
  height: ${size * 0.6}px;
  filter: brightness(0.8);
  animation-delay: 0.4s;
`;

export {
  BlubWrapper, Blub1, Blub2, Blub3,
};
