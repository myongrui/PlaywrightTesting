import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "pixel",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  //testMatch: ["**.spec.js"],
  retries: 0,
  reporter: [['html',{outputFolder: './playwright-report/linux'}]],
  use: {
    headless: false,
    // storageState: "./auth.json",
    navigationTimeout: 60000,
  },
  
};

export default config;
