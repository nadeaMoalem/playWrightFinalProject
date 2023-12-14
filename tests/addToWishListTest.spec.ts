import { Page, expect, test } from 'playwright/test'

import { getContext, getPage, setupUi, teardownUi } from '../infrastructure/ui-setup'
import { getNewContext } from '../infrastructure/api-setup'
import utils from '../logic/utils'
import apicalls from '../logic/api/apiCalls'
import { CartComponent } from '../logic/ui/componenets/cartComponent'
import HomePage from '../logic/ui/pages/homePage'
import { WishlistPage } from '../logic/ui/pages/wishListPage'

test.describe.skip("add to wishlist test suite", async() => {
    let page : Page
    
    test.beforeEach(async () => {
        await setupUi()
        await apicalls.loginCall(getContext())
        page = getPage()
        await page.goto('https://www.terminalx.com/')
        await page.reload()
    })

    test.afterEach(async () => {
        await apicalls.removeFromWishList(getNewContext(), 1605886)
        await teardownUi()
    })
    
    test("add to wishlist test using api", async () => {
        //arrange
        await apicalls.addToWishList(getNewContext(), "W147290001", "93", "4")
        //act

        const response = await apicalls.getGlobalInfo(getNewContext())
        const jsonData  = await response.json()
        
        //assert
        const data = await utils.getWishlisData(jsonData)
        expect(data?.id).toBe(1605886)
        expect(data?.sku).toBe("W147290001")
    })
    test("add to wishlist test using ui", async () => {
        //arrange
        await apicalls.addToWishList(getNewContext(), "W147290001", "93", "4")
        //act
        await page.reload()
        const homePage = new HomePage(page)
        await homePage.wishListCart()
        //assert
        const wishlist = new WishlistPage(page)
        expect(await wishlist.getLabel()).toBe("מכנסי ג'ינס בגזרה ישרה") 
        expect(await wishlist.getColor()).toBe("צבע: שחור") 
        expect(await wishlist.getPrice()).toBe("299.90 ₪") 
    })

})
