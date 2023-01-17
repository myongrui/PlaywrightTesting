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
  // //testMatch: ["**.spec.js"],
  // retries: 0,
  // reporter: [['html',{outputFolder: './playwright-report/default'}],["junit", { outputFile: "test-results/e2e-junit-results.xml" }]],
  // use: {
  //   headless: false,
  //   storageState: "./auth.json",
  //   navigationTimeout: 60000,
  // },
  
};

export default config;
