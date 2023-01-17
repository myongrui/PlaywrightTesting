import { test, expect } from '@playwright/test';

test('08.If signed in', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    const locator = page.getByText('Welcome, Jane');
    await expect(locator).toHaveText('Welcome, Jane');
})

test('09. If Move money works', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Capital' }).click();
    await page.getByRole('button', { name: 'Move Money' }).click();
    await page.getByText('Pay Someone').click();
    await page.getByText('Jason Green').click();
    await page.getByText('International Wire').click();
    await page.getByText('International WireUsed last timeFree for USD1-3 business days').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('15');
    await page.getByText('Send as SHAFree').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Transfer purpose').click();
    await page.locator('.styles__option_e0cBW').first().click();
    await page.getByLabel('Please select a specific reason for your transfer').click();
    await page.getByText('Buying property abroad').click();
    await page.getByText('Source of fundsSalaryInvestments (stocks, properties, etc.)InheritanceLoanOther').click();
    await page.locator('div:nth-child(3) > .styles__selectWrapper_Ub4vn > .styles__listbox_mpl6h > div > .styles__option_e0cBW').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Review' }).click();
    await page.getByRole('button', { name: 'Send Wire' }).click();
    const locator = page.getByText('You’ve sent $15.00to Jason GreenThe money should arrive within 1-3 business days');
    await expect(locator).toHaveText('You’ve sent $15.00to Jason GreenThe money should arrive within 1-3 business days');
})

test('10. Add fund', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('button', { name: 'Move Money' }).click();
    await page.getByText('Add or Receive Funds').click();
    await page.getByText('Bank Transfer').click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('20');
    await page.locator('#fromAccountTPId').click();
    await page.getByText('$1,374,471.14').click();
    await page.getByRole('button', { name: 'Select an account' }).click();
    await page.getByText('Choice Savings ••7658').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Transfer' }).click();
    const locator =  page.getByText('You’ve started a $20.00 transfer');
    await expect(locator).toHaveText('You’ve started a $20.00 transfer');
  });

  test('11. Payment Request', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('button', { name: 'Move Money' }).click();
    await page.getByText('Payment Request').click();
    await page.getByPlaceholder('Choose or create a contact').click();
    await page.locator('div:nth-child(2) > .styles__option_e0cBW').first().click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('50');
    await page.locator('.DBASelector__comboboxWrapper_KN1j9 > .styles__comboboxWrapper_WGF8F > .styles__selectWrapper_Ub4vn > .styles__textboxWrapper_yzhTM > .styles__inputChevron_xTwvi').click();
    await page.getByRole('button', { name: 'AR $0.00 / Checking ••4296' }).click();
    await page.getByRole('menuitem', { name: 'Choice Checking $2,023,267.12 / Checking ••1734' }).locator('div').filter({ hasText: 'Choice Checking' }).nth(2).click();
    await page.getByRole('button', { name: 'Review' }).click();
    await page.getByRole('button', { name: 'Create payment link' }).click();
    const locator =  page.getByText('You’ve emailed a Payment Request to Charles Bonito');
    await expect(locator).toHaveText('You’ve emailed a Payment Request to Charles Bonito')
  });

  test('12. Transfer Between Accounts', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('button', { name: 'Move Money' }).click();
    await page.getByText('Transfer Between Accounts').click();
    await page.getByPlaceholder('0.00').click();
    await page.getByPlaceholder('0.00').fill('100');
    await page.locator('#fromAccountTPId').click();
    await page.getByRole('menuitem', { name: 'Ops / Payroll $1,374,471.14 / Checking ••1234' }).locator('div').filter({ hasText: 'Ops / Payroll' }).nth(2).click();
    await page.getByRole('button', { name: 'Select an account' }).click();
    await page.getByRole('menuitem', { name: 'Choice Checking $2,023,267.12 / Checking ••1734' }).locator('div').filter({ hasText: 'Choice Checking' }).nth(2).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Transfer' }).click();
    const locator = await page.getByText('You’ve started a $100.00 transfer');
    await expect(locator).toHaveText('You’ve started a $100.00 transfer');
  });

  test('13. Search Bar Function', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByPlaceholder('Search for transactions, accounts, pages, payees …').click();
    await page.getByPlaceholder('Search for transactions, accounts, pages, payees …').fill('tra');
    const locator = await page.getByText('Transactions Page');
    await expect(locator).toHaveText('Transactions Page');
    await page.getByText('Transactions Page').click();
    await expect(page).toHaveURL('https://demo.mercury.com/transactions');
  });