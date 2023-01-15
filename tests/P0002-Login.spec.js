import { test, expect } from '@playwright/test';
test('Login Test 01: Fail login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('playwrightTester');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('pt123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('An internal error has occurred and has been logged.').click();
});
