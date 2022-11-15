import { test, expect } from '@playwright/test';
import commonTestStep from './commonTestStep';



test('Test 00.If Razer-Mobile page available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
});

test('Test 01.If Razer-Mobile page first item available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
  await page.locator('div[role="listitem"]:has-text("Razer Kishi V2 for iPhone Universal Mobile Gaming Controller for iPhone Learn Mo") a').first().click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-controllers/razer-kishi-v2-for-iphone');
  await page.getByRole('heading', { name: 'RAZER KISHI V2 for iPhone' }).click();

  await page.locator('div[role="listitem"]:has-text("Razer Hammerhead True Wireless Pro Take your audio immersion to new heights with")').getByRole('link', { name: 'Learn More >' }).click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-earphones/razer-hammerhead-true-wireless-pro');
  await page.getByRole('heading', { name: 'Razer Hammerhead True Wireless Pro' }).click();

});

