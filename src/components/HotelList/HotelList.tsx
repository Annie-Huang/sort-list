import { FC } from 'react';
import { Hotel, HotelData } from './Hotel';
import { HotelListWrapper } from './HotelList.styles';

export interface HotelListProps {
  data: HotelData[];
}

export const HotelList: FC<HotelListProps> = ({ data }) => {
  return (
    <HotelListWrapper>
      {data.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </HotelListWrapper>
  );
};
