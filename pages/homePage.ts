import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {
  selectors: { [key: string]: Locator | any };
  page: Page;
  homePageURL: string;

  constructor(page: Page) {
    this.page = page;
    this.homePageURL = '/';
    this.selectors = {
      allHeaderLinks: page.locator('ul > li > a:first-child'),
      link: (text: any) => page.getByRole('link', { name: `${text}` }),
      bookmark: (name: any) => page.getByRole('link', { name: `${name}` }).first(),
    };
  }

  async verifyHeaderLinks(names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      await expect(this.selectors.allHeaderLinks.nth(i)).toHaveText(name);
      console.log(`Header link "${name}" is visible.`);
    }
  }

  async hoverOnBookmarkAndClickOnItem(bookmark: any, item: any) {
    await this.selectors.bookmark(bookmark).hover();
    await this.selectors.link(item).click();
  }

  async gotoHomePage() {
    await this.page.goto(this.homePageURL);
  }
}
