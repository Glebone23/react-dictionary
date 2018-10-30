import styled from 'styled-components';

const AlertWrapper = styled.div`
  width: 100%;
  padding: 13px;
  text-align: center;
  margin: 12px auto -12px;
  font-size: 13px;
  border-radius: 5px;
  color: ${({ type }) => (type === 'error' ? '#86181d' : '#006300')};
  background-color: ${({ type }) => (type === 'error' ? '#ffdce0' : '#a7ecaa')};
  border: 1px solid rgba${({ type }) => (type === 'error' ? '(97, 0, 0, 0.21)' : '(0, 128, 0, 0.21)')};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
`;

export default AlertWrapper;
