import { Locator, Page } from '@playwright/test';

export default class CartPage {
  selectors: { [key: string]: Locator };
  page: Page;
  cartPage: string;

  constructor(page: Page) {
    this.page = page;
    this.cartPage = '/cart';
    this.selectors = {
      removeFromCart: page.locator('input[name="removefromcart"]'),
      button: (text: string) => page.getByRole('button', { name: text }),
      textToConfirm: (text: string) => page.getByText(text),
    };
  }

  async verifyTextIsVisible(text: string) {
    await this.selectors.textToConfirm(text).isVisible();
  }

  async clickOnButton(option: 'Update shopping cart' | 'Continue shopping') {
    await this.selectors.button(option).click();
  }

  async checkItemRemoveFromCart() {
    await this.selectors.removeFromCart.check();
  }

  async gotoCartPage() {
    await this.page.goto(this.cartPage);
  }
}
