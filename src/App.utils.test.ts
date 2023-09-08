import jsonData from '../_data/data.json';
import { sortHotelListByPrice } from './App.utils';
import { HotelData } from './components/HotelList';

describe('sortHotelListByPrice', () => {
  it('should sort hotel list according to the sortedBy parameter that pass in', () => {
    const hotelList = jsonData.results as HotelData[];

    expect(sortHotelListByPrice(hotelList, 'high-low')[0].property.title).toBe(
      'PARKROYAL Darling Harbour Sydney'
    );

    expect(sortHotelListByPrice(hotelList, 'low-high')[0].property.title).toBe(
      'Rydges World Square Sydney'
    );
  });
});
