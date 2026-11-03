import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  // SwiftShader WebGL is significantly slower on shared GitHub runners.
  // Keep local tests fast, but give CI one worker and enough time to render 3D.
  timeout: process.env.CI ? 180_000 : 90_000,
  workers: process.env.CI ? 1 : undefined,
  retries: 0,
  reporter: [['list']],
  outputDir: 'test-results',
  use: {
    baseURL: 'http://localhost:4173',
    channel: process.env.PLAYWRIGHT_CHANNEL || (process.platform === 'win32' && !process.env.CI ? 'msedge' : undefined),
    headless: true,
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined,
      args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    },
  },
  webServer: {
    command: 'npx vite build && npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
