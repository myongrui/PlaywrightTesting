const { test, expect } = require("@playwright/test");

module.exports = {
  LoginBaseTest: async function (page) {
    await test.step(`login`, async () => {
        await expect(page).toHaveURL('https://www.razer.com/sg-en');
        await page.getByRole('button', { name: 'Shopping cart' }).click();
        await page.getByRole('link', { name: 'Log In' }).click();
        await expect(page).toHaveURL('https://razerid.razer.com/?client_id=c839026333341c074b79b27149f3783215c27663&l=en&redirect=https://www.razer.com/sg-en/razerid-confirmation?url=/sg-en&iframe=0&force_login=1');
        await page.getByLabel('Email Address').click();
        await page.getByLabel('Email Address').fill('ocbcPlaywright@gmail.com');
        await page.getByLabel('PasswordShow Password').click();
        await page.getByLabel('PasswordShow Password').fill('playwright123');
        await page.getByRole('button', { name: 'LOG IN' }).click();
        await expect(page).toHaveURL('https://www.razer.com/sg-en/razerid-confirmation?url=/sg-en');
        
    } )
  },

  LogoutBaseTest: async function (page) {
    await test.step(`logout`, async () => {
        await page.getByRole('link', { name: 'Log Out' }).click();
        await expect(page).toHaveURL('https://www.razer.com/sg-en/services')
    } )
  },

  MobileBaseTest: async function (page) {
    await test.step(`Step 1 `, async () => {
        await page.goto('https://www.razer.com/sg-en/mobile');
        await expect(page).toHaveTitle(/Mobile Phone Peripherals & Accessories | Gaming Gear For Cell Phones 📱/);
    });
  },
};