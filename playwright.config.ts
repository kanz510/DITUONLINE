import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 90_000,
  retries: 0,
  reporter: [['list']],
  outputDir: 'test-results',
  use: {
    baseURL: 'http://localhost:4173',
    channel: 'msedge',
    headless: true,
    launchOptions: { args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] },
  },
  webServer: {
    command: 'npx vite build && npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
