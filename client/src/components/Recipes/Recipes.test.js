import React from 'react';
import { render } from '@testing-library/react';
import Recipes from './Recipes';

test('(All) Receipes renders learn react link', () => {
  const { getByText } = render(<Recipes />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});