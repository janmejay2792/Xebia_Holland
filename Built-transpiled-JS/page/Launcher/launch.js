"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
function launcher() {
    // browser.get("http://www.hollandamerica.com");
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.manage().timeouts().implicitlyWait(2000);
    protractor_1.browser.waitForAngularEnabled(false);
}
exports.launcher = launcher;
