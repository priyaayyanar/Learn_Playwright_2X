// WHenever we are Asyncally waiting for a function, 
// we have to await for their respective funciton to be finished

async function getTestResult() {
    return "pass";
}

let result = getTestResult.then(function (response) {
    console.log(response);
});

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator();

});