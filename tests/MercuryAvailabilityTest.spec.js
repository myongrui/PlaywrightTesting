import { test, expect } from '@playwright/test';

test('01.If Home page Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await expect(page).toHaveURL('https://demo.mercury.com/dashboard')
})
test('02.If Transaction button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Transactions' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/transactions')
})
test('03.If Payment button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Payments' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/payments')
})
test('04.If Cards button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Cards' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/cards')
})
test('05.If Credit button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Credit' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/credit')
})
test('06.If Tresury button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Treasury' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/accounts/treasury/party-treasury-id-0')
})
test('07.If Capital button Available', async ({ page }) => {
    await page.goto('https://demo.mercury.com/dashboard');
    await page.getByRole('link', { name: 'Capital' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/capital')
})