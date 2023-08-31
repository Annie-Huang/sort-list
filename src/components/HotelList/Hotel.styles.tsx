import styled from 'styled-components';

export const HotelWrapper = styled.li`
  margin: 10px 0;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  aspect-ratio: 1;
  margin-right: 20px;
`;

export const HotelInfo = styled.div`
  border: 1px solid pink;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  margin-top: 10px;
`;

export const Address = styled.address`
  color: grey;
`;

export const Link = styled.a`
  display: block;
  margin-top: 16px;
  color: red;
`;

export const Note = styled.div`
  color: green;
`;
