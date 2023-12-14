import { Page, expect, test } from 'playwright/test'
import { getContext, getPage, setupUi, teardownUi } from '../infrastructure/ui-setup'
import HomePage from '../logic/ui/pages/homePage'
import { setNewContext } from '../infrastructure/api-setup'
import apicalls from '../logic/api/apiCalls'


test.describe.skip("login test suite", async() => {
    
    let page : Page
    
    test.beforeEach(async () => {
        await setupUi()
        await setNewContext(getContext())
        page = getPage()
        await page.goto('https://www.terminalx.com/')
    })

    test.afterEach(async () => {
        await teardownUi()
    })
    
    test("testing login using Api and Ui", async () => {
        //arrange
        const response = await apicalls.loginCall(getContext())
        //act
        const jsonData  = await response.json()
        const stringData = JSON.stringify(await jsonData.data.userLogin)
        expect.soft(stringData).toBe('1121807')
        //assert
        await page.reload()
        const homePage = new HomePage(page)
        const greetingTExt = await homePage.getGreetingText()
        expect(greetingTExt).toBe(" הי, ")
    })
    test("testing login using api", async () => {
        //act
        const response= await apicalls.loginCall(getContext())
        //assert
        const jsonData  = await response.json()
        const stringData = JSON.stringify(await jsonData.data.userLogin)
        expect.soft(stringData).toBe('1121807')
    })
    test("testing login using ui", async () => {
        //act
        const homePage = new HomePage(page)
        await homePage.login()
        //assert
        const greetingText = await homePage.getGreetingText() 
        expect(greetingText).toBe(" הי, ")
    })
})
