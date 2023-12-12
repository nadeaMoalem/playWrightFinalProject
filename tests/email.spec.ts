import { test } from "@playwright/test";
import { LoginPage } from "../loginPage";

test.describe("tests for email field", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.terminalx.com");
  });

  test("Verify behavior when email field empty", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await page.click("text=כניסה");
    await test.step("Verify wrong text", async () => {
      await loginPage.verifyTextError();
    });
  });

  test("Verify behavior when missing email", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await loginPage.fillEmailField("Beshara09");
    await loginPage.clickFormButton();
    await loginPage.verifyMissingFieldError();
  });

  test("Verify behavior when filed is valid", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickEmailTextbox();
    await loginPage.fillEmailField("Beshara09@gmail.com");
    await loginPage.fillSecondFiled("Beshara$123");
    await page.fill('//*[@id="top-portal-root"]/div[3]/div[1]/form/div[2]/div[1]/input', "Beshara$123");
    await loginPage.clickFormButton();
    await loginPage.verfiyEmailInput();
  });
});
