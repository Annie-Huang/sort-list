import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { Container, Logo, Summary } from './App.styles';
import { HotelList, HotelData } from './components/HotelList';
import {
  PriceDropdown,
  PricingSortingOption,
} from './components/PriceDropdown';

export default function App() {
  const [hotelList, setHotelList] = useState<HotelData[]>([]);
  const [selectedOption, setSelectedOption] = useState<PricingSortingOption>(
    'high-low'
  );

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
        <PriceDropdown
          selectedOption={selectedOption}
          onOptionSelect={(e) =>
            setSelectedOption(e.target.value as PricingSortingOption)
          }
        />
      </Summary>
      <HotelList data={hotelList} />
    </Container>
  );
}
