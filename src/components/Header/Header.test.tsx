import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, expect, it } from 'vitest';

describe('Header', () => {
  it('renders the header title', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

});