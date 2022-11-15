import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use:{
    headless: true,
    storageState: "./auth.json",
    screenshot: "only-on-failure",
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },
  testMatch: ["**.spec.js"],
  retries: 0,
  reporter: [["html", { outputFile: "testreports.html"}]]
}

export default config;