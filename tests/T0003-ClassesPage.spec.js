const {test, expect} = require('@playwright/test'); //add module

test('Classes page has CLASSES as title',async({page}) => {
    //Visit url
    //await before a function makes the function wait for a promise
    //Therefore, the page will have to load completely before going to the next step
    await page.goto('https://sbboxs.github.io/ID_Assignment-2/classes.html');
    await expect(page).toHaveTitle(/CLASSES/);
})