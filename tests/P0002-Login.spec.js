import { test, expect } from '@playwright/test';
test('Login Test 01: Fail login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('playwrightTest');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('pt123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/login.htm;jsessionid=D612E23DCB5C3BD1AAC8C021FED9CB2D');
  await page.getByText('The username and password could not be verified.').click();
});
