import { Page, expect, test } from 'playwright/test'

import { getContext, getPage, setupUi, teardownUi } from '../infrastructure/ui-setup'
import { getNewContext } from '../infrastructure/api-setup'
import utils from '../logic/utils'
import apicalls from '../logic/api/apiCalls'
import { CartComponent } from '../logic/ui/componenets/cartComponent'
import HomePage from '../logic/ui/pages/homePage'
import { WishlistPage } from '../logic/ui/pages/wishListPage'

test.describe("delete from wishlist test suite", async() => {
    let page : Page
    
    test.beforeEach(async () => {
        await setupUi()
        await apicalls.loginCall(getContext())
        page = getPage()
        await page.goto('https://www.terminalx.com/')
        await page.reload()
    })

    test.afterEach(async () => {
        await teardownUi()
    })
    
    test.only("delete from wishlist test using api", async () => {
        //arrange
        await apicalls.addToWishList(getNewContext(), "W147290001", "93", "4")
        //act

        const response = await apicalls.getGlobalInfo(getNewContext())
        const jsonData  = await response.json()   

        const data = await utils.getWishlisData(jsonData)
        expect.soft(data?.id).toBe(1605886)
        expect.soft(data?.sku).toBe("W147290001")
        
        await apicalls.removeFromWishList(getNewContext(), data?.id!)
        const responseAfterDelete = await apicalls.getGlobalInfo(getNewContext())
        const jsonDataAfterDelete  = await responseAfterDelete.json()  
        await page.pause()
        expect(await jsonDataAfterDelete.data.anyWishlist.items_count).toBe(0)

    })
    test("delete from wishlist test using ui", async () => {
        //arrange
        await apicalls.addToWishList(getNewContext(), "W147290001", "93", "4")
        await page.reload()
        const homePage = new HomePage(page)
        await homePage.wishListCart()
        //act
        const wishlist = new WishlistPage(page)
        await wishlist.removeItem()
        //assert
        expect(await wishlist.getEmptyListText()).toContain('לא הוספת עדיין פריטים לרשימה')
    })

})
