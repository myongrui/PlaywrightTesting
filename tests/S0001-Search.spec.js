import { test, expect } from '@playwright/test';
test('Search feature', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful svg').click();
  await page.getByPlaceholder('Register now & get $10 off voucher!').click();
  await page.getByPlaceholder('Register now & get $10 off voucher!').fill('shirts');
  await page.getByPlaceholder('Register now & get $10 off voucher!').press('Enter');
  await expect(page).toHaveURL('https://shopee.sg/search?keyword=shirts');
});