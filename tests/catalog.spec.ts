import { test } from "@playwright/test";
import { LoginPage } from "../loginPage";
import { CatalogPage } from "../catalogPage";

test.describe("TerminalX", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.terminalx.com");
  });

  test("Verify user is able to search cart ", async ({ page }) => {
    const catalogPage = new CatalogPage(page);

    await catalogPage.searchItem();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    const currentURL = page.url();
    const expectedURL = "https://www.terminalx.com/catalogsearch/result/?q=jeans";

    if (currentURL === expectedURL) console.log("URL verification passed!");
    else console.error(`Error: The current URL is ${currentURL}, but the expected URL is ${expectedURL}`);
  });

  test("Verify logout funtionality", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const catalogPage = new CatalogPage(page);

    await loginPage.login(page, "beshara09@gmail.com", "Beshara$123");
    await page.click("text=beshara");
    await page.evaluate(() => {
      window.scrollTo(0, 1000);
    });

    await catalogPage.logout();
  });

  test("Verify add item to cart functionality", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(page, "beshara09@gmail.com", "Beshara$123");

    await page.click('a[href="/men/shirts/polo"].tx-link-a.link_lyUv.category-sub-main_30Tq.tx-link_29YD');
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    await page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[3]/div[2]/ol/li[1]/div[3]/div[1]/div[2]/a').click();

    await test.step("Select random size", async () => {
      await loginPage.selectRandomSize(page);
    });
    await page.click("text=הוספה לסל");
    await page.waitForSelector(".item-count_3Yeu");
    const itemCount = await page.$eval(".item-count_3Yeu", (element) => element.textContent);
    if (itemCount === "1") console.log("Item added to the cart, and there is 1 item in the cart.");
    else console.log("Item not added or incorrect item count in the cart.");
  });

  test.only("Remove item from card ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(page, "beshara09@gmail.com", "Beshara$123");
    await page.pause();
    await page.click('//*[@id="app-root"]/div[2]/header/div/div[3]/div[2]/div[1]/div/a[2]');
    await page.click('//*[@id="top-portal-root"]/div/div/div/div[2]/div/div/div/div/div[2]/div[2]/button');
  });
});
