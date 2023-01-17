import { test, expect } from '@playwright/test';

test('14. is Transaction filters works', async ({ page }) => {
  await page.goto('https://demo.mercury.com/transactions');
  await page.getByRole('button', { name: 'Add Filter' }).click();
  await page.getByRole('tab', { name: 'Amount' }).getByText('Amount').click();
  await page.locator('label').filter({ hasText: 'In (e.g. deposits, refunds)' }).click();
  await page.getByLabel('Specific amount').click();
  await page.getByLabel('Specific amount').fill('100');
  await page.getByRole('tab', { name: 'Method' }).getByText('Method').click();
  await page.locator('span').filter({ hasText: 'Mercury Payment (ACH)' }).first().click();
  await expect(page.getByRole('button', { name: 'Money in, = $100 Remove Tag' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mercury Payment (ACH) Remove Tag' })).toBeVisible();
});

test('15. view all transactions', async ({ page }) => {
    await page.goto('https://demo.mercury.com/transactions');
    await page.getByText('Jameson Accounting').click();
    await page.getByRole('link', { name: 'Jameson Accounting View all transactions' }).click();
    await expect(page.getByRole('button', { name: 'Jameson Accounting Remove Tag' })).toBeVisible();
});

