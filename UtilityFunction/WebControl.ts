import { browser, element, by, WebElement, ElementFinder, ElementArrayFinder } from "protractor";



export class WebControl {
    static getByType(locatorType: any) {
        locatorType = locatorType.toLowerCase()
        if (locatorType == "id") {
            return by.id
        }
        else if (locatorType == "name") {
            return by.name
        }
        else if (locatorType == "xpath") {
            return by.xpath
        }
        else if (locatorType == "css") {
            return by.css
        }
        else if (locatorType == "class") {
            return by.className
        }
        else if (locatorType == "buttonText") {
            return by.buttonText
        }
        else if (locatorType == "model") {
            return by.model
        }
        else if (locatorType == "tagName") {
            return by.tagName
        }
        else if (locatorType == "repeater") {
            return by.repeater
        }
        else {
            console.log("failed")
        }
    }

    static getElement(locator: ElementFinder, locatorType: any) {
        try {
            let byType: any = this.getByType(locatorType)
            let element1 = element(byType(locator))
            return element1
        } catch (error) {
            console.log(error.stack)
        }
    }

    static elementClick(locator: any, locatorType: any, javaScript: boolean = true) {
        try {
            
            this.fluentWaitForElement(locator, locatorType,'clickable')
            let element: ElementFinder | any  = this.getElement(locator, locatorType)
            if (javaScript) {
                browser.executeScript("arguments[0].click()", element); 
            }
            element.click();
            // element.click()
        } catch (error) {
            console.log(error.stack)
        }
    }

    static elementSendKey(locator: any, locatorType: any, value: any) {
        try {
            this.fluentWaitForElement(locator, locatorType,'visibility')
            let element: any = this.getElement(locator, locatorType)
            element.sendKeys(value);
        } catch (error) {
        }
    }
    

    static getText(locator: any, locatorType: any){
        try {
            this.fluentWaitForElement(locator, locatorType,'visibility')
            let element: any = this.getElement(locator, locatorType)
            return element.getText();
        } catch (error) {
            console.error(error);
        }
    }
    static getAttribute(locator: any, locatorType: any,atrributeName:String="innertext"){
        try {
            this.fluentWaitForElement(locator, locatorType,'visibility')
            let element: any = this.getElement(locator, locatorType)
            return element.getAttribute(atrributeName);
        } catch (error) {
            console.error(error);
        }
    }

    static fluentWaitForElement(locator: any, locatorType: any,waitCondition:any, timeout : number=1000*10) {
        try {
           
            let element: any = this.getElement(locator, locatorType)
            let EC = browser.ExpectedConditions;
            switch (waitCondition) {
                case "visibility":
                    browser.wait(EC.visibilityOf(element),timeout);
                    break;
                case "invisibility":
                        browser.wait(EC.invisibilityOf(element),timeout);
                        break;
                case "clickable":
                        browser.wait(EC.elementToBeClickable(element),timeout);
                        break;
                default:
                    browser.wait(EC.presenceOf(element),timeout);
                    break;
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    

}

