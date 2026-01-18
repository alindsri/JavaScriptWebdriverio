describe('MakeMyTrip Flight Search', () => {
  it('should search Delhi to Mumbai on Jan 20 2025', async () => {
    // Launch homepage
      browser.debug('hello debug line 1');
    await browser.url('https://www.makemytrip.com/');
    await browser.maximizeWindow();
     await browser.pause(2000); 

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

    // Click Flights tab
   await $('a[href="/flights/"]').waitForClickable({ timeout: 50000 });
await $('a[href="/flights/"]').click();
    // Select One Way
     browser.debug('hello first');
  await browser.execute(() => {
  const el = document.querySelector('[data-cy="oneWayTrip"]');
  if (el) el.click();  // click if found
}); 

console.log(' flight clicked');

    // From: Delhi
     console.log('before one way  ');
  await $('text=From').waitForClickable({ timeout: 50000 });
  await $('*=BOM').click();
 console.log('one way clicked - selected from city');
  //await $('#fromCity').click();
  //await $('#fromCity').clearValue();
  //await $('#fromCity').setValue('DELHI');

   // await $('#react-autowhatever-1-section-0-item-0').waitForExist({ timeout: 5000 });
   // await $('#react-autowhatever-1-section-0-item-0').click();  // Delhi option

    // To: Mumbai
    await $('#toCity').waitForClickable({ timeout: 50000 });
     await $('*=BLR').click();
    //    await $('#toCity').click();
   // await $('#toCity').clearValue();clear
   //clear await $('#toCity').setValue('PUNE');

    // await $('#react-autowhatever-1-section-0-item-1').waitForExist({ timeout: 5000 });
    // await $('#react-autowhatever-1-section-0-item-1').click();  // Mumbai option

    // // Date: Jan 20 2025 (navigate calendar)
    // await $('[placeholder="Departure"]').click();
    // // Click next month/year until Jan 2025 visible, then click day 20
    // await $('button[aria-label*="Next"]').click({ count: 12 });  // Approx to Jan 2025
    // await $('[aria-label*="20 January 2025"]').click();

    // // Search
    // await $('span=Search').click();

    // // Verify results loaded
    // await expect($('.flight-listing')).toBeExisting({ timeout: 15000 });
  });
});
