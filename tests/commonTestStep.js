const { test, expect } = require("@playwright/test");

module.exports = {
  MobileBaseTest: async function (page) {
    await test.step(`Step 1 `, async () => {
        await page.goto('https://www.razer.com/sg-en/mobile');
        await expect(page).toHaveTitle(/Mobile Phone Peripherals & Accessories | Gaming Gear For Cell Phones 📱/);
    });
  },
};