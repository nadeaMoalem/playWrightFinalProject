// tests/testUi.spec.ts
import { test } from '@playwright/test';
import InfraUi from '../infrastructure/ui-setup';
import HomePage from '../logic/ui/pages/homePage';


test.describe('UI Test 1', async () => {
  
  test.beforeAll(async ({ page }) => {
    const infra = new InfraUi(page)
    await infra.navigateTo("https://terminalx.com/")
  })  

  test("login", async ({ page }) => {
    const homePage = new HomePage(page)
    homePage.login("", "")
    const nameLabel = page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button/span[2]')
    expect(nameLabel).toBe('nadia')
  })
});
