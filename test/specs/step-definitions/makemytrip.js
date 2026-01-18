import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import { expect as chaiExpect } from 'chai';

Given(/^I launch the MakeMyTrip homepage$/, async () => {
    await browser.url('https://www.makemytrip.com/');
});

Given(/^I maximize the browser window$/, async () => {
    await browser.maximizeWindow();
    await browser.pause(2000);
});



  When(/^I click on the Flights  tab$/, async() => {
   const closeSelectors = [
      '.close', 
      '[data-cy="closeModal"]',
      '.mmtCloseIcon',
      '.loginModal .close',
      'button[aria-label*="close"]',
      '.autopop .close'
    ];

    for (const selector of closeSelectors) {
      try {
        const closeBtn = $(selector);
        if (await closeBtn.isExisting({ timeout: 2000 })) {
          await closeBtn.click();
          await browser.pause(1000);
          break;  
        }
      } catch (e) {
        // Continue to next selector
      }
    }
    const flightsTab= await $('a[href="/flights/"]');
    await flightsTab.waitForClickable({ timeout: 50000 });
    const isDisplayed = await flightsTab.isDisplayed();
    chaiExpect(isDisplayed).to.be.true;
    //.to.be.true;
    await flightsTab.click();
    const url = await browser.getUrl();
    chaiExpect(url).to.contain('flights');

  //   await $('a[href="/flights/"]').waitForClickable({ timeout: 50000 });
  //   await $('a[href="/flights/"]').click();
});

    When(/^I select "One Way" trip option$/,  async () => {
    // [When] Describes the action or event that triggers the scenario.
     await browser.execute(() => {
  const el = document.querySelector('[data-cy="oneWayTrip"]');
  if (el) el.click();  // click if found
}); 
});

// When(`I set the {string} city to {string}`, (arg0: string, arg1: string) => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// When(`I select the departure date as {string}`, (arg0: string) => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// When(`I click the {string} button`, (arg0: string) => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// Then(`I should see the list of available flight options`, () => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });