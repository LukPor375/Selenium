const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    //test_case1
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('17-05-2008', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click(); 
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log(output);
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 1: "+output);
    }
    //test_case2
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('29-02-2007', Key.ENTER);;
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 2: "+output);
    }
    //test_case3
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('01-06-2010', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 3: "+output);
    }
    //test_case4
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('14-07-2009', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 4: "+output);
    }
    //test_case5
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('02-07-2006', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 5: "+output);
    }
    //test_case6
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('18-10-2005', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 6: "+output);
    }
    //test_case7
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('14-04-2003', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 7: "+output);
    }
    //test_case8
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('14-07-2004', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 8: "+output);
    }
    //test_case9
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('02-09-1966', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 9: "+output);
    }
    //test_case10
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('30-02-2002', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 10: "+output);
    }
    //test_case11
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('16-12-2000', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 11: "+output);
    }
    //test_case12
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('29-12-1955', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 12: "+output);
    }
    //test_case13
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('18-03-1955', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 13: "+output);
    }
    //test_case14
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('30-01-1955', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 14: "+output);
    }
    //test_case15
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('20-10-1945', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 15: "+output);
    }
    //test_case16
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('13-08-1954', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 16: "+output);
    }
    //test_case17
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('13-08-2011', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 17: "+output);
    }
    //test_case18
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('20-12-2012', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 18: "+output);
    }
    //test_case19
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('03-11-2014', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 19: "+output);
    }
    //test_case20
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('07-04-2013', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 20: "+output);
    }
    //test_case21
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('1232', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('02-09-1965', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 21: "+output);
    }
    //test_case22
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('4314', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('13-08-1945', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 22: "+output);
    }
    //test_case23
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('-Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('13-08-1978', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 23: "+output);
    }
    //test_case24
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('2634', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('364', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('13-08-2004', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 24: "+output);
    }
    //test_case25
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('1 3-0 8-20 08', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 25: "+output);
    }
    //test_case26
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys(' ', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zgoda rodziców"
        await driver.findElement(By.id("rodzice")).click();
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 26: "+output);
    }
    //test_case27
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys(' ', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys(' ', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys(' ', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 27: "+output);
    }
    //test_case28
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys(' ', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys(' ', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys(' ', Key.ENTER);
        //Zaznaczanie opcji w checkbox "Zaświadczenie od lekarza"
        await driver.findElement(By.id("lekarz")).click();
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 28: "+output);
    }
    //test_case29
    try {
        //Przekierowanie na stronę z zawodami
        await driver.get('https://lamp.ii.us.edu.pl/~mtdyd/zawody/');
        //Wpisanie w pole "Imię" danych
        await driver.findElement(By.id('inputEmail3')).sendKeys('Jan', Key.ENTER);
        //Wpisanie w pole "Nazwisko" danych
        await driver.findElement(By.id('inputPassword3')).sendKeys('Kowalski', Key.ENTER);
        //Wpisanie w pole "Data urodzenia" danych
        await driver.findElement(By.id('dataU')).sendKeys('qwerty', Key.ENTER);
        //Naciśnięcie w przycisk "Wyślij"
        await driver.findElement(By.className('btn btn-default')).click();  
        //Obsługa alertu
        await driver.wait(until.alertIsPresent());
        let alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.wait(until.alertIsPresent());
        await alert.accept();
    }
    finally{
        //Wyświetlenie komunikatu ze strony w konsoli
        let output= await driver.findElement(By.id('returnSt')).getText();
        console.log("Test nr 29: "+output);
    }
    //test_case30
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
        //Wyświetlenie komunikatu ze strony w konsoli
        console.log("Test nr 30: "+alertText);
        await alert.accept();
    }
    finally{
        
    }
})();
