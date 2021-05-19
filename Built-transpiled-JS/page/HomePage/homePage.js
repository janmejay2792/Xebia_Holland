"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebControl_1 = require("../../UtilityFunction/WebControl");
const SeleniumConstants_1 = require("../../UtilityFunction/Constants/SeleniumConstants");
class HomePageLand {
    constructor() {
        this.homePage = "//*[@id='GlobalHeaderLoginWidgetDropDownButton']";
        this.loginBt = "//*[@class='btn-login']";
        this.titleLogo = "//*[@class='brand-logo']";
    }
    Landinghollandamerica() {
        return __awaiter(this, void 0, void 0, function* () {
            yield WebControl_1.WebControl.elementClick(this.homePage, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.elementClick(this.loginBt, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.elementClick(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.fluentWaitForElement(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH, SeleniumConstants_1.Wait_For.visibility);
            let title = yield WebControl_1.WebControl.getAttribute(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH, "alt");
            console.log(title);
            return title;
        });
    }
    LandingSeabournHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield WebControl_1.WebControl.elementClick(this.homePage, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.elementClick(this.loginBt, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.elementClick(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH);
            yield WebControl_1.WebControl.fluentWaitForElement(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH, SeleniumConstants_1.Wait_For.visibility);
            let title = yield WebControl_1.WebControl.getAttribute(this.titleLogo, SeleniumConstants_1.locatorsType.XPATH, "alt");
            console.log(title);
            return title;
        });
    }
}
exports.HomePageLand = HomePageLand;
