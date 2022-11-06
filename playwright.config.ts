import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        channel: "chrome",
        screenshot: "only-on-failure"
    },
    testMatch: ["**.spec.js"],
    retries: 0,
    reporter: [["html", {outputFile: "test-results.html"}],["json", { outputFile: "test-result.json"}]]
}
export default config; 