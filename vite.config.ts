import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      exclude: [
        'src/types.ts',
        'src/main.tsx',
        '**/*.config.**',
        'src/vite-env.d.ts',
      ],
    },
  },
})
