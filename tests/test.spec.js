const {test, expect} = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://razerid.razer.com/');
  await expect(page).toHaveURL('https://razerid.razer.com/account');
  await page.getByRole('link', { name: 'My Products' }).click();
  await expect(page).toHaveURL('https://razerid.razer.com/products');
  await page.getByRole('link', { name: '+ Register a New Product' }).click();
  await expect(page).toHaveURL('https://razerid.razer.com/products/new');
});