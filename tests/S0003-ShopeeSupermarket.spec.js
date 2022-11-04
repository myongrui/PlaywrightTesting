import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful path').nth(1).click();
  await page.getByRole('link', { name: 'Shopee Supermarket' }).click();
  await expect(page).toHaveURL('https://shopee.sg/supermarket');
  await page.locator('shopee-banner-popup-stateful svg').click();
});