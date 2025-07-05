import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, it, vi } from 'vitest';

describe('App', () => {
  it('renders Header and Body components', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('body')).toBeInTheDocument();
  });

});