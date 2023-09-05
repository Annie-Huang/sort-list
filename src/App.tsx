import React, { useEffect, useState } from 'react';
import { Container, Logo, Summary } from './App.styles';
import { HotelList, HotelData } from './components/HotelList';

export default function App() {
  const [hotelList, setHotelList] = useState<HotelData[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/results')
      .then((response) => response.json())
      .then((data) => setHotelList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Logo src='./qantas-logo.png' alt='qantas logo' />
      <Summary>
        <div>
          <strong>{hotelList.length}</strong>
          <i> hotels in </i>
          <strong>Sydney.</strong>
        </div>
        <div>
          <strong>Sort by </strong>
        </div>
      </Summary>
      <HotelList data={hotelList} />
    </Container>
  );
}
