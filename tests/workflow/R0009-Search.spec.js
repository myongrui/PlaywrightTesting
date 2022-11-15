import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://www.razer.com/sg-en');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search razer.com').fill('Mice');
  await page.getByPlaceholder('Search razer.com').press('Enter');
  await expect(page).toHaveURL('https://www.razer.com/sg-en/search/Mice');
  await page.locator('div[role="group"]:has-text("Razer Viper MiniUltra-Lightweight Gaming Mouse with Razer™ Chroma RGBTrue 8,500 ")').getByRole('link', { name: 'View details' }).click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/gaming-mice/Razer-Viper-Mini/RZ01-03250100-R3M1');
});