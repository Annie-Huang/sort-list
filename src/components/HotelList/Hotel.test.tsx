import { Hotel, HotelData } from './Hotel';
import { render, screen } from '@testing-library/react';
import jsonData from '../../../_data/data.json';

describe('<Hotel>', () => {
  it('should render correct content', () => {
    const props = jsonData.results[1] as HotelData;

    render(<Hotel {...props} />);

    expect(
      screen.getByAltText('Image of Primus Hotel Sydney')
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Primus Hotel Sydney',
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('339 Pitt St. Sydney')).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Deluxe King/i,
      })
    ).toHaveAttribute('href', '#');
    expect(screen.getByText('Free cancellation')).toBeInTheDocument();

    expect(screen.getByText('1 night total (AUD)')).toBeInTheDocument();
    expect(screen.getByText('375')).toBeInTheDocument();
    expect(screen.getByText('Save $28~')).toBeInTheDocument();
  });

  it('should not display "Free cancellation" if cancellationType is not equal to "FREE_CANCELLATION"', () => {
    const props = jsonData.results[0] as HotelData;

    render(<Hotel {...props} />);
    expect(screen.queryByText('Free cancellation')).not.toBeInTheDocument();
  });

  it('should not display "Save" text if savings is null', () => {
    const props = jsonData.results[2] as HotelData;

    render(<Hotel {...props} />);
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });
});
