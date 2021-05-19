import { browser } from "protractor"
import { HomePageLand } from "../page/HomePage/homePage";

let homePageLand = new HomePageLand();

describe("To CHeack the Landing Page", function(){

    it("Landing Page",async function(){
        await browser.get("http://www.hollandamerica.com");
        let title= await homePageLand.Landinghollandamerica()
        await expect(title).toBe('Holland America Line home page');
       
    })
    it("Landing Page",async function(){
        await browser.get("http://www.seabourn.com");
        let title=await homePageLand.LandingSeabournHomePage()
        await expect(title).toBe('Seabourn Home Page');
       
    })
})



