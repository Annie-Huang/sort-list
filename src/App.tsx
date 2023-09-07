import React, { useEffect, useState } from 'react';
import { Container, Logo, Summary } from './App.styles';
import { HotelList, HotelData } from './components/HotelList';
import { PriceDropdown, PricingSortedBy } from './components/PriceDropdown';
import { sortHotelListByPrice } from './App.utils';

export default function App() {
  const [hotelList, setHotelList] = useState<HotelData[]>([]);
  const [sortedBy, setSortedBy] = useState<PricingSortedBy>('high-low');
  const sortedHotelList = sortHotelListByPrice(hotelList, sortedBy);

  useEffect(() => {
    fetch('http://localhost:4000/results')
      .then((response) => response.json())
      .then((data) => setHotelList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Logo src='./qantas-logo.png' alt='qantas logo' />
      {/* A page should have a h1 before using h2 (in HotelList component) for vision impaired users */}
      <h1 className='sr-only'>Qantas hotels page</h1>
      <Summary>
        <div>
          <strong>{hotelList.length}</strong>
          <i> hotels in </i>
          <strong>Sydney.</strong>
        </div>
        <PriceDropdown
          selectedOption={sortedBy}
          onOptionSelect={(e) => setSortedBy(e.target.value as PricingSortedBy)}
        />
      </Summary>
      <HotelList data={sortedHotelList} />
    </Container>
  );
}
