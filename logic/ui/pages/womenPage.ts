import { Locator, Page } from "playwright";
import { BasePage } from "./basePage";

export class WomenPage extends BasePage{
    private _shoesLocator : Locator 
    
    constructor(page : Page) {
        super(page)
        this._shoesLocator = page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[9]/div/div/a[1]')
    }
    
    
}



