import styled from 'styled-components';

const InfoWrapper = styled.div`
    border: 1px solid #d8dee2;
    border-radius: 5px;
    padding: 15px 20px;
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    a {
      color: #0366d6;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
`;

export default InfoWrapper;
