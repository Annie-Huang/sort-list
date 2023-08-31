import React, { FC } from 'react';
import { Hotel, HotelData } from './Hotel';

export interface HotelListProps {
  data: HotelData[];
}

export const HotelList: FC<HotelListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </ul>
  );
};
