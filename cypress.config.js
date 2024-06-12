const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    
    },
    baseUrl: 'https://front.serverest.dev',
    watchForFileChanges: false,
    chromeWebSecurity: false,
  },
});
