import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        channel: "chrome",
        trace: 'on-first-retry',
        screenshot: "only-on-failure",
        //Collect trace when retrying the failed test.
        
        /*
        on-first-retry : Record a trace only when retrying a test for the first time
        off : Do not record a trace
        on : Record a trace for each test (Will be perfomance heavy, not recommend)
        retain-on-failure : Record a trace for each test, but remove it from successful test runs
        */
    },
    testMatch: ["**.spec.js"],
    retries: 1, //Set number of retries if test case fail
    reporter: [["html", {outputFile: "test-results.html"}],["json", { outputFile: "test-result.json"}]]
}
export default config; 