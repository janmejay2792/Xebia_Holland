import { WebControl } from "../../UtilityFunction/WebControl";
import { locatorsType, Wait_For } from "../../UtilityFunction/Constants/SeleniumConstants";




export class HomePageLand {
    homePage: string;
    loginBt: string;
    titleLogo: string;

    constructor() {
        this.homePage = "//*[@id='GlobalHeaderLoginWidgetDropDownButton']";
        this.loginBt = "//*[@class='btn-login']";
        this.titleLogo = "//*[@class='brand-logo']";
    }


    async Landinghollandamerica() {
        await WebControl.elementClick(this.homePage, locatorsType.XPATH);
        await WebControl.elementClick(this.loginBt, locatorsType.XPATH);
        await WebControl.elementClick(this.titleLogo, locatorsType.XPATH);
        await WebControl.fluentWaitForElement(this.titleLogo, locatorsType.XPATH, Wait_For.visibility);
        let title = await WebControl.getAttribute(this.titleLogo, locatorsType.XPATH, "alt")
        console.log("title",title)
        return title;
    }


    async LandingSeabournHomePage() {
        await WebControl.elementClick(this.homePage, locatorsType.XPATH);
        await WebControl.elementClick(this.loginBt, locatorsType.XPATH);
        await WebControl.elementClick(this.titleLogo, locatorsType.XPATH);
        await WebControl.fluentWaitForElement(this.titleLogo, locatorsType.XPATH, Wait_For.visibility);
        let title = await WebControl.getAttribute(this.titleLogo, locatorsType.XPATH, "alt")
        console.log('title',title)
        return title;
    }
}


