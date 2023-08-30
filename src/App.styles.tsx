import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid green;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 480px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 976px) {
    max-width: 976px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
