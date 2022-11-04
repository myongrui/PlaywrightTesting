import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://shopee.sg/');
  await page.locator('shopee-banner-popup-stateful path').nth(1).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'help' }).click()
  ]);
  await page1.getByPlaceholder('Search...').click();
  await page1.getByPlaceholder('Search...').fill('log in');
  await page1.getByPlaceholder('Search...').press('Enter');
  await expect(page1).toHaveURL('https://help.shopee.sg/portal/search?keyword=log%20in');
  await page1.locator('#help-center-concat div:has-text("6562066610Mon - Sun 8am - 10pm")').nth(3).click();
  await page1.locator('.contact_items_inner___2HmqW > div:nth-child(2)').click();
  await expect(page1).toHaveURL('https://help.shopee.sg/portal/webform/7a48024995c847d9a4586bab9fde57a7?entryPoint=1&lastArticleID=76759&previousPage=other%20articles?entryPoint=1&lastArticleID=');
  await page1.getByText('Select').nth(1).click();
  await page1.getByRole('tooltip', { name: 'Seller Buyer' }).getByText('Seller').click();
  await page1.locator('#d9bf313b14 > .shopee-react-select > .trigger').click();
  await page1.getByText('Payments & Escrow').click();
});