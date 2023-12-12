import { expect, test } from 'playwright/test'
import { addToCart, deleteFromCart, getUserInfro, loginCall } from '../logic/api/apiCalls'
import urls from '../config/urls.json'
import credentials from '../config/credentials.json'
import { getContext, setupUi } from '../infrastructure/ui-setup'
import fetchId from '../logic/utils'
import { CurrentUserInfoResponse } from '../logic/api/responses/currentUserInfoResponse'
test.describe("pure API tests", async() =>{
    test("login test", async () => {
        await setupUi()
        const { response, context } = await loginCall(getContext())

        const page = await context!.newPage()

        await page.goto('https://www.terminalx.com/')
        
        const jsonData  = await response.json()
        const stringData = JSON.stringify(await jsonData.data.userLogin)
        expect.soft(stringData).toBe('1121629')
        // --- ui test. start
        const label = await page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button/span[2]').textContent()
        expect(label).toBe("wael")
        // ---- end
    })

    test("add item to cart test", async () => {
        await setupUi()
        const { response, context } = await loginCall(getContext())

        const page = await context!.newPage()

        await page.goto('https://www.terminalx.com/')
        
        const jsonData  = await response.json()
        const stringData = JSON.stringify(await jsonData.data.userLogin)
        expect.soft(stringData).toBe('1121629')

        // const label = await page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button/span[2]').textContent()
        // expect.soft(label).toBe("wael")    -- not needed 

        const addToCartResponse = await addToCart(getContext(), "W07873002704")
        console.log(await addToCartResponse.response.json())

        // ui bellow 
    })
    test.only("delete item from cart test", async () => {
        await setupUi()
        const res = await loginCall(getContext())

        const page = await res.context!.newPage()

        await page.goto('https://www.terminalx.com/')
        
        const jsonData  = await res.response.json()
        const stringData = JSON.stringify(await jsonData.data.userLogin)
        
        // const label = await page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button/span[2]').textContent()
        // expect.soft(label).toBe("wael")  -- not needed 
        const userInfro = await getUserInfro(res.context!)
        const currentUserInfro : CurrentUserInfoResponse = await userInfro.response.json()
        
        console.log(currentUserInfro);
        const id = await fetchId("W07873002704", currentUserInfro)
        console.log(id)
        const deleteFromCartResponse = await deleteFromCart(getContext(), id!)
        console.log(await deleteFromCartResponse.response.json())

        //ui bellow 
    })

})