import { test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

setup('do login', async ({ page }) => {
  console.log('Running setup test for login');

  await page.goto('/login');
  await page.getByLabel('Email').fill('testemail+playwright@mail.com');
  await page.getByLabel('Password').fill('Qwert12345');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForLoadState('networkidle');

  // Wait until the page actually signs in.
  await page.getByRole('link', { name: 'testemail+playwright@mail.com' }).isVisible();

  console.log('Login completed successfully.');

  await page.context().storageState({ path: STORAGE_STATE });
});
