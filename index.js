const puppeteer = require('puppeteer');

/* Camelback */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.skicamelback.com/plan-your-trip/trail-map-conditions/');
  const bounds = await page.evaluate( () => {
    return document.getElementById('trailmap-1-1-snowreport').getBoundingClientRect();
  });
  await page.screenshot({
    path: 'screenshots/camelback.png',
    clip: bounds,
    omitBackground: true
  });

  await browser.close();
})();

/* Blue Mountain */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.skibluemt.com/winter-sports/skiing-snowboarding/trail-map/');
  const bounds = await page.evaluate( () => {
    const parent = document.getElementById('main-content');
    return parent.getElementsByClassName('col2-content')[0].getBoundingClientRect();
  });
  await page.screenshot({
    path: 'screenshots/blue.png',
    clip: bounds,
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
  const bounds = await page.evaluate( () => {
    return document.getElementById('panel-conditions').getBoundingClientRect();
  });
  await page.screenshot({
    path: 'screenshots/hunter.png',
    clip: bounds,
    omitBackground: true
  });

  await browser.close();
})();
