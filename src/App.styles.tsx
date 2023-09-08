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

export const Logo = styled.img`
  width: 103px;
  height: 20px;

  @media (min-width: 768px) {
    width: 206px;
    height: 40px;
  }
`;

export const Summary = styled.div`
  font-size: 1.2em;
  padding-block: var(--spacing);
  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LoaderWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;
