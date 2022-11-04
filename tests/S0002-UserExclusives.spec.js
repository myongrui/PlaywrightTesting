import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful path').nth(1).click();
  await page.getByRole('link', { name: 'New User Exclusives' }).click();
  await expect(page).toHaveURL('https://shopee.sg/m/new-user-zone');
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful svg').click();
  await page.getByRole('link', { name: 'Daily $0.10 Sales' }).click();
  await expect(page).toHaveURL('https://shopee.sg/m/daily-10cents-sales');
});