import { test, expect } from "@playwright/test";
import { LoginPage } from "../loginPage";

test.describe("tests for password field", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.terminalx.com", { waitUntil: "load", timeout: 90000 });
  });

  test("Verify when password field empty", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await page.click("text=כניסה");
    await loginPage.verifyTextError();
  });

  test("Verify when password field missing lettes", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await loginPage.enterPassword("458245");
    await loginPage.enterPasswordEmail("fdgjgg@hotmail.com");
    await page.click("text=כניסה");
    await loginPage.verifyPasswordErrorText();
  });

  test("valid field", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await loginPage.fillEmailField("Beshara09@gmail.com");
    await loginPage.fillSecondFiled("Beshara$123");
    await loginPage.clickFormButton();
    await loginPage.verifyTextError();
    const isElementVisible = await page.isVisible("text=התחברות");
    expect(isElementVisible).toBe(true);
  });
});
