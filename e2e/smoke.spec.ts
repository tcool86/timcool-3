import { test, expect } from '@playwright/test';

test('home page renders core sections', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/timcool/i);
	await expect(page.locator('#about')).toBeVisible();

	await page.locator('#experience').scrollIntoViewIfNeeded();
	await expect(page.getByRole('heading', { name: 'Work Experience' }))
		.toBeVisible();

	await page.locator('#contact').scrollIntoViewIfNeeded();
	await expect(page.getByRole('button', { name: 'Send' })).toBeVisible();
});
