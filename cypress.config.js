const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ptfd7c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
