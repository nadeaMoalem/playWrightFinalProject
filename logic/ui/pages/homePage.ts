// src/pages/HomePage.ts
import { Locator , Page } from 'playwright';
import BasePage from './basePage';

export default class HomePage extends BasePage {
  // Methods and locators specific to the home page...
   //locators
   private homeButton: Locator
   private emailInput : Locator
   private passwordInput : Locator
   private afterLoggingIn: Locator
   private logoutButton: Locator
   private womenButton:Locator
   private myWishListButton: Locator
   private quickViewButton: Locator
   private myWishlistCart: Locator
   private cartButton: Locator
   private hiButtonBeforeLogOut : Locator
  
   
 
   constructor(page:Page) {
       super(page);
       this.homeButton= page.locator("//a[@class='tx-link-a profile-button_OKk5 tx-link_29YD underline-hover_3GkV']")
       this.emailInput= page.locator("//input[@name='email' and @class='input_3Q5c rtl_2vgE ltr_2G38 input-left_p5DQ']")
       this.passwordInput=page.locator("//input[@name='password']")
       this.afterLoggingIn= page.locator("//button[@data-test-id='qa-login-submit']")
       this.hiButtonBeforeLogOut = page.locator("//span[@class='greet_Yfio profile-button-new-menu_2voE']")
       this.logoutButton= page.locator("//button[@class='tx-link-a list-link_323s tx-link_29YD']")
       this.womenButton= page.locator("//a[@class='tx-link-a universeSelectorLink_1NOl isActive_1sqk tx-link_29YD']")
       this.myWishListButton=page.locator("//div[@class='btn-quick_3Pv7 btn-my_list_2EOz' and @wz_dt_ref='true']")
       this.quickViewButton=page.locator("//div[@class='btn-quick_3Pv7 btn-quick-view_2SXw' and @wz_dt_ref='true']")
       this.myWishlistCart=page.locator("//a[@class='tx-link-a link_2L32 link-wishlist_1lmB tx-link_29YD']")
       this.cartButton=page.locator("//a[@class='tx-link-a link_2L32 link-minicart_2nwP tx-link_29YD']")
   }
   async goToHomePage(){
      await this.homeButton.click()
      await this.page.waitForLoadState('load')
   }
   async login(username:string, password:string):Promise<void>{
    await this.homeButton.click()
    await this.emailInput.fill(username)
    await this.passwordInput.fill(password)
    await this.afterLoggingIn.click()
   }
   async forLogingOut(){
    await this.hiButtonBeforeLogOut.click()
    await this.logoutButton.click()
   }
   async womenSection(){
    await this.womenButton.click()
   }
   async wishListaddingItem(){
    await this.myWishListButton.click()
   }
   async wishListCart(){
    await this.myWishlistCart.click()
    await this.page.waitForLoadState('load')
   }
   async fastViewngItem(){
    await this.quickViewButton.click()
    await this.page.waitForLoadState('load')
   }
   async cartPickedItems(){
    await this.cartButton.click()
   }

  }
