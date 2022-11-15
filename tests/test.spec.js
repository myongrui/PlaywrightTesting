const {test} = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto("https://www.razer.com/sg-en");
    await page.waitForTimeout(5000);
});