// import {_android as android,} from 'playwright';
// import { test } from '@playwright/test'

// test("AndroidChromeTest", async () => {
//     // Connect to the device.
//     const [device] = await android.devices();
//     console.log(`Model: ${device.model()}`);
//     console.log(`Serial: ${device.serial()}`);
//     // Take screenshot of the whole device.
//     await device.screenshot({ path: 'device.png' });
//     // Launch Chrome browser.
//     await device.shell('am force-stop com.android.chrome');
//     const context = await device.launchBrowser();

//     // Use BrowserContext as usual.
//     const page = await context.newPage();
//     await page.goto('https://webkit.org/');
//     console.log(await page.evaluate(() => window.location.href));
//     await page.screenshot({ path: 'page.png' });

//     await context.close();
//     // Close the device.
//     await device.close();
//   })();