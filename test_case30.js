const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');

        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();
        console.log(alertText);
    }
    finally{
        
    }
})();