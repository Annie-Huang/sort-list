import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page text', () => {
  render(<App />);

  expect(screen.getByAltText('qantas logo')).toBeInTheDocument();

  expect(
    screen.getByRole('heading', {
      name: 'Qantas hotels page',
      level: 1,
    })
  ).toBeInTheDocument();

  expect(screen.getByText('hotels in')).toBeInTheDocument();
  expect(screen.getByText('Sydney.')).toBeInTheDocument();
});
