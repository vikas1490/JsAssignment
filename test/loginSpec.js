describe("Login", function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.driver.get("http://localhost:5500/");
  });

  it("Should show error on entering invalid credential", function () {
    browser.driver.findElement(by.id("email")).clear();
    browser.driver.findElement(by.id("email")).sendKeys("admin@gmail.com");
    browser.driver.findElement(by.id("password")).clear();
    browser.driver.findElement(by.id("password")).sendKeys("adminsss");
    browser.driver.findElement(by.id("login")).click();

    var e = element(by.css(".error"));
    var EC = protractor.ExpectedConditions;
    var condition = EC.textToBePresentInElement(e, "Invalid Credentials");
    browser
      .wait(condition, 3000, "text is still not present")
      .then(function () {
        e.getText().then(function (text) {
          expect(text).toEqual("Invalid Credentials");
        });
      });
  });

  it("Should Able to login", function () {
    browser.driver.findElement(by.id("email")).clear();
    browser.driver.findElement(by.id("email")).sendKeys("admin@gmail.com");
    browser.driver.findElement(by.id("password")).clear();
    browser.driver.findElement(by.id("password")).sendKeys("admin");
    browser.driver.findElement(by.id("login")).click();

    var e = element(by.tagName("h1"));
    var EC = protractor.ExpectedConditions;
    var condition = EC.textToBePresentInElement(e, "Success");
    browser
      .wait(condition, 3000, "text is still not present")
      .then(function () {
        e.getText().then(function (text) {
          expect(text).toEqual("Success");
        });
      });
  });
});
