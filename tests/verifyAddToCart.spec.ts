import { test } from '../fixtures/test-base-fixture';
import { PageObjects } from '../pages/managPO';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Adding adding and removing product to cart', async ({
  page,
  addToCartData,
  removeFromCartData,
}): Promise<void> => {
  const homePage = new PageObjects.HomePage(page);
  const common = new PageObjects.Common(page);
  const cart = new PageObjects.CartPage(page);

  await test.step('Navigating to Desktops page and adding products to cart', async (): Promise<void> => {
    // Given I landed on the homepage
    await homePage.gotoHomePage();
    // When I hover over Computers and click on Desktops
    await homePage.hoverOnBookmarkAndClickOnItem(addToCartData.bookmark, addToCartData.item);
    // And I am on the Desktops page
    await common.verifyPageTitle(addToCartData.pageTitle);
    common.verifyPageURL(addToCartData.url);
    // And I add 2 of first product to cart
    await common.addNthProductToCart(addToCartData.nthProduct, addToCartData.qyt);
    // Then cart should have 2 products displaying
    await common.verifyItemAddedToCart(addToCartData.qyt);
  });

  await test.step('Navigating to Cart page and remove the products from cart', async (): Promise<void> => {
    // Given I navigate to Cart page
    await cart.gotoCartPage();
    // When I check product on cart
    await cart.checkItemRemoveFromCart();
    // And I click on the Update shopping cart button
    await cart.clickOnButton(removeFromCartData.updateButton);
    // Then I verify that shopping cart is empty
    await cart.verifyTextIsVisible(removeFromCartData.emptyCartText);
  });
});
