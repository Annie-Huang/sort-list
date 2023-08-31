import React, { useEffect, useState } from 'react';
import { Container } from './App.styles';
import { HotelList } from './components/HotelList';
import { Hotel } from './components/HotelList/HotelList';

export default function App() {
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/results')
      .then((response) => response.json())
      .then((data) => setHotelList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <HotelList data={hotelList} />
    </Container>
  );
}
