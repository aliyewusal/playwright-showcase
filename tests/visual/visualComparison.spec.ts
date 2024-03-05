import { test } from '../../fixtures/test-base-fixture';
import { PageObjects } from '../../pages/managPO';
import { expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/user.json' });

test('@visual Check Home Page is correctly displayed', async ({
  page}) => {
  const homePage = new PageObjects.HomePage(page);

  // Given I landed on the homepage
  await homePage.gotoHomePage();

  // Then home page should be visually same as in golden file screenshot
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('screenshot.png', {
    timeout: 5000,
  });
});
