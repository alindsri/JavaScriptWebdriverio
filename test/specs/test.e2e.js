const { expect, browser, $ } = require("@wdio/globals");

describe("Form Submit Demo", () => {
    it("should fill form input fields", async () => {
        await browser.url('https://www.linkedin.com/in/mejbaur/');
        await $("#title").setValue("John Doe");
        await $("#description").setValue("Hello there");
        await $("#btn-submit").click();
    });
});