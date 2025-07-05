import { render, screen, fireEvent } from '@testing-library/react';
import type { Product } from '@/types';
import { vi, describe, it, expect } from 'vitest';
import ProductAccordion from './ProductAccordion';

// Mock getIconPath to avoid errors with dynamic imports in tests
vi.mock('@/utils', () => ({
  getIconPath: (filename: string) => filename,
}));

const mockProduct: Product = {
  name: 'Test Product',
  icon: 'test.svg',
  description: 'Test Description',
};

describe('ProductAccordion', () => {
  it('renders product name', () => {
    render(
      <ProductAccordion
        product={mockProduct}
        expanded={false}
        onToggle={() => {}}
      />
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('shows description and icon when expanded', () => {
    render(
      <ProductAccordion
        product={mockProduct}
        expanded={true}
        onToggle={() => {}}
      />
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('calls onToggle when header is clicked', () => {
    const onToggle = vi.fn();
    render(
      <ProductAccordion
        product={mockProduct}
        expanded={false}
        onToggle={onToggle}
      />
    );
    fireEvent.click(screen.getByText('Test Product'));
    expect(onToggle).toHaveBeenCalled();
  });
});