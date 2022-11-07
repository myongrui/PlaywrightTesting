const {test, expect} = require('@playwright/test');//add module
//async before a function makes the function return a promise 
/*
//Setting trace programmatically
let context;
let page;
test.beforeAll(async ({browser}) => {
    
    context = await browser.newContext();
    await context.tracing.start(
    {
        snapshots: true, 
        screenshots: true
    });
    page = await context.newPage();
})
//Doesnt matter where the afterAll command locate at, it will always run after all test 
test.afterAll(async () => {
    await context.tracing.stop({path: 'Fail_Test.zip'})
})
*/

test('If login successful (Success test)', async({page}) => {
    
    //Visit url
    //await before a function makes the function wait for a promise
    //Therefore, the page will have to load completely before going to the next step
    await page.goto('https://www.saucedemo.com/');
    // using any object property
    //using ID
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    //await page.locator('[id="login-button"]').click();
    //using Text
    await page.locator('input:has-text("LOGIN")').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.close();
});


test('Login not successful (Fail test)', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('wrongUserName');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.close();
});

/*
//Only this test will be execute in this file
test.only('Login not successful (Fail test)', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
});
*/
