const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
  addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor')
const {
  createEsbuildPlugin
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.feature',
    supportFile: 'support/e2e.js',
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiUrl: 'https://serverest.dev',
      allure: true,
      allureReuseAfterSpec: true
    },
    async setupNodeEvents(on, config) {
      config.env.stepDefinitions = config.env.stepDefinitions ?? 'e2e/**/*.steps.js'

      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      )

      allureWriter(on, config)

      return config
    }
  }
})

