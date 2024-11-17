import { test, expect } from '@playwright/test';
test('change language to german', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const languageSwitch = page.getByTestId('language-switch');
    const leadText = page.getByTestId('landing-lead-text');
    await languageSwitch.click();
    await languageSwitch.selectOption({ value: 'de' });

    await expect(leadText).toHaveText('Mach Schluss mit langweiligen Passwörtern und Namen!');
});

test('change language to english', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const languageSwitch = page.getByTestId('language-switch');
    const leadText = page.getByTestId('landing-lead-text');

    await languageSwitch.click();
    await languageSwitch.selectOption({ value: 'en' });

    await expect(leadText).toHaveText('Say goodbye to boring passwords and names!');
});
