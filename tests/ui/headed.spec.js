const { test, expect } = require('@playwright/test');

test('Open SauceDemo in headed mode test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const title = await page.title();
  expect(title).toContain('Swag Labs');
});
