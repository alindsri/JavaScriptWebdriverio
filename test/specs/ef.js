// A typical WebdriverIO test file (e.g., facebook.e2e.js)

describe('Facebook Launch Test', () => {
    // The 'it' block defines a single test case
    it('should open the Facebook login page and check the title', async () => {
        
        // 1. Launch the browser and navigate to the Facebook URL
        await browser.url('https://www.facebook.com');

        // 2. Maximize the window (optional, but good practice for consistency)
        await browser.maximizeWindow();
        
        // 3. Assertion: Verify the page loaded correctly by checking the title
        // NOTE: The title may change based on language/location/cookies.
        // It's generally better to check for a unique element's existence.
        const pageTitle = await browser.getTitle();
        console.log(`Page Title: ${pageTitle}`);

        // WebdriverIO uses the 'expect' library for assertions
        await expect(browser).toHaveTitle(expect.stringContaining('Facebook'));
        
        // --- Optional: Find the email field to prove the page is ready ---
        // A better check for page load: waiting for a key element.
        const emailInput = await $('#email');
        await emailInput.waitForExist({ timeout: 10000 });
        
        await expect(emailInput).toBeDisplayed();
    });
});