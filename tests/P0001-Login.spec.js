import { test, expect } from '@playwright/test';

test('Login Test 01: Fail login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm');
});
