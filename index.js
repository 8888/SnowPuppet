const puppeteer = require('puppeteer');

/* Camelback */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.skicamelback.com/plan-your-trip/trail-map-conditions/');
  await page.screenshot({
    path: 'screenshots/camelback.png',
    clip: {
      x: 0,
      y: 250,
      width: 800,
      height: 450
    },
    omitBackground: true
  });

  await browser.close();
})();

/* Blue Mountain */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.skibluemt.com/winter-sports/skiing-snowboarding/trail-map/');
  await page.screenshot({
    path: 'screenshots/blue.png',
    clip: {
      x: 0,
      y: 1300,
      width: 800,
      height: 700
    },
    omitBackground: true
  });

  await browser.close();
})();

/* Hunter Mountain */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 1080
  });
  await page.goto('http://www.huntermtn.com/winter/snow-report/snow-report/');
  await page.screenshot({
    path: 'screenshots/hunter.png',
    clip: {
      x: 150,
      y: 460,
      width: 1050,
      height: 375
    },
    omitBackground: true
  });

  await browser.close();
})();
