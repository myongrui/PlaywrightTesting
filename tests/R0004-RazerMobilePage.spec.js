import { test, expect } from '@playwright/test';
import commonTestStep from './commonTestStep';

test('Test 00.If Razer-Mobile page available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
});

test('Test 01.If Razer-Mobile page first item link is available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
  await page.locator('div[role="listitem"]:has-text("Razer Kishi V2 for iPhone Universal Mobile Gaming Controller for iPhone Learn Mo") a').first().click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-controllers/razer-kishi-v2-for-iphone');
  await expect(page).toHaveScreenshot()
});

test('Test 02.If Razer-Mobile page second item link is available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
  await page.locator('div[role="listitem"]:has-text("Razer Kishi V2 for Android Universal Mobile Gaming Controller for Android Learn ")').getByRole('link', { name: 'Learn More >' }).click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-controllers/razer-kishi-v2-for-android');
});

test('Test 03.If Razer-Mobile page third item is available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
  await page.locator('div[role="listitem"]:has-text("Razer Kishi Make your move with our award-winning universal mobile controller th")').getByRole('link', { name: 'Learn More >' }).click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-controllers/razer-kishi');
});

test('Fail Test 01.If Razer-Mobile page third item is available', async ({ page }) => {
  await commonTestStep.MobileBaseTest(page);
  await page.locator('div[role="listitem"]:has-text("Razer Kishi Make your move with our award-winning universal mobile controller th")').getByRole('link', { name: 'Learn More >' }).click();
  await expect(page).toHaveURL('https://www.razer.com/sg-en/mobile-controllersi');
});
