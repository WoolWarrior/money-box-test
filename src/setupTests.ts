import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { afterEach } from 'vitest';

afterEach(() => {
  vi.clearAllMocks();
});