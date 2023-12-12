import { Page } from "@playwright/test";

export class CatalogPage {
  page: any;
  private elemLogout: string = "text=Log Out";
  private elemSearchButton: string = ".search-button_1ENs";
  private elemSearchInput: string = ".input_sILM";
  constructor(page: any) {
    this.page = page;
  }

  async searchItem() {
    await this.page.click(this.elemSearchButton);
    await this.page.fill(this.elemSearchInput, "jeans");
  }

  async logout() {
    await this.page.click(this.elemLogout);
  }
}