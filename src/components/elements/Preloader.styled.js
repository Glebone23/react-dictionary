import styled, { keyframes } from 'styled-components';
import config from '../../config';

const color = config.colors.borderGray;

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
  margin: auto;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  div {
    background: ${color};
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    transform: scale(0.8);
    animation: ${blub} 1.5s ease-in-out infinite;
    &:nth-child(1) {
      width: ${props => props.size}px;
      height: ${props => props.size}px;
    }
    &:nth-child(2) {
      top: ${props => props.size * 0.1}px;
      left: ${props => props.size * 0.1}px;
      width: ${props => props.size * 0.8}px;
      height: ${props => props.size * 0.8}px;
      filter: brightness(0.9);
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      top: ${props => props.size * 0.2}px;
      left: ${props => props.size * 0.2}px;
      width: ${props => props.size * 0.6}px;
      height: ${props => props.size * 0.6}px;
      filter: brightness(0.8);
      animation-delay: 0.4s;
    }
  }
`;

export default BlubWrapper;
