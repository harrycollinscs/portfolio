import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/All/i);
    expect(linkElement).toBeInTheDocument();
  });
})

