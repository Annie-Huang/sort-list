import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders landing page text', async () => {
  render(<App />);

  // Need to wait loading status to finish.
  expect(await screen.findByAltText('qantas logo')).toBeInTheDocument();

  expect(
    screen.getByRole('heading', {
      name: 'Qantas hotels page',
      level: 1,
    })
  ).toBeInTheDocument();

  expect(screen.getByText('hotels in')).toBeInTheDocument();
  expect(screen.getByText('Sydney.')).toBeInTheDocument();
});
