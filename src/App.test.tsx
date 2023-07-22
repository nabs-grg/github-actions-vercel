import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header title', () => {
  render(<App />);
  expect(screen.getByText('Vercel with github actions')).toBeInTheDocument();
});
