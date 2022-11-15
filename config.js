// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  globalSetup: require.resolve('./authentication.js'),
    use: {
      storageState: 'StorageState.json'
    }
  };
  
  module.exports = config;