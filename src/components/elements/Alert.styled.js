import styled from 'styled-components';

const AlertWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 13px 37px;
  text-align: center;
  margin: 12px auto -12px;
  font-size: 13px;
  border-radius: 5px;
  color: ${({ type }) => (type === 'error' ? '#75050a' : '#006300')};
  background-color: ${({ type }) => (type === 'error' ? 'rgba(255, 133, 147, 0.9)' : '#a7ecaa')};
  border: 1px solid rgba${({ type }) => (type === 'error' ? '(97, 0, 0, 0.21)' : '(0, 128, 0, 0.21)')};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  &:before {
    content: '${({ type }) => (type === 'error' ? '🤬' : '😉')}';
    position: absolute;
    left: 10px;
    top: 60%;
    margin-top: -0.9em;
    font-size: 1.8em;
  }
`;

export default AlertWrapper;
