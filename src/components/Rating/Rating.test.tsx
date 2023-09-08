import { render, screen } from '@testing-library/react';
import { Rating } from './Rating';

describe('<Rating>', () => {
  it('should display the correct rating type', () => {
    const props = {
      ratingValue: 4,
      ratingType: 'star',
    };
    render(<Rating {...props} />);
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();

    const props2 = {
      ratingValue: 4,
      ratingType: 'self',
    };
    render(<Rating {...props2} />);
    expect(screen.getByTestId('self-rating')).toBeInTheDocument();
  });
});
