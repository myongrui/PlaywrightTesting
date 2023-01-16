import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('Tester');
  await page.locator('[id="customer\\.lastName"]').click();
  await page.locator('[id="customer\\.lastName"]').fill('PW');
  await page.locator('[id="customer\\.address\\.street"]').click();
  await page.locator('[id="customer\\.address\\.street"]').fill('nowhere');
  await page.locator('[id="customer\\.address\\.city"]').click();
  await page.locator('[id="customer\\.address\\.city"]').fill('near');
  await page.locator('[id="customer\\.address\\.state"]').click();
  await page.locator('[id="customer\\.address\\.state"]').fill('you');
  await page.getByRole('row', { name: 'Zip Code:' }).getByRole('cell').nth(1).click();
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('123456');
  await page.locator('[id="customer\\.phoneNumber"]').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('999');
  await page.locator('[id="customer\\.ssn"]').click();
  await page.locator('[id="customer\\.ssn"]').fill('999');
  await page.locator('[id="customer\\.username"]').click();
  await page.locator('[id="customer\\.username"]').fill('PWTester');
  await page.locator('[id="customer\\.password"]').click();
  await page.locator('[id="customer\\.password"]').fill('playwright');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('playwright');
  await page.getByRole('button', { name: 'Register' }).click();
});