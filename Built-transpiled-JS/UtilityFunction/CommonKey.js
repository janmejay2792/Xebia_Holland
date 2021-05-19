"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class WebControl {
    static getByType(locatorType) {
        locatorType = locatorType.toLowerCase();
        if (locatorType == "id") {
            return protractor_1.by.id;
        }
        else if (locatorType == "name") {
            return protractor_1.by.name;
        }
        else if (locatorType == "xpath") {
            return protractor_1.by.xpath;
        }
        else if (locatorType == "css") {
            return protractor_1.by.css;
        }
        else if (locatorType == "class") {
            return protractor_1.by.className;
        }
        else if (locatorType == "buttonText") {
            return protractor_1.by.buttonText;
        }
        else if (locatorType == "model") {
            return protractor_1.by.model;
        }
        else if (locatorType == "tagName") {
            return protractor_1.by.tagName;
        }
        else if (locatorType == "repeater") {
            return protractor_1.by.repeater;
        }
        else {
            console.log("failed");
        }
    }
    static getElement(locator, locatorType) {
        try {
            let byType = this.getByType(locatorType);
            let element1 = protractor_1.element(byType(locator));
            return element1;
        }
        catch (error) {
            console.log(error.stack);
        }
    }
    static elementClick(locator, locatorType, javaScript = true) {
        try {
            this.fluentWaitForElement(locator, locatorType, 'clickable');
            let element = this.getElement(locator, locatorType);
            if (javaScript) {
                protractor_1.browser.executeScript("arguments[0].click()", element);
            }
            element.click();
            // element.click()
        }
        catch (error) {
            console.log(error.stack);
        }
    }
    static elementSendKey(locator, locatorType, value) {
        try {
            this.fluentWaitForElement(locator, locatorType, 'visibility');
            let element = this.getElement(locator, locatorType);
            element.sendKeys(value);
        }
        catch (error) {
        }
    }
    static getText(locator, locatorType) {
        try {
            this.fluentWaitForElement(locator, locatorType, 'visibility');
            let element = this.getElement(locator, locatorType);
            return element.getText();
        }
        catch (error) {
            console.error(error);
        }
    }
    static getAttribute(locator, locatorType, atrributeName = "innertext") {
        try {
            this.fluentWaitForElement(locator, locatorType, 'visibility');
            let element = this.getElement(locator, locatorType);
            return element.getAttribute(atrributeName);
        }
        catch (error) {
            console.error(error);
        }
    }
    static fluentWaitForElement(locator, locatorType, waitCondition, timeout = 1000 * 10) {
        try {
            let element = this.getElement(locator, locatorType);
            let EC = protractor_1.browser.ExpectedConditions;
            switch (waitCondition) {
                case "visibility":
                    protractor_1.browser.wait(EC.visibilityOf(element), timeout);
                    break;
                case "invisibility":
                    protractor_1.browser.wait(EC.invisibilityOf(element), timeout);
                    break;
                case "clickable":
                    protractor_1.browser.wait(EC.elementToBeClickable(element), timeout);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.WebControl = WebControl;
