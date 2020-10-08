const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://carkeysexpress.com/autozone/louisville';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});
  // *** GLOBAL VARS
    // * find your key Form
    const make = '#make'
    const model = '#model'
    const year = '#year'
    const seachBtn = '.check-fitment'
    // * map
    const iframe = 'iframe'
    const mapPoints = '.i4ewOd-pzNkMb-xl07Ob-haAclf'



// * Find Your Key Form
  // * Make
  try {    
    await Promise.all([
      page.click(make),
      console.log('MAKE CLICKED:', 'PASSED'),
    ])
    // await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
  } catch (err) {
    console.log('MAKE CLICKED:  FAILED');
  }
  // * Model
  try {    
    await Promise.all([
      page.click(model),
      console.log('MODEL CLICKED:', 'PASSED'),
    ])
    // await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
  } catch (err) {
    console.log('MODEL CLICKED:  FAILED');
  }
  // * Year
  try {    
    await Promise.all([
      page.click(year),
      console.log('YEAR CLICKED:', 'PASSED'),
    ])
    // await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
  } catch (err) {
    console.log('YEAR CLICKED:  FAILED');
  }
  // * Search
  try {    
    await Promise.all([
      page.click(seachBtn),
      console.log('SEARCH CLICKED:', 'PASSED'),
    ])
    // await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
  } catch (err) {
    console.log('SEARCH CLICKED:  FAILED');
  }
  // * Map
  try {    
    await Promise.all([
      page.click(iframe),
      console.log('IFRAME CLICKED:', 'PASSED'),
    ])
    await page.screenshot({path: 'MAP.png'})
  } catch (err) {
    console.log('IFRAME CLICKED:  FAILED');
  }
  //* Map Locations
  // try {    
  //   await Promise.all([
  //     page.click(mapPoints),
  //     console.log('MAP LOCATION CLICKED:', 'PASSED'),
  //   // await page.waitFor(1000),
      
  //     await page.screenshot({path: 'MAP-LOCATION.png'})
  //   ])
  // } catch (err) {
  //   console.log('MAP LOCATION CLICKED:  FAILED');
  // }

      console.log('waiting for iframe with form to be ready.');
      await page.waitForSelector('iframe');
      console.log('iframe is ready. Loading iframe content');

      const elementHandle = await page.$(
          'iframe[src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container-bg_4x.png,icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=ff000000,0288D1&scale=2.0"]',
      );
      const frame = await elementHandle.contentFrame();

      console.log('filling form in iframe');
      await frame.click();
      await page.screenshot({path: 'MAP-LOCATION.png'})


    // *** END
    await browser.close();
  })();