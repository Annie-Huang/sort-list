import React, { useEffect, useState } from 'react';
import { Container, LoaderWrapper, Logo, Summary } from './App.styles';
import { HotelList, HotelData } from './components/HotelList';
import { PriceDropdown, PricingSortedBy } from './components/PriceDropdown';
import { sortHotelListByPrice } from './App.utils';
import CircularProgress from '@mui/material/CircularProgress';

export default function App() {
  const [hotelList, setHotelList] = useState<HotelData[]>([]);
  const [sortedBy, setSortedBy] = useState<PricingSortedBy>('high-low');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sortedHotelList = sortHotelListByPrice(hotelList, sortedBy);

  const getData = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fetch('http://localhost:4000/results')
      .then((response) => response.json())
      .then((data) => setHotelList(data))
      .catch((error) => console.error(error));

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <CircularProgress size={80} />
      </LoaderWrapper>
    );
  }

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
