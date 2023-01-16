import { test, expect } from '@playwright/test';

test('01.Home page Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await expect(page.getByText('Welcome, Jane'));
})
test('02.Transaction button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Transactions' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/transactions')
})
test('03.Payment button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Payments' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/payments')
})
test('04.Cards button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Cards' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/cards')
})
test('05.Credit button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Credit' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/credit')
})
test('06.Tresury button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Tresury' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/accounts/treasury/party-treasury-id-0')
})
test('06.Capital button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Capital' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/accounts/treasury/capital')
})