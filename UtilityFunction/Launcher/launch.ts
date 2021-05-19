import { browser } from "protractor";


export  function launcher(){
     // browser.get("http://www.hollandamerica.com");
     browser.manage().window().maximize();
     browser.manage().timeouts().implicitlyWait(2000);
     browser.waitForAngularEnabled(false);
}