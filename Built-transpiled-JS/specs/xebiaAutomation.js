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
const protractor_1 = require("protractor");
const homePage_1 = require("../page/HomePage/homePage");
let homePageLand = new homePage_1.HomePageLand();
describe("To CHeack the Landing Page", function () {
    it("Landing Page", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get("http://www.hollandamerica.com");
            let title = yield homePageLand.Landinghollandamerica();
            yield expect(title).toBe('Holland America Line home page');
        });
    });
    it("Landing Page", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get("http://www.seabourn.com");
            let title = yield homePageLand.LandingSeabournHomePage();
            yield expect(title).toBe('Seabourn Home Page');
        });
    });
});
