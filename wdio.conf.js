export const config = {
    runner: 'local',
    
    // 1. Point to your feature files
    specs: [
        './test/feature/**/*.feature'
    ],
    
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      browserName: 'MicrosoftEdge',
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // 2. ONLY use Cucumber framework
    framework: 'cucumber',
    reporters: [
        'spec', 
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true // Essential for Cucumber
        }]
    ],

    // 3. Proper Cucumber Options
    cucumberOpts: {
        // Correct path to your makemytrip.js file
        require: ['./test/specs/step-definitions/**/*.js'],
        timeout: 60000,
        ignoreUndefinedDefinitions: false, // Set to false to see errors clearly
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
            await browser.takeScreenshot(); // Automatically attaches to Allure report
        }
    },
}