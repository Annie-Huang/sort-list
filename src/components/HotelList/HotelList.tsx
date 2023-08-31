import React, { FC } from 'react';

export interface HotelListProps {
  data: Hotel[];
}
export interface Hotel {
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
export const HotelList: FC<HotelListProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};
