import { defineConfig, devices } from '@playwright/test';

const PORT = 4321;

export default defineConfig({
	testDir: './e2e',
	timeout: 30_000,
	expect: { timeout: 5_000 },
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? 'github' : 'list',
	use: {
		baseURL: `http://localhost:${PORT}`,
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: `pnpm build && pnpm preview --port ${PORT}`,
		url: `http://localhost:${PORT}`,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
