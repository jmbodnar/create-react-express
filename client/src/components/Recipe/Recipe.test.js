import React from 'react';
import { render } from '@testing-library/react';
import Recipe from './Recipe';

test('Single Recipe renders learn react link', () => {
  const { getByText } = render(<Recipe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});