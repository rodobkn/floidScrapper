const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const executeScrap = async (rut, password) => {

  const chileBankUrl = 'https://portales.bancochile.cl/personas';

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });;
  const page = await browser.newPage();
  await page.goto(chileBankUrl);
  await Promise.all([
    page.waitForNavigation(),
    page.click('#btn_bch_menu_banco-en-linea')
  ]);
  await page.type('#iduserName', rut)
  await page.type('input[name=userpassword]', password)

  await Promise.all([
    page.waitForNavigation(),
    page.click('#idIngresar')
  ]);
  await page.waitForSelector('div[class="col-sm-6 pl-0"] > p');

  const data = await page.evaluate(() => {

    const balance = document.querySelector('div[class="col-sm-6 pl-0"] > p').innerText
    return balance
  });
  await browser.close();
  return data;
}

module.exports = {
  executeScrap
};
