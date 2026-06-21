import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await expect(page.getByRole('link').filter({ hasText: 'test.all()' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-container"]')).toContainText('$15.99');
    await expect(page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]')).toContainText('Add to cart');
    await expect(page.locator('[data-test="inventory-container"]')).toContainText('Get your testing superhero on with the TTA bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
});