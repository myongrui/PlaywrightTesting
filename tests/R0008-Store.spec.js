import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://www.razer.com/sg-en');
    await page.getByRole('link', { name: 'Store' }).click();
    await expect(page).toHaveURL('https://www.razer.com/sg-en/store');
    await page.getByRole('link', { name: 'Mice' }).click();
    await expect(page).toHaveURL('https://www.razer.com/sg-en/store/gaming-mice');
    await page.getByRole('link', { name: 'BUY - Razer Naga V2 Pro, For S$289.00' }).click();
    await expect(page).toHaveURL('https://www.razer.com/sg-en/gaming-mice/Razer-Naga-V2-Pro/RZ01-04400100-R3A1');
    await page.getByRole('button', { name: 'Add to Cart - Razer Naga V2 Pro. For S$289.00' }).click();
    await expect(page).toHaveURL('https://www.razer.com/sg-en/product-added/RZ01-04400100-R3A1');
});