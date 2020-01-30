import React from 'react';
import { render } from '@testing-library/react';
import './NotFound.css';

test('NotFound renders learn react link', () => {
  const { getByText } = render(<NotFound />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
