import { test, expect } from '@playwright/test';
import { credentials } from '../config/credentials';
import * as selectors from '../config/selectors';

test.describe('Automated Login Test for Engenious University', () => {
  const { email, password } = credentials;

  test('Should successfully log into Engenious University', async ({ page }) => {
    await page.goto('/');
    
    await page.click(selectors.signInButton);
    
    await page.click(selectors.loginTab);
    
    await page.fill(selectors.emailInput, email);
    await page.fill(selectors.passwordInput, password);

    await page.click(selectors.submitButton);

    await expect(page.locator(selectors.headerBurger)).toBeVisible();
    await page.click(selectors.headerBurger);

    await expect(page.getByRole('heading', { name: 'hhjfe geger' })).toBeVisible();
  });
});
