const {test} = require('@playwright/test');

test('test', async ({ browser }) => {
    // const context = await browser.newContext({
    //     storageState: "./auth.json"
    // })
    const page = await context.newPage();
    await page.goto("https://www.razer.com/sg-en");
    await page.waitForTimeout(5000);
});