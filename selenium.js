require('chromedriver');
require('geckodriver');
const { Builder,By,Key,until } = require("selenium-webdriver");
  const chrome = require('selenium-webdriver/chrome');

  const browsertest = async ()=>{
  let options = new chrome.Options();
  let driver = await new Builder()
    .forBrowser('firefox')
    .setChromeOptions(options) 
    .build();

    await driver.get("http://localhost:3000")


    await driver.manage().setTimeouts({implicit: 3 })

    const app2 = await driver.findElement(By.className("app2"))

    console.log(await app2.getText());

   /* await driver.manage().setTimeouts({implicit: 0.5 })
    await driver.findElement(By.name("q")).sendKeys("react",Key.RETURN)

   const searchvalue = await driver.findElement(By.name('q')).getAttribute("value");
   */
   //console.log(searchvalue );
   // await driver.quit();
    
}

browsertest();