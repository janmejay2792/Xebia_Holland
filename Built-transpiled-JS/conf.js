"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launch_1 = require("./page/Launcher/launch");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    waitForAngularEnabled: false,
    ignoreUncaughtExceptions: true,
    pageLoadTimeout: 100000,
    allScriptsTimeout: 1000 * 100,
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        marionette: true,
        acceptSslCert: true,
        maxInstances: 2,
        shardTestFiles: true,
    },
    framework: 'jasmine2',
    suites: {
        regression: ['./specs/xebiaAutomation.js']
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        launch_1.launcher();
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            gatherBrowserLogs: false
        }).getJasmine2Reporter());
    }
};
