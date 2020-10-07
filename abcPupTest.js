const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.abchyundai.com';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});

  // *** GLOBAL VARS  *** 
  // * ePRICE
      const closeEprice = '.di-modal-close'
      const srpNewEpriceVar = '.lightning-custom-cta'
      const carImg = 'div.hit-image'
      const vdpNewEpriceVar1 = '.vdp-pricebox-cta-button'
      const vdpNewEpriceVar2 = '.online-shopper-cta-button'
    // * NEW
      const srpNewPageUrlContains = "new-vehicles"
    // * USED
      const srpUsedPageUrlContains = "used-vehicles"
    // * CPO
      const srpCpoPageUrlContains = "certified-pre-owned"
    // * CONTACT
      const contactPageUrlContains = "contact-us"
      const contactFormVar = '#gform_submit_button_3748'
    // * FINANCE
      const financePageUrlContains = "finance"
    // * ORDER PARTS
      const orderPartsPageUrlContains = "order-parts"
    // * COUPONS
      const couponPageUrlContains = "service-specials"
      const printCouponVar = '.difo-type-print'
    // * SCHEDULE SERVICE
      const scheduleServicePageUrlContains = "schedule"


  // *** NEW-SRP-PAGE-VIEW
  await page.goto(`${url}/${srpNewPageUrlContains}`);
  console.log('new pageview');
  await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
    // ** ePrice
    await Promise.all([
      page.click(srpNewEpriceVar),
      console.log('clicked ePrice'),
    ])
    await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
    // * Close ePrice
    await Promise.all([
      page.click(closeEprice),
      console.log('clicked Close ePrice'),
    ])
    await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
    // * Go to VDP
    await Promise.all([
      page.click(carImg),
      console.log('clicked Car Img'),
    ])
    await page.screenshot({path: '2-3-VDP-NEW.png'})
    // * VDP ePrice
    await Promise.all([
      page.click(vdpNewEpriceVar1),
      console.log('clicked eprice'),
    ])
    await page.screenshot({path: '2-4-VDP-NEW.png'})
    // * Close ePrice
    await Promise.all([
      page.click(closeEprice),
      console.log('clicked Close ePrice'),
    ])
    await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
    // * VDP ePrice
    await Promise.all([
      page.click(vdpNewEpriceVar2),
      console.log('clicked eprice'),
    ])
    await page.screenshot({path: '2-6-VDP-NEW.png'})


  // *** USED-SRP-PAGE-VIEW
  await page.goto(`${url}/${srpUsedPageUrlContains}`);
  console.log('used pageview');
  await page.screenshot({path: '2-SRP-USED-PAGE.png'});
      // ** ePrice
      await Promise.all([
        page.click(srpNewEpriceVar),
        console.log('clicked ePrice'),
      ])
      await page.screenshot({path: '2-1-SRP-USED-EPRICE.png'})
      // * Close ePrice
      await Promise.all([
        page.click(closeEprice),
        console.log('clicked Close ePrice'),
      ])
      await page.screenshot({path: '2-2-SRP-USED-EPRICE-CLOSE.png'})
      // * Go to VDP
      await Promise.all([
        page.click(carImg),
        console.log('clicked Car Img'),
      ])
      await page.screenshot({path: '2-3-VDP-USED.png'})
      // * VDP ePrice
      await Promise.all([
        page.click(vdpNewEpriceVar1),
        console.log('clicked eprice'),
      ])
      await page.screenshot({path: '2-4-VDP-USED.png'})
      // * Close ePrice
      await Promise.all([
        page.click(closeEprice),
        console.log('clicked Close ePrice'),
      ])
      await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
      // * VDP ePrice
      await Promise.all([
        page.click(vdpNewEpriceVar2),
        console.log('clicked eprice'),
      ])
      await page.screenshot({path: '2-6-VDP-USED.png'})


  // *** CPO-SRP-PAGE-VIEW
  await page.goto(`${url}/${srpCpoPageUrlContains}`);
  console.log('cpo pageview');
  await page.screenshot({path: '2-SRP-CPO-PAGE.png'});
      // ** ePrice
      await Promise.all([
        page.click(srpNewEpriceVar),
        console.log('clicked ePrice'),
      ])
      await page.screenshot({path: '2-1-SRP-CPO-EPRICE.png'})
      // * Close ePrice
      await Promise.all([
        page.click(closeEprice),
        console.log('clicked Close ePrice'),
      ])
      await page.screenshot({path: '2-2-SRP-CPO-EPRICE-CLOSE.png'})
      // * Go to VDP
      await Promise.all([
        page.click(carImg),
        console.log('clicked Car Img'),
      ])
      await page.screenshot({path: '2-3-VDP-CPO.png'})
      // * VDP ePrice
      await Promise.all([
        page.click(vdpNewEpriceVar1),
        console.log('clicked eprice'),
      ])
      await page.screenshot({path: '2-4-VDP-CPO.png'})
      // * Close ePrice
      await Promise.all([
        page.click(closeEprice),
        console.log('clicked Close ePrice'),
      ])
      await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
      // * VDP ePrice
      await Promise.all([
        page.click(vdpNewEpriceVar2),
        console.log('clicked eprice'),
      ])
      await page.screenshot({path: '2-6-VDP-CPO.png'})


  // *** FINANCE
  await page.goto(`${url}/${financePageUrlContains}`);
  console.log('finance pageview');
  await page.screenshot({path: '2-FINANCE-PAGE.png'});

  // *** ORDER PARTS
  await page.goto(`${url}/${orderPartsPageUrlContains}`);
  console.log('order parts pageview');
  await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});

  // *** COUPONS
  await page.goto(`${url}/${couponPageUrlContains}`);
  console.log('coupons pageview');
  await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});
      // * PRINT
      await Promise.all([
        page.click(printCouponVar),
        console.log('clicked print coupon'),
      ])

  // *** SCHEDULE SERVICE
  await page.goto(`${url}/${scheduleServicePageUrlContains}`);
  console.log('schedule service pageview');
  await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});

  // *** CONTACT
  await page.goto(`${url}/${contactPageUrlContains}`);
  console.log('contact pageview');
  await page.screenshot({path: '3-CONTACT-PAGE.png'});
      // * FORM
      // await Promise.all([
      //   page.click(contactFormVar),
      //   console.log('clicked contact form'),
      // ])

  // *** END
  await browser.close();
})();