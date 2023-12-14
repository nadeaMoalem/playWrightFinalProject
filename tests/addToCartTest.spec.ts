import { Page, expect, test } from 'playwright/test'

import { getContext, getPage, setupUi, teardownUi } from '../infrastructure/ui-setup'
import { getNewContext } from '../infrastructure/api-setup'
import utils from '../logic/utils'
import apicalls from '../logic/api/apiCalls'
import { CartComponent } from '../logic/ui/componenets/cartComponent'
import HomePage from '../logic/ui/pages/homePage'


test.describe("add to cart test suite", async() => {
    let page : Page
    
    test.beforeEach(async () => {
        await setupUi()
        await apicalls.loginCall(getContext())
        page = getPage()
        await page.goto('https://www.terminalx.com/')
        await page.reload()
    })

    test.afterEach(async () => {
        const data = await apicalls.getUserInfo(getNewContext())
        const json = await data.json()
        const id = await utils.fetchId(json)
        await apicalls.deleteFromCart(getNewContext(), id!)
        await teardownUi()
    })
    
    test("add to cart test using api", async () => {
        //arrange
        await apicalls.addToCart(getNewContext(), "Z45089001303")
        //act

        const response = await apicalls.getUserInfo(getNewContext())
        const jsonData  = await response.json()
     
        //assert
        const labelText = await utils.getLabelText(jsonData)
        const finalPrice = await utils.getFinalPrice(jsonData)
        expect(labelText).toContain("Nike Sportswear Essential")
        expect(finalPrice).toBe(89.95)
    })
    test("add to cart test using ui", async () => {
        //arrange
        await apicalls.addToCart(getNewContext(), "Z45089001303")

        const response = await apicalls.getUserInfo(getNewContext())
        const jsonData  = await response.json()

        await page.reload()
        const homePage = new HomePage(page)
        await homePage.cartPickedItems()
        //act
        const cartComponent = new CartComponent(page)
        expect(await cartComponent.getLabel()).toContain("Nike Sportswear Essential")
        expect(await cartComponent.getColor()).toBe("ורוד בייבי")
        expect(await cartComponent.getSize()).toBe("M")
        expect(await cartComponent.getPrice()).toBe("89.95 ₪")
    })

})
