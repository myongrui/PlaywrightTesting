// razer global authentication
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // Runs before each test and signs in each page.
  await page.goto('https://razerid.razer.com/');
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('ocbcPlaywright@gmail.com');
  await page.getByLabel('PasswordShow Password').click();
  await page.getByLabel('PasswordShow Password').fill('playwright123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await expect(page).toHaveURL('https://razerid.razer.com/account');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.context().storageState({ path: 'storageState.json' });
};
