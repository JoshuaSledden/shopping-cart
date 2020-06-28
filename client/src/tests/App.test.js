import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Navigation from '../components/Navigation';

test('Renders the home page title.', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Home Page/i);
  expect(headerElement).toBeInTheDocument();
});
