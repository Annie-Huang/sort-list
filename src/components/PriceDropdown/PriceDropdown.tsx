import React, { FC } from 'react';

export interface PriceDropdownProps {
  selectedOption: PricingSortingOption;
  onOptionSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type PricingSortingOption = 'high-low' | 'low-high';

export const PriceDropdown: FC<PriceDropdownProps> = ({
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <form>
      <label htmlFor='price-dropdown' style={{ marginRight: '10px' }}>
        <strong>Sort by </strong>
      </label>
      <select
        name='price-dropdown'
        id='price-dropdown'
        value={selectedOption}
        onChange={onOptionSelect}
      >
        <option key='high-low' value='high-low'>
          Price high-low
        </option>
        <option key='low-high' value='low-high'>
          Price low-high
        </option>
      </select>
    </form>
  );
};
