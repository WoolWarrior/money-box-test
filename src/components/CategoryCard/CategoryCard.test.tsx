
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import type { Category } from '@/types';
import { describe, it, expect, vi } from 'vitest';

const mockCategory: Category = {
  name: 'Test Category',
  products: [
    {
      name: 'Test Product',
      icon: 'test.svg',
      description: 'Test Description',
    },
  ],
};

describe('CategoryCard', () => {
  it('renders category name', () => {
    render(
      <CategoryCard
        category={mockCategory}
        selected={false}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  it('shows products when selected', () => {
    render(
      <CategoryCard
        category={mockCategory}
        selected={true}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    const onSelect = vi.fn();
    render(
      <CategoryCard
        category={mockCategory}
        selected={false}
        onSelect={onSelect}
      />
    );
    fireEvent.click(screen.getByText('Test Category'));
    expect(onSelect).toHaveBeenCalled();
  });
});