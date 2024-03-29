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
  testMatch: "**.spec.js",
  retries: 0,
  reporter: [["junit", { outputFile: "test-results-windows/e2e-junit-results.xml" }]], //['html',{outputFolder: './playwright-report/default'}]
  use: {
    headless: true,
    // storageState: "./auth.json",
    navigationTimeout: 60000,
  },
  
};

export default config;
