import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Tests', () => {

  test('should display login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('rahulshetty@gmail.com', 'Iamking@000');

    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('incorrect email or password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong@email.com', 'wrongpassword');

    await expect(loginPage.errorMessage).toBeVisible();
  });

});