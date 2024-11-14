import { test, expect } from '@playwright/test';

test.describe('Automated Login Test for Engenious University', () => {
const userEmail = 'gejeboc116@gianes.com';
const userPassword = 'zJ8bpk6Jh2JKYdi';

test('Should successfully log into Engenious University', async ({ page }) => {
  await page.goto('https://university.engenious.io/');
  
  await page.click('button:has-text("Sign In")');
  
  await page.click('a.MuiTypography-root[href="/login"]');
  
  await page.fill('input[name="email"]', userEmail);
  await page.fill('input[name="password"]', userPassword);

  await page.click('button.MuiButton-containedPrimary[type="submit"]');

  await expect(page.locator('.Header_burger__BqrYh [aria-label="open drawer"]')).toBeVisible();
  await page.click('.Header_burger__BqrYh [aria-label="open drawer"]');

    await expect(page.getByRole('heading', { name: 'hhjfe geger' })).toBeVisible();
});
});