const { assert } = require("chai");
const internetpage = require("../pageobjects/internetpage");
const loginPage = require ("../pageobjects/loginPage");
var loginData = require("../../config")

describe("Handle Application Login",function(){
    it("Enter Username",function(){
        browser.url(`${browser.options.baseUrl}/login`);
     // browser.url("http://the-internet.herokuapp.com/login");
        loginPage.enterUsername(loginData.username);
        console.log(loginPage.username.getValue())
      //  assert.equal("tomsmith",loginPage.username.getValue());
      assert.equal(loginData.username,loginPage.username.getValue());
        browser.pause(5000)
    });
//     it("Enter Password",function(){
//        // browser.url(`${browser.options.baseUrl}/login`);
//         loginPage.enterPassword('SuperSecretPassword');
//         console.log(loginPage.password.getValue())
//         assert.equal("SuperSecretPassword",loginPage.password.getValue());
//         browser.pause(5000)
//     });
//     it("click Login Button",function(){
//         loginPage.clickOnLogin();
//     });
//     it("should clear Username",function(){
//         browser.url(`${browser.options.baseUrl}/login`);
//         loginPage.username.click();
//         loginPage.username.clearValue();
        
//     });
//     it("should clear password",function(){
//         loginPage.enterPassword('SuperSecretPassword');
//         console.log(loginPage.password.getValue())
//         loginPage.password.click();
//         loginPage.password.clearValue();
//         browser.pause(5000)
//         assert.equal("",loginPage.password.getValue())
//     });
 });