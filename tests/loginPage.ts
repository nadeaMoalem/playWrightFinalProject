import { expect } from "@playwright/test";

export class LoginPage {
  page: any;
  private elemErrorText: string = "text=שדה חובה.";
  private elemEmailInput: string = "text=התחברות";
  private elemEmailTextbox: string = '//*[@id="top-portal-root"]/div[3]/div[1]/form/div[1]/div[1]/input';
  private elemSecondEmailTextbox: string = '//*[@id="top-portal-root"]/div[3]/div[1]/form/div[2]/div[1]/input';
  private elemFormButton: string = '//*[@id="top-portal-root"]/div[3]/div[1]/form/button[3]';
  private elemMissingFieldError: string = '//*[@id="top-portal-root"]/div[3]/div[1]/form/div[1]/div[2]';
  private elemPassword: string = 'input[name="password"]';
  private elemPasswordDiv: string = '//*[@id="app-root"]/div[2]/main/div[1]/div';
  private elemPasswordEmail: string = '//*[@id="top-portal-root"]/div[3]/div[1]/form/div[1]/div/input';

  constructor(page: any) {
    this.page = page;
  }

  async login(page: any, email: string, password: string): Promise<void>  {
    await this.clickEmailTextbox();
    await this.enterPasswordEmail(email);
    await this.enterPassword(password);
    await page.click("text=כניסה");
  }

  async selectRandomSize(page: any): Promise<void> {
    const sizes = ["S", "M", "L", "XL"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const selector = `[title="${randomSize} : מידה"]`;
    await page.click(selector);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.elemPassword, password);
  }

  async enterPasswordEmail(email: string) {
    await this.page.fill(this.elemPasswordEmail, email);
  }

  async verifyPasswordErrorText() {
    const errorText = await this.page.locator(this.elemPasswordDiv).textContent();
    expect(errorText).toBe("משתמש או סיסמה שגויים.");
  }

  async clickEmailTextbox() {
    await this.page.click(this.elemEmailInput);
  }

  async verifyTextError() {
    await this.page.waitForSelector(this.elemErrorText, { state: "visible" });
    const isElementVisible = await this.page.isVisible(this.elemErrorText);
    expect(isElementVisible).toBe(true);
  }

  async verfiyEmailInput() {
    const isElementVisible = await this.page.isVisible(this.elemEmailInput);
    expect(isElementVisible).toBe(true);
  }

  async fillEmailField(email: string) {
    await this.page.fill(this.elemEmailTextbox, email);
  }

  async fillSecondFiled(email: string) {
    await this.page.fill(this.elemSecondEmailTextbox, email);
  }

  async clickFormButton() {
    await this.page.locator(this.elemFormButton).click();
  }

  async verifyMissingFieldError() {
    const errorText = await this.page.locator(this.elemMissingFieldError).textContent();
    expect(errorText).toBe("כתובת האימייל שהזנת אינה תקינה (לדוגמא: info@terminalx.com).");
  }
}