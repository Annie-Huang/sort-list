import styled from 'styled-components';

export const HotelWrapper = styled.li`
  --spacing: 10px;
  margin: var(--spacing) 0;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  aspect-ratio: 1;
  margin-right: 20px;
  padding-bottom: var(--spacing);
`;

export const HotelInfo = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Headline = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--spacing);
`;

export const Heading = styled.h2`
  margin-top: var(--spacing);

  // Make the ... ellipsis when it reaches certain size
  // Use max-width instead of min-width because we need to make rating component next to the text when it is short
  // width: 414px;
  max-width: 414px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-bottom: calc(var(--spacing) / 2);
`;

export const HotelPrice = styled.div`
  border-bottom: 1px solid lightgray;
  white-space: nowrap;
  text-align: end;
  padding-top: 40px;
`;

export const DisplayPrice = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: end;

  span {
    font-size: 20px;
    font-weight: bold;
    padding-top: 3px;
  }
`;

export const Savings = styled.div`
  color: red;
  padding-top: 5px;
  font-size: 18px;
`;
