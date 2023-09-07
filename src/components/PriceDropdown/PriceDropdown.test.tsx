import { PriceDropdown } from './PriceDropdown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<PriceDropdown>', () => {
  it('should display correct text, options in dropdown and selected value', () => {
    render(
      <PriceDropdown
        selectedOption='high-low'
        onOptionSelect={() => jest.fn()}
      />
    );
    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('high-low');

    // https://stackoverflow.com/questions/57946870/how-to-select-an-option-from-a-select-list-with-react-testing-library
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('Price high-low');
    expect(options[1]).toHaveTextContent('Price low-high');
    expect((options[0] as HTMLOptionElement).selected).toBe(true);
    expect((options[1] as HTMLOptionElement).selected).toBe(false);
  });

  it('should call onOptionSelect when selected a value in dropdown', () => {
    const mockOnOptionSelected = jest.fn();
    render(
      <PriceDropdown
        selectedOption='high-low'
        onOptionSelect={mockOnOptionSelected}
      />
    );

    // https://testing-library.com/docs/ecosystem-user-event/#selectoptionselement-values-options
    userEvent.selectOptions(screen.getByRole('combobox'), 'Price low-high');
    expect(mockOnOptionSelected).toHaveBeenCalled();
  });
});
