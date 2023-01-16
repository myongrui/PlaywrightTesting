import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('PWTester');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('playwright');
  await page.getByRole('button', { name: 'Log In' }).click();
});