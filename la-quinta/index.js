const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.hyundaioflaquinta.com';
  await page.goto(url);
  console.log('landed')

  // *** GLOBAL VARS  *** 
  // * ePRICE
      const closeEprice = 'div.link a'
      const srpNewEpriceVar = '.primary'
      const carImg = 'figure a img'
      const vdpNewEpriceVar1 = '.primary'
      const vdpNewEpriceVar2 = '.Drive-Schedule'
    // * NEW
      const srpNewPageUrlContains = "VehicleSearchResults?search=new&make=Hyundai"
    // * USED
      const srpUsedPageUrlContains = "VehicleSearchResults?search=preowned"
    // * CPO
      const srpCpoPageUrlContains = "VehicleSearchResults?search=certified"
    // * CONTACT
      const contactPageUrlContains = "ContactUs"
      // const contactFormVar = '#gform_submit_button_3748'
      const contactFormVar = 'submit'
    // * FINANCE
      const financePageUrlContains = "FinancePreQualForm"
    // * ORDER PARTS
      const orderPartsPageUrlContains = "PartsOrderForm"
    // * COUPONS
      const couponPageUrlContains = "ServiceAndPartsSpecials"
      const printCouponVar = '.difo-type-print'
    // * SCHEDULE SERVICE
      const scheduleServicePageUrlContains = "ServiceApptForm"


  // *** NEW-SRP-PAGE-VIEW
  try {
    await page.goto(`${url}/${srpNewPageUrlContains}`);
    console.log('SRP-NEW PAGEVIEW:', 'PASSED');
    await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
  } catch (err){
    console.log('SRP NEW PAGEVIEW:  FAILED');
  }

    // ** ePrice
    try {    
      await Promise.all([
        page.click(srpNewEpriceVar),
        console.log('SRP NEW ePRICE:', 'PASSED'),
      ])
      await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
    } catch (err) {
      console.log('SRP NEW ePRICE:  FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('Close ePrice:', "PASSED"),
      ])
      await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('Close ePrice:', 'FAILED');
    }

    // * Go to VDP
    try {
      await Promise.all([
        page.click(carImg),
        console.log('Go to VDP page: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-3-VDP-NEW.png'})
    } catch (err) {
      console.log('Go to VDP Page:', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar1),
        console.log('VDP ePrice: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-4-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE: ', 'FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('CLOSE ePRICE: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('CLOSE ePRICE: ', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar2),
        console.log('VDP ePRICE 2: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-6-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE 2: ', 'FAILED');
    }

  // *** USED-SRP-PAGE-VIEW
    try {
      await page.goto(`${url}/${srpUsedPageUrlContains}`);
      console.log('USED PAGEVIEW: ', 'PASSED');
      await page.screenshot({path: '2-SRP-USED-PAGE.png'});
    } catch (err) {
      console.log('USED PAGEVIEW: ', 'FAILED');
    }

     // ** ePrice
     try {    
      await Promise.all([
        page.click(srpNewEpriceVar),
        console.log('SRP NEW ePRICE:', 'PASSED'),
      ])
      await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
    } catch (err) {
      console.log('SRP NEW ePRICE:  FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('Close ePrice:', "PASSED"),
      ])
      await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('Close ePrice:', 'FAILED');
    }

    // * Go to VDP
    try {
      await Promise.all([
        page.click(carImg),
        console.log('Go to VDP page: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-3-VDP-NEW.png'})
    } catch (err) {
      console.log('Go to VDP Page:', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar1),
        console.log('VDP ePrice: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-4-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE: ', 'FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('CLOSE ePRICE: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('CLOSE ePRICE: ', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar2),
        console.log('VDP ePRICE 2: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-6-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE 2: ', 'FAILED');
    }


  // *** CPO-SRP-PAGE-VIEW
  try {
    await page.goto(`${url}/${srpCpoPageUrlContains}`);
    console.log('CPO PAGEVIEW: ', 'PASSED');
    await page.screenshot({path: '2-SRP-CPO-PAGE.png'});
  } catch (err) {
    console.log('CPO PAGEVIEW: ', 'FAILED');
  }
     // ** ePrice
     try {    
      await Promise.all([
        page.click(srpNewEpriceVar),
        console.log('SRP NEW ePRICE:', 'PASSED'),
      ])
      await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
    } catch (err) {
      console.log('SRP NEW ePRICE:  FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('Close ePrice:', "PASSED"),
      ])
      await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('Close ePrice:', 'FAILED');
    }

    // * Go to VDP
    try {
      await Promise.all([
        page.click(carImg),
        console.log('Go to VDP page: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-3-VDP-NEW.png'})
    } catch (err) {
      console.log('Go to VDP Page:', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar1),
        console.log('VDP ePrice: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-4-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE: ', 'FAILED');
    }

    // * Close ePrice
    try {
      await Promise.all([
        page.click(closeEprice),
        console.log('CLOSE ePRICE: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
    } catch (err) {
      console.log('CLOSE ePRICE: ', 'FAILED');
    }

    // * VDP ePrice
    try {
      await Promise.all([
        page.click(vdpNewEpriceVar2),
        console.log('VDP ePRICE 2: ', 'PASSED'),
      ])
      await page.screenshot({path: '2-6-VDP-NEW.png'})
    } catch (err) {
      console.log('VDP ePRICE 2: ', 'FAILED');
    }

  // *** FINANCE
  try {
    await page.goto(`${url}/${financePageUrlContains}`);
    console.log('FINANCE PAGEVIEW: ', 'PASSED');
    await page.screenshot({path: '2-FINANCE-PAGE.png'});
  } catch (err) {
    console.log('FINANCE PAGEVIEW: ', 'FAILED');
  }

  // *** ORDER PARTS
  try {
    await page.goto(`${url}/${orderPartsPageUrlContains}`);
    console.log('ORDER PARTS PAGEVIEW: ', 'PASSED');
    await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});
  } catch (err) {
    console.log('ORDER PARTS PAGEVIEW: ', 'FAILED');
  }

  // *** COUPONS
  try {
    await page.goto(`${url}/${couponPageUrlContains}`);
    console.log('COUPON PAGEVIEW: ', 'PASSED');
  } catch (err) {
    console.log('COUPON PAGEVIEW: ', 'FAILED');
  }
  await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});
      // * PRINT
      try {
        await Promise.all([
          page.click(printCouponVar),
          console.log('PRINT COUPON: ', 'PASSED'),
        ])
      } catch (err) {
        console.log('PRINT COUPON: ', 'FAILED');
      }


  // *** SCHEDULE SERVICE
  try {
    await page.goto(`${url}/${scheduleServicePageUrlContains}`);
    console.log('SCHEDULE SERVICE PAGEVIEW: ', 'PASSED');
    await page.screenshot({path: '2-ORDER-PARTS-PAGE.png'});
  } catch (err) {
    console.log('SCHEDULE SERVICE PAGEVIEW: ', 'FAILED');
  }

  // *** CONTACT
  try {
    await page.goto(`${url}/${contactPageUrlContains}`);
    console.log('CONTACT PAGEVIEW: ', 'PASSED');
    await page.screenshot({path: '3-CONTACT-PAGE.png'});
  } catch (err) {
    console.log('CONTACT PAGEVIEW: ', 'FAILED');
  }
  await page.screenshot({path: '3-CONTACT-PAGE.png'});

      // * FORM
      try {
        await Promise.all([
          page.click(contactFormVar),
          console.log('CONTACT FORM: ', 'PASSED'),
        ])
      } catch (err) {
        console.log('CONTACT FORM: ', 'FAILED');
      }

  // *** END
  await browser.close();
})();