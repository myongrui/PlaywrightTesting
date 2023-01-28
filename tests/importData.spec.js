import { test, expect } from '@playwright/test';
const fs = require('fs');
const csv = require('csv-parser');

let data = [];
test(`Importing data from CSV file`, async () => {
    await new Promise((resolve, reject) => {
        fs.createReadStream('data.csv')
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', resolve);
    });

    for(let i=0; i< data.length; i++){
        test(`Fill form with data from CSV file ${data[i].name}`, async ({ page }) => {
            await page.goto('https://example.com/form');
            await page.fill('input[name="name"]', data[i].Name);
            await page.fill('input[name="email"]', data[i].Email);
            await page.fill('input[name="phone"]', data[i].Phone);
            await page.click('button[type="submit"]');
            await page.waitForSelector('#success');
            const success = await page.$eval('#success', e => e.textContent);
            expect(success).toBe('Form submitted successfully');
        });
    }
});