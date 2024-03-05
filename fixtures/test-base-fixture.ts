import { test as base } from '@playwright/test';

export type TestOptions = {
  addToCartData: {
    pageTitle: string;
    bookmark: string;
    item: string;
    url: string;
    nthProduct: number;
    qyt: string;
  };
  removeFromCartData: {
    updateButton: string;
    emptyCartText: string;
  };
  links: string[];
};

export const test = base.extend<TestOptions>({
  addToCartData: {
    pageTitle: 'Demo Web Shop. Desktops',
    bookmark: 'Computers',
    item: 'Desktops',
    url: 'https://demowebshop.tricentis.com/desktops',
    nthProduct: 1,
    qyt: '2',
  },

  removeFromCartData: {
    updateButton: 'Update shopping cart',
    emptyCartText: 'Your Shopping Cart is empty!',
  },

  links: ['testemail+playwright@mail.com', 'Log out', 'Shopping cart (0)', 'Wishlist (0)'],
});
