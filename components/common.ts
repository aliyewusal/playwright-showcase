import { expect, Locator, Page, selectors } from '@playwright/test';

export default class Common {
  page: Page;
  selectors: { [key: string]: Locator | any };
  constructor(page: Page) {
    this.page = page;
    this.selectors = {
      shoppingCartHeader: (number) => page.getByRole('link', { name: `Shopping cart (${number})` }),
      addToCartButton: page.getByRole('button', { name: 'Add to cart' }),
      quantityField: page.getByLabel('Qty:'),
      addToCartButtonOnProduct: page.locator('[value="Add to cart"]'),
    };
  }

  async verifyPageTitle(pageTitle) {
    const title = await this.page.title();
    console.log('Page title is: ' + title);
    expect(title).toEqual(pageTitle);
  }

  verifyPageURL(url: any) {
    expect(this.page.url()).toEqual(url);
  }

  async addNthProductToCart(nth: number, qyt: string) {
    await this.selectors.addToCartButton.nth(nth - 1).click();
    await this.selectors.quantityField.fill(qyt);
    await this.selectors.addToCartButtonOnProduct.first().click();
  }

  async verifyItemAddedToCart(number: string) {
    await expect(this.selectors.shoppingCartHeader(number)).toBeVisible();
  }
}
