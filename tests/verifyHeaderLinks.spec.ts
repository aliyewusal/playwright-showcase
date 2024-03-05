import { test } from '../fixtures/test-base-fixture';
import { PageObjects } from '../pages/managPO';

test.use({ storageState: 'playwright/.auth/user.json' });
test('@web Header links on Home Page', async ({ page, links }) => {
  const homePage = new PageObjects.HomePage(page);

  // Given I landed on the homepage
  await homePage.gotoHomePage();

  // Then all the header links are visible
  await homePage.verifyHeaderLinks(links);
});
