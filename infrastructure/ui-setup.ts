import { Browser, BrowserContext, chromium, Page } from 'playwright'

let browser: Browser;
let context: BrowserContext;
let page: Page;

export const setupUi = async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
}

export const teardownUi = async () => {
    await page.close(); // Close the page before closing the context
    await context.close();
    await browser.close();
}

export const getBrowser = (): Browser => browser;
export const getContext = (): BrowserContext => context;
export const getPage = (): Page => page;