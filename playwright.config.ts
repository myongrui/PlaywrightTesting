import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        channel: "chrome",
        screenshot: "only-on-failure"
    },
    testMatch: ["**.spec.js"],
    retries: 0,
    reporter: [["dot"],["json", { outputFile: "test-result.json"}]]
}
export default config; 