import React from 'react';
import { render } from '@testing-library/react';
import AddRecipe from './AddRecipe';

test('Footer renders learn react link', () => {
  const { getByText } = render(<AddRecipe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});