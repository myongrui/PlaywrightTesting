import { test, expect } from '@playwright/test';

test('14. Payment Page available', async ({ page }) => {
  await page.goto('https://demo.mercury.com/payments');
  await expect(page).toHaveURL('https://demo.mercury.com/payments');
});

test('15. Incoming Payment', async ({ page }) => {
    await page.goto('https://demo.mercury.com/payments');
    await page.getByText('Incoming').click();
    const locator = await page.getByText('Payment Requests');
    await expect(locator).toHaveText('Payment Requests');
    await page.getByText('CBCharles Bonito').first().click();
    locator = await page.getByText('June consulting fees for Pluto Project');
    await expect(locator).toHaveText('June consulting fees for Pluto Project');
  });

  test('16. Recipents Page', async ({ page }) => {
    await page.goto('https://demo.mercury.com/payments');
    await page.getByText('Recipients').click();
    await expect(page).toHaveURL('https://demo.mercury.com/payments#recipients');
  });

  test('17. Recipents Details', async ({ page }) => {
    await page.goto('https://demo.mercury.com/payments');
    await page.getByText('Recipients').click();
    await page.getByRole('link', { name: 'Aliyah McMahon' }).click();
    const locator = await page.getByText('Aliyah McMahon').nth(1);
    await expect(locator).toHaveText('Aliyah McMahon');
  });
  
  test('18. Recipents request payment', async ({ page }) => {
    await page.goto('https://demo.mercury.com/payments');
    await page.getByRole('link', { name: 'Request' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/payments/requests/create');
    await page.locator('.styles__inputChevron_xTwvi > .svg-inline--fa > path').first().click();
    await page.locator('.styles__option_e0cBW').first().click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('20');
    await page.getByPlaceholder('Invoice #114, Payment for Research Project, etc.').click();
    await page.getByPlaceholder('Invoice #114, Payment for Research Project, etc.').fill('aaa');
    await page.getByRole('button', { name: 'Review' }).click();
    await page.getByRole('button', { name: 'Create payment link' }).click();
    const locator = await page.getByText('You’ve emailed a Payment Request to Charles Bonito');
    await expect(locator).toHaveText('You’ve emailed a Payment Request to Charles Bonito');
  });
  test('19. Send Payment', async ({ page }) => {
    await page.goto('https://demo.mercury.com/payments');
    await page.getByRole('link', { name: 'Send' }).click();
    await page.locator('span').filter({ hasText: 'Jason Green' }).first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('15');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('Transfer purposeInterpretation serviceTranslation serviceHuman resource serviceE').click();
    await page.locator('div:nth-child(2) > .styles__option_e0cBW').first().click();
    await page.getByLabel('Please select a specific reason for your transfer').click();
    await page.getByText('Rent or other property expenses').click();
    await page.getByLabel('Source of funds').click();
    await page.locator('div:nth-child(3) > .styles__selectWrapper_Ub4vn > .styles__listbox_mpl6h > div > .styles__option_e0cBW').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Review' }).click();
    await page.getByRole('button', { name: 'Send Wire' }).click();
    const locator = await page.getByText('You’ve sent $15.00to Jason GreenThe money should arrive within 1-3 business days');
    await expect(locator).toHaveText('You’ve sent $15.00to Jason GreenThe money should arrive within 1-3 business days');
  });