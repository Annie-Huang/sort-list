import React, { FC } from 'react';
import { Form, Select } from './PriceDropdown.styles';

export interface PriceDropdownProps {
  selectedOption: PricingSortedBy;
  onOptionSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type PricingSortedBy = 'high-low' | 'low-high';

export const PriceDropdown: FC<PriceDropdownProps> = ({
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <Form>
      <label htmlFor='price-dropdown'>
        <strong>Sort by </strong>
      </label>
      <Select
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
      </Select>
    </Form>
  );
};
