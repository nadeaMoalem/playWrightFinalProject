// src/pages/BasePage.ts
import { Page } from 'playwright';

export default class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async reload(){
    await this.page.reload()
  }
  // Common methods or properties...
}
