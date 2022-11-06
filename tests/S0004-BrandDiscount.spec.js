import { test, expect } from '@playwright/test';
test('Brand discount page', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful svg').click();
  await page.getByRole('link', { name: 'Big Brand Discounts' }).click();
  await expect(page).toHaveURL('https://shopee.sg/m/big-brand-discounts');
  await page.locator('article:has-text("NEW USER VOUCHER$10 OFFMin. Spend $0First Purchase OnlyClaim")').getByRole('button', { name: 'Claim' }).click();
  await expect(page).toHaveURL('https://shopee.sg/buyer/login?next=https%3A%2F%2Fshopee.sg%2Fm%2Fbig-brand-discounts');
});