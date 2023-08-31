import { FC } from 'react';

export interface HotelData {
  id: string;
  property: {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
      url: string;
      caption: string;
      imageType: string;
    };
    rating: {
      ratingValue: number;
      ratingType: string;
    };
  };
  offer: {
    promotion: {
      title: string;
      type: string;
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: string;
    };
    savings: {
      amount: number;
      currency: string;
    };
    cancellationOption: {
      cancellationType: string;
    };
  };
}

export const Hotel: FC<HotelData> = ({ id }) => {
  return <li>{id}</li>;
};
