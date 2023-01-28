import { describe, test, expect } from '@playwright/test';

const fs = require('fs');
const csv = require('csv-parser');

describe('Importing data from CSV file', () => {
    let data = [];
    beforeAll(() => {
        return new Promise((resolve, reject) => {
            fs.createReadStream('data.csv')
                .pipe(csv())
                .on('data', (row) => {
                    data.push(row);
                })
                .on('end', resolve);
        });
    });
    
    data.forEach((data) => {
        test(`Fill form with data from CSV file ${data.name}`, async ({ page }) => {
            await page.goto('https://example.com/form');
            await page.fill('input[name="name"]', data.Name);
            await page.fill('input[name="email"]', data.Email);
            await page.fill('input[name="phone"]', data.Phone);
            await page.click('button[type="submit"]');
            await page.waitForSelector('#success');
            const success = await page.$eval('#success', e => e.textContent);
            expect(success).toBe('Form submitted successfully');
        });
    });
});