import { FC } from 'react';
import { Rating as MuiRating } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

export interface RatingData {
  ratingValue: number;
  ratingType: string;
}

// If I don't use <StyledRating> and just use <MuiRating>, the default empty one will be a standard grey color,
// Prefer lighter grey, looks better.
const StyledRating = styled(MuiRating)({
  '& .MuiRating-iconEmpty': {
    color: 'lightgrey',
  },
});

// https://mui.com/material-ui/react-rating/
// https://mui.com/material-ui/api/rating/#Rating-prop-getLabelText
export const Rating: FC<RatingData> = ({ ratingValue, ratingType }) => {
  // Cannot just use <MuiRating name='read-only' value={ratingValue} readOnly /> for star rating (default icon is star),
  // because the empty star one is filled light grey rather than grey outline which is the default for <MuiRating>
  return (
    <>
      {ratingType === 'star' ? (
        <StyledRating
          name='read-only'
          value={ratingValue}
          precision={0.5}
          readOnly
          getLabelText={(value: number) =>
            `Star rating value: ${value} Star${value !== 1 ? 's' : ''}`
          }
          emptyIcon={<StarIcon fontSize='inherit' />}
        />
      ) : (
        <StyledRating
          name='read-only'
          value={ratingValue}
          precision={0.5}
          readOnly
          getLabelText={(value: number) =>
            `Self rating value: ${value} Circle${value !== 1 ? 's' : ''}`
          }
          icon={<CircleIcon fontSize='inherit' />}
          emptyIcon={<CircleIcon fontSize='inherit' />}
        />
      )}
    </>
  );
};
