import { Locator, Page } from "@playwright/test";
import BasePage from "../pages/basePage";

export class WishlistPage extends BasePage {
    
    private label : Locator
    private color : Locator
    private price : Locator
    private removeBtn : Locator
    private emptyList : Locator

    constructor(page: Page) {
        super(page)
        this.label = page.locator("//div[@class='right_1o65']/a[@class='tx-link-a title_3ZxJ tx-link_29YD underline-hover_3GkV']")
        this.color = page.locator("//div[@class='wrap_3QMJ rtl_2lAP']/span")
        this.price = page.locator("//div[@class='row_2tcG bold_2wBM final-price_8CiX']")
        this.removeBtn = page.locator("//div[@class='btn-ltr_35WF btn-quick_3Pv7 btn-remove_274T']/button[@class='tx-link-a tx-link_29YD' and text()='REMOVE']")
        this.emptyList = page.locator("//div[@class='warning_1vFK toast_hN0l rtl_1l4_ showing_1n_C no-items_3PJg']/span")
    }

    async getLabel(){
        return await this.label.textContent()
    }
    async getColor(){
        return await this.color.textContent()
    }
    async getPrice(){
        return await this.price.textContent()
    }
    async removeItem(){
        await this.removeBtn.click()
    }
    async getEmptyListText(){
        return await this.emptyList.textContent()
    }

}