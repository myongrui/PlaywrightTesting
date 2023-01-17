import { test, expect } from '@playwright/test';

test('25. Credit Page available', async ({ page }) => {
  await page.goto('https://demo.mercury.com/credit');
  await expect(page).toHaveURL('https://demo.mercury.com/credit');
});

test('26. Credit pay', async ({ page }) => {
    await page.goto('https://demo.mercury.com/credit');
    await page.getByRole('button', { name: 'Pay' }).first().click();
    await page.getByLabel('Amount').click({
      clickCount: 4
    });
    await page.getByLabel('Amount').fill('1');
    await page.getByRole('button', { name: 'Review' }).click();
    await page.locator('div').filter({ hasText: 'Make a credit paymentOnce confirmed, your payment will instantly be applied to y' }).nth(2).click();
    await page.getByRole('button', { name: 'Confirm Payment' }).click();
    await expect(page).toHaveURL('https://demo.mercury.com/credit/onboarding');
});

