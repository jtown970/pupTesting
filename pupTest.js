const puppeteer = require('puppeteer');
// const { time } = require('console');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.abchyundai.com';
  await page.goto(url);
  console.log('landed')
  await page.screenshot({path: '1landing.png'});

//test New SRP page view

  const newUrl = 'https://www.abchyundai.com/new-vehicles/'
  await page.goto(newUrl);
  console.log('new pageview');
  await page.screenshot({path: '2newLanding.png'});


//test New Specials SRP page view

  const newSpecialsUrl = 'https://www.abchyundai.com/new-vehicles/new-vehicle-specials/'
  await page.goto(newSpecialsUrl);
  console.log('new Specials pageview');
  await page.screenshot({path: '2-1newSpecialsLanding.png'});

    // test new VDP pageview
    await Promise.all([
    // page.waitForNavigation(),
      page.click('div.hit-image'),
      console.log('clicked'),
      console.log('new VDP page view')
    ])
    await page.screenshot({path: '2-5newLanding.png'});

          //  VDP-New-ePrice
          await Promise.all([
            // page.waitForNavigation(),
            page.click('.vdp-pricebox-cta-button'),
            console.log('clicked ePrice 1'),
          ])
          await page.screenshot({path: '2newePriceLanding.png'});

          //  VDP-New-ePrice-2
          await Promise.all([
            // page.waitForNavigation(),
            page.click('.online-shopper-cta-button'),
            console.log('clicked ePrice 2'),
          ])
          await page.screenshot({path: '2newePrice-2Landing.png'});


//test used SRP page view
  const usedUrl = 'https://www.abchyundai.com/used-vehicles/'
  await page.goto(usedUrl);
  console.log('used pageview');
  await page.screenshot({path: '3usedLanding.png'});

  // test used VDP page view
    await Promise.all([
    // page.waitForNavigation(),
      page.click('div.hit-image'),
      console.log('clicked'),
      console.log('used VDP page view')
    ])
    await page.screenshot({path: '3-5usedLanding.png'});
      
        //  VDP-Used-ePrice
        await Promise.all([
        // page.waitForNavigation(),
          page.click('.vdp-pricebox-cta-button'),
          console.log('clicked ePrice 1'),
        ])
        await page.screenshot({path: '3usedePriceLanding.png'});

        //  VDP-Used-ePrice
        await Promise.all([
          // page.waitForNavigation(),
            page.click('.online-shopper-cta-button'),
            console.log('clicked ePrice 2'),
        ])
        await page.screenshot({path: '3usedePrice-2Landing.png'});


//test CPO SRP page view
  const CPOUrl = 'https://www.abchyundai.com/used-vehicles/certified-pre-owned-vehicles/'
  await page.goto(CPOUrl);
  console.log('CPO pageview');
  await page.screenshot({path: '4CPOLanding.png'});

    // test CPO VDP page view
    await Promise.all([
      // page.waitForNavigation(),
      page.click('div.hit-image'),
      console.log('clicked'),
      console.log('CPO VDP page view')
    ])
    await page.screenshot({path: '4-5cpoLanding.png'});

          //  VDP-CPO-ePrice Click
          await Promise.all([
          // page.waitForNavigation(),
            page.click('.vdp-pricebox-cta-button'),
            console.log('clicked ePrice 1'),
          ])
          await page.screenshot({path: '4-1CPOePriceLanding.png'});

            // close modal
            await Promise.all([
            // page.waitForNavigation(),
              page.click('.di-modal-close'),
              console.log('clicked close modal'),
            ])
            await page.screenshot({path: '4-2CPO-Close-Modal-Landing.png'});

          // second ePrice BTN Click
          await Promise.all([
          // page.waitForNavigation(),
            page.click('.online-shopper-cta-button'),
            console.log('clicked ePrice 2'),
          ])
          await page.screenshot({path: '4-3CPOePrice-2Landing.png'});

//test Finance page view
  const financeUrl = 'https://www.abchyundai.com/finance/'
  await page.goto(financeUrl);
  console.log('Finance pageview');
  await page.screenshot({path: '5financeLanding.png'});

//test order page view
  const orderUrl = 'https://www.abchyundai.com/parts/order-parts/'
  await page.goto(orderUrl);
  console.log('order pageview');
  await page.screenshot({path: '6orderLanding.png'});  

//test service specials / Coupons  page view
  const specialsUrl = 'https://www.abchyundai.com/service/service-specials/'
  await page.goto(specialsUrl);
  console.log('specials pageview');
  await page.screenshot({path: '7specialsLanding.png'});  

        // test Coupon Print
        await Promise.all([
          // page.waitForNavigation(),
          page.click('.difo-type-print'),
          console.log('clicked Coupon')
        ])
        await page.screenshot({path: '7-1-coupon-printed.png'});

//test contact page view
  const contactUrl = 'https://www.abchyundai.com/contact-us/'
  await page.goto(contactUrl);
  console.log('contact pageview');
  await page.screenshot({path: '8contactLanding.png'});  

//test schedule-service page view
  const scheduleServiceUrl = 'https://www.abchyundai.com/service/schedule-service/'
  await page.goto(scheduleServiceUrl);
  console.log('schedule-service pageview');
  await page.screenshot({path: '9scheduleServiceLanding.png'});  

//test contact page view
  const vytUrl = 'https://www.abchyundai.com/value-your-trade/'
  await page.goto(vytUrl);
  console.log('vyt pageview');
  await page.screenshot({path: '10vytLanding.png'});  

  // END
  await browser.close();
})();

