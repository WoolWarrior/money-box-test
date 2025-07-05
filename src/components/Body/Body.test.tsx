import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import Body from './Body';

// Mock categories data
vi.mock('@/data.json', () => ({default:[
  {
    name: 'Category 1',
    products: [],
  },
  {
    name: 'Category 2',
    products: [],
  },
  {
    name: 'Category 3',
    products: [],
  },
]}));

describe('Body', () => {
  it('renders all categories', () => {
    render(<Body />);
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(screen.getByText('Category 3')).toBeInTheDocument();
  });

  it('selects a category when clicked', () => {
    render(<Body />);
    const cards = screen.getAllByTestId('category-card');
    fireEvent.click(cards[1]); // Click Category 2
    const updatedCards = screen.getAllByTestId('category-card');
    expect(updatedCards[1]).toHaveAttribute('data-selected', 'true');
    expect(updatedCards[0]).toHaveAttribute('data-selected', 'false');
    expect(updatedCards[2]).toHaveAttribute('data-selected', 'false');
  });

  it('navigates to next category with right button', () => {
    render(<Body />);
    const rightBtn = screen.getAllByRole('button')[1];
    fireEvent.click(rightBtn); // Should select Category 2
    const updatedCards = screen.getAllByTestId('category-card');
    expect(updatedCards[1]).toHaveAttribute('data-selected', 'true');
  });

  it('navigates to previous category with left button', () => {
    render(<Body />);
    const leftBtn = screen.getAllByRole('button')[0];
    fireEvent.click(leftBtn); // Should select Category 3 (wrap around)
    const updatedCards = screen.getAllByTestId('category-card');
    expect(updatedCards[2]).toHaveAttribute('data-selected', 'true');
  });

    it('wraps around to first category when navigating right from last', () => {
    render(<Body />);
    const rightBtn = screen.getAllByRole('button')[1];
    // Click right 3 times to cycle through all categories
    fireEvent.click(rightBtn); // Category 2
    fireEvent.click(rightBtn); // Category 3
    fireEvent.click(rightBtn); // Category 1 (wrap)
    const updatedCards = screen.getAllByTestId('category-card');
    expect(updatedCards[0]).toHaveAttribute('data-selected', 'true');
  });
    it('wraps around to last category when navigating left from first', () => {
    render(<Body />);
    const leftBtn = screen.getAllByRole('button')[0];
    fireEvent.click(leftBtn); // Category 3 (wrap)
    const updatedCards = screen.getAllByTestId('category-card');
    expect(updatedCards[2]).toHaveAttribute('data-selected', 'true');
  });
});