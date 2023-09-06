import { HotelData } from './components/HotelList';
import { PricingSortedBy } from './components/PriceDropdown';

export const sortHotelListByPrice = (
  hotelList: HotelData[],
  sortedBy: PricingSortedBy
) =>
  hotelList.sort((a, b) =>
    sortedBy === 'high-low'
      ? b.offer.displayPrice.amount - a.offer.displayPrice.amount
      : a.offer.displayPrice.amount - b.offer.displayPrice.amount
  );
