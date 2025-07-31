const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { saveData } = require('../../utils/dataHandler');

test('Login and save inventory count', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  const count = await inventoryPage.countItems();

  saveData({ inventoryCount: count });
  expect(count).toBeGreaterThan(0);
});