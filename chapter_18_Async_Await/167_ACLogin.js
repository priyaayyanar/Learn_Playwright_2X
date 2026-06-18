// Toughest Way
import { test, expect } from '@playwright/test';

test('logs in with valid credentials @p0', async ({ page }) => {
    await test.step('Login as standard_user', async () => {
        log.info('Logging in as standard_user');
        await loginPage.loginAs('standard_user', 'tta_secret');
    });

    await test.step('Verify login form is no longer shown', async () => {
        log.info('Asserting login form is hidden after login');
        await expect(page.locator('[data-test="login-button"]')).toBeHidden();
    });
});

// Simple Way
import { test, expect } from '@playwright/test';
// breatking of an object '@playwright/test' into 2 parts "test" & "expect"

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
// from async({page}) -> callback function has started.
// Since the callback function returns some promises,
// we have to mention it as await to complete the process
// since the definition contains "await" then the function should be in async