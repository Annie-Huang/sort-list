import styled from 'styled-components';

export const Container = styled.div`
  //border: 1px solid green;
  --spacing: 10px;

  // Tailwind container setting.
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 2) 0;

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
