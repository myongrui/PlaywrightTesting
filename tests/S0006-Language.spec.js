const {test, expect} = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful path').nth(1).click();
  await page.locator('div[role="button"]:has-text("English")').click();
  await page.getByRole('button', { name: '简体中文' }).click();
  await expect(page).toHaveURL('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful path').nth(1).click();
  await page.locator('div[role="button"]:has-text("简体中文")').click();
  await page.getByRole('button', { name: 'Bahasa Melayu' }).click();
  await expect(page).toHaveURL('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful svg').click();
  await page.locator('div[role="button"]:has-text("Bahasa Melayu")').click();
});