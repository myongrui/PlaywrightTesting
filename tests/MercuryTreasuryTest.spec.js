import { test, expect } from '@playwright/test';

test('27. Treasury Page Available', async ({ page }) => {
  await page.goto('https://demo.mercury.com/accounts/treasury/party-treasury-id-0');
  await expect(page).toHaveURL('https://demo.mercury.com/accounts/treasury/party-treasury-id-0');
});

test('28. Treasury Transfer In', async ({ page }) => {
    await page.goto('https://demo.mercury.com/accounts/treasury/party-treasury-id-0');
    await page.getByRole('button', { name: 'Transfer Funds' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Transfer In' }).click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('10');
    await page.getByRole('button', { name: 'Select an account' }).click();
    await page.getByRole('menuitem', { name: 'Ops / Payroll $1,374,471.14 / Checking ••1234' }).locator('div').filter({ hasText: 'Ops / Payroll' }).nth(2).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Transfer' }).click();
    const locator = await page.getByText('You’ve started a $10.00 transferfrom Ops / Payroll to TreasuryThe money should a');
    await expect(locator).toHaveText('You’ve started a $10.00 transferfrom Ops / Payroll to TreasuryThe money should a');
  });

test('29. Treasury Transfer out', async ({ page }) => {
    await page.goto('https://demo.mercury.com/accounts/treasury/party-treasury-id-0');
    await page.getByRole('button', { name: 'Transfer Funds' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Transfer Out' }).click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('10');
    await page.getByRole('button', { name: 'Select an account' }).click();
    await page.getByText('Choice Checking').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Transfer' }).click();
    const locator = await page.getByText('You’ve started a $10.00 transferfrom Treasury to Choice CheckingThe money should');
    await expect(locator).toHaveText('You’ve started a $10.00 transferfrom Treasury to Choice CheckingThe money should');
});

test('30. Treasury Daily and Monthly filter', async ({ page }) => {
    await page.goto('https://demo.mercury.com/accounts/treasury/party-treasury-id-0');
    await page.getByRole('button', { name: 'Daily' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Monthly' }).click();
    const locator = await page.getByText('Month');
    await expect(locator).toHaveText('Month');
    await page.getByRole('button', { name: 'Monthly' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Daily' }).click();
    locator = await page.getByText('Date');
    await expect(locator).toHaveText('Date');
  });

