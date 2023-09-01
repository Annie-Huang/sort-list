import { Rating } from '@mui/material';
import { FC } from 'react';
import {
  Address,
  DisplayPrice,
  Heading,
  Headline,
  HotelInfo,
  HotelPrice,
  HotelWrapper,
  Image,
  Link,
  Note,
  Savings,
} from './Hotel.styles';

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
      cancellationType: 'FREE_CANCELLATION' | 'NOT_REFUNDABLE';
    };
  };
}

export const Hotel: FC<HotelData> = ({ property, offer }) => {
  const { address, title, previewImage, rating } = property;
  const { name, cancellationOption, displayPrice, savings } = offer;
  return (
    <HotelWrapper>
      <Image src={previewImage.url} alt={previewImage.caption} />
      <HotelInfo>
        <div>
          <Headline>
            <Heading>{title}</Heading>
            <Rating
              name='read-only'
              value={rating.ratingValue}
              precision={0.5}
              readOnly
            />
          </Headline>
          <Address>{address.join('. ')}</Address>
          <Link href='#'>{name}</Link>
        </div>
        {cancellationOption.cancellationType === 'FREE_CANCELLATION' && (
          <Note>Free cancellation</Note>
        )}
      </HotelInfo>
      <HotelPrice>
        <div>1 night total (AUD)</div>
        <DisplayPrice>
          <span>$</span>
          {displayPrice.amount}
        </DisplayPrice>
        {savings && <Savings>Save ${savings.amount}~</Savings>}
      </HotelPrice>
    </HotelWrapper>
  );
};
