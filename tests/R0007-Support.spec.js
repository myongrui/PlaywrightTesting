import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://www.razer.com/sg-en');
  await page.getByRole('link', { name: 'Support' }).click();
  await expect(page).toHaveURL('https://support.razer.com/?c=sg');
  await page.locator('ul:has-text("PC Console Mobile Lifestyle Services Replacement Parts")').getByRole('link', { name: 'PC' }).click();
  await expect(page).toHaveURL('https://support.razer.com/pc');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await expect(page).toHaveURL('https://support.razer.com/pc/gaming-laptops');
  await page.getByRole('link', { name: 'Razer Blade 14" (2022) | RZ09-0427' }).click();
  await expect(page).toHaveURL('https://mysupport.razer.com/app/answers/detail/a_id/5915');
});