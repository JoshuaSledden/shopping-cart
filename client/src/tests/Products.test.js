import React from 'react';
import { render } from '@testing-library/react';
import Products from '../pages/Products';

test('Renders the products page header.', () => {
  const { getByText } = render(<Products />);
  const headerElement = getByText(/Products Page/i);
  expect(headerElement).toBeInTheDocument();
});
