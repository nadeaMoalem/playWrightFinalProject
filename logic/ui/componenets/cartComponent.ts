import { Locator, Page } from "@playwright/test";
import BasePage from "../pages/basePage";

export class CartComponent extends BasePage {
    
    private label : Locator
    private color : Locator
    private size : Locator
    private price : Locator
    private emptyCart : Locator
    private removeBtn : Locator
    private confirmBtn : Locator

    constructor(page: Page) {
        super(page)
        this.label = page.locator("//a[contains(@class, 'tx-link-a') and contains(@class, 'name_OAY1')]").first()
        this.color = page.locator("//span[@class='value_3OO8' and @data-test-id='qa-item-color-value']").first()
        this.size = page.locator("//span[@class='value_3OO8' and @data-test-id='qa-item-size-value']").first()
        this.price = page.locator("//div[@class='price_cQfM']").first()
        this.emptyCart = page.locator('//span[text()="סל הקניות שלך ריק."]')
        this.removeBtn = page.locator("//button[@class='tx-link-a icon_u36n remove_wqPe action-icon_3nMK tx-link_29YD']").first()
        this.confirmBtn = page.locator("//button[@class='tx-link-a button_1zfx tx-link_29YD btn_1UzJ btn-black-gray_2ddt' and text()='אישור']")
    }

    async getLabel(){
        return await this.label.textContent()
    }
    async getColor(){
        return await this.color.textContent()
    }
    async getSize(){
        return await this.size.textContent()
    }
    async getPrice(){
        return await this.price.textContent()
    }
    async getEmptyText(){
        return await this.emptyCart.textContent()
    }
    async removeItem(){
        await this.removeBtn.click()
        await this.confirmBtn.click()
        //await this.page.waitForSelector("//div[@class='loading-bar_Y1Jw']/img", { state: 'hidden', timeout: 5000 })
        await this.page.waitForTimeout(2000)
    }
}