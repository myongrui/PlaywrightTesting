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
  use: {
    headless: true,
    storageState: "./auth.json",
    screenshot: "only-on-failure",
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },
  testMatch: ["**.spec.js"],
  retries: 0,
  reporter: [["html", { outputFile: "testreports.html" }]],
};

export default config;
