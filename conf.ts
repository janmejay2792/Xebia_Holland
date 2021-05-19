import { browser, Config } from 'protractor';
import reporter = require('./jasmine_reporter');
import path = require('path');
import { launcher } from './UtilityFunction/Launcher/launch';
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  waitForAngularEnabled :false,
  ignoreUncaughtExceptions : true,
  pageLoadTimeout :100000,
  allScriptsTimeout :1000*100,
  SELENIUM_PROMISE_MANAGER : false,
  capabilities: {
    browserName: 'chrome',
    marionette:true,
    acceptSslCert : true,
    maxInstances : 2,
    shardTestFiles: true,
    },
  framework: 'jasmine2',

  suites:{
    regression: ['./specs/xebiaAutomation.js']
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {

  launcher();
 
  
  jasmine.getEnv().addReporter(new HtmlReporter({
  baseDirectory: 'reports/screenshots'
  , screenshotsSubfolder: 'images'
  , jsonsSubfolder: 'jsons'
  
  , gatherBrowserLogs: false

    }).getJasmine2Reporter());

 }
}