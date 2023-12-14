import { Page, expect, test } from 'playwright/test'

import { getContext, getPage, setupUi, teardownUi } from '../infrastructure/ui-setup'
import { getNewContext } from '../infrastructure/api-setup'
import utils from '../logic/utils'
import apicalls from '../logic/api/apiCalls'
import { CartComponent } from '../logic/ui/componenets/cartComponent'
import HomePage from '../logic/ui/pages/homePage'
import { CurrentUserInfoResponse } from '../logic/api/responses/currentUserInfoResponse'

test.describe("delete from cart test suite", async() => {
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
    
    test("delete from cart test using api", async () => {
        //arrange
        await apicalls.addToCart(getNewContext(), "Z45089001303")
        const response = await apicalls.getUserInfo(getNewContext())
        const jsonData  = await response.json()
        const id = await utils.fetchId(jsonData)
        expect.soft(id).toBeTruthy()
        //act
        await apicalls.deleteFromCart(getNewContext(), id!)
        //assert
        const userinfo = await apicalls.getUserInfo(getNewContext())
        const data : CurrentUserInfoResponse = await userinfo.json()

        expect(data.data.currentUserInfo.cart_object.items).toHaveLength(0)
        
    })
    test("delete from cart test using ui", async () => {
        //arrange
        await apicalls.addToCart(getNewContext(), "Z45089001303")
        const response = await apicalls.getUserInfo(getNewContext())
        const jsonData  = await response.json()
        const id = await utils.fetchId(jsonData)
        expect.soft(id).toBeTruthy()
        //act
        page.reload()
        const homePage = new HomePage(page)
        await homePage.cartPickedItems()

        const cartComponent = new CartComponent(page)
        await cartComponent.removeItem()

        await homePage.cartPickedItems()
        //assert
        expect(await cartComponent.getEmptyText()).toBe("סל הקניות שלך ריק.")
    })

})
