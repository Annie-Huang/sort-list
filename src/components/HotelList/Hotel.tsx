import { FC } from 'react';
import {
  Address,
  Heading,
  HotelInfo,
  HotelWrapper,
  Image,
  Link,
  Note,
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
  const { address, title, previewImage } = property;
  const { name, cancellationOption } = offer;
  return (
    <HotelWrapper>
      <Image src={previewImage.url} alt={previewImage.caption} />
      <HotelInfo>
        <div>
          <Heading>{title}</Heading>
          <Address>{address.join('. ')}</Address>
          <Link href='#'>{name}</Link>
        </div>
        {cancellationOption.cancellationType === 'FREE_CANCELLATION' && (
          <Note>Free cancellation</Note>
        )}
      </HotelInfo>
      <div>abd</div>
    </HotelWrapper>
  );
};
