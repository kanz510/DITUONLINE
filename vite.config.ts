import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900,
  },
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
  },
} as never);
