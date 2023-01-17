import { test, expect } from '@playwright/test';

test('20. If cards page available', async ({ page }) => {
  await page.goto('https://demo.mercury.com/cards');
  await expect(page).toHaveURL('https://demo.mercury.com/cards');
});

test('21. Issue new standard card', async ({ page }) => {
    await page.goto('https://demo.mercury.com/cards');
    await page.locator('#id-j14l1x').click();
    await page.getByText('Standard card').click();
    await page.locator('.styles__card_BmqNZ').first().click();
    await page.getByPlaceholder('e.g. Lunch Card').click();
    await page.getByPlaceholder('e.g. Lunch Card').fill('meow card');
    await page.getByRole('button', { name: 'Issue Credit Card' }).click();
    const locator = await page.getByRole('heading', { name: 'You’re all set' });
    await expect(locator).toHaveText('You’re all set')
  });

  test('22. Issue new merchant card', async ({ page }) => {
    await page.goto('https://demo.mercury.com/cards');
    await page.locator('#id-lprcjl').click();
    const locator = await page.getByText('Merchant card');
    await expect(locator).toHaveText('Merchant card')
    await page.getByRole('heading', { name: 'Create a merchant card' }).click();
    await page.locator('label').filter({ hasText: 'Credit' }).click();
    await page.getByPlaceholder('e.g. Lunch Card').click();
    await page.getByPlaceholder('e.g. Lunch Card').fill('Merchant ');
    await page.locator('form path').nth(2).click();
    await page.getByLabel('Lock to merchant').click();
    await page.locator('div:nth-child(3) > .styles__sectionInputs_FT8Fj > .styles__comboboxWrapper_WGF8F > .styles__selectWrapper_Ub4vn > .styles__listbox_mpl6h > div:nth-child(2) > .styles__option_e0cBW').click();
    await page.getByRole('button', { name: 'Issue Credit Card' }).click();
    locator = await page.getByRole('heading', { name: 'You’re all set' });
  });

  test('23. Card filter test', async ({ page }) => {
    await page.goto('https://demo.mercury.com/cards');
    await page.getByRole('button', { name: 'Add Filter' }).click();
    await page.getByLabel('Credit').check();
    const locator = await page.getByRole('button', { name: 'Credit Cards Remove Tag' });
    await expect(locator).toHaveText('Credit Cards Remove Tag' );
  });

  test('24. Card details and reveal', async ({ page }) => {
    await page.goto('https://demo.mercury.com/cards');
    await page.getByText('••1234 Office Card').click();
    await page.getByRole('button', { name: 'Reveal card details' }).click();
    const locator = await page.getByText('5268 7600 0000 1234');
    await expect(locator).toHaveText('5268 7600 0000 1234');
  });