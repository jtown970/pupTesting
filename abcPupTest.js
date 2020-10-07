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
  const srpNewPageUrlContains = "new-vehicles"
  const srpNewEpriceVar = '.lightning-custom-cta'


  // *** NEW-SRP-PAGE-VIEW
  await page.goto(`${url}/${srpNewPageUrlContains}`);
  console.log('new pageview');
  await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
    // ** ePrice
    await Promise.all([
      page.click(srpNewEpriceVar),
      console.log('clicked'),
      await page.screenshot({path: '2-SRP-NEW-EPRICE.png'})
    ])


  // *** END
  await browser.close();
})();