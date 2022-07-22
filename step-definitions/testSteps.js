const { Given, When, Then } = require('@wdio/cucumber-framework');

let homePage = require('../pageobjects/homePage');
let categoryPage = require('../pageobjects/categoryPage');
let marketplacePage = require('../pageobjects/marketplacePage');
let cartPage = require('../pageobjects/cartPage');
let addressPage = require('../pageobjects/addressPage');
let deliveryPage = require('../pageobjects/deliveryPage');
// let chai = require('chai');
// let expect = chai.expect;

Given(/^Guest is in the homepage$/, function () {
    console.log("\n> Guest is in the homepage");
    // browser.reload();
    homePage.go();
});

When(/^Guest adds first item to cart from category page$/, function () {
    console.log("\n> Guest adds first item to cart from category page");
    categoryPage.addFirstProductToCart();
});

When(/^Guest adds second item to cart from category page$/, function () {
    console.log("\n> Guest adds second item to cart from category page");
    categoryPage.addSecondProductToCart();
});

When(/^Guest adds third item to cart from category page$/, function () {
    console.log("\n> Guest adds third item to cart from category page");
    categoryPage.addThirdProductToCart();
});

When(/^Guest navigates to marketplace$/, function () {
    console.log("\n> Guest navigates to marketplace");
    marketplacePage.go();
});

When(/^Guest previews first item from marketplace$/, function () {
    console.log("\n> Guest previews first item from marketplace");
    marketplacePage.openFirstProductPreview();
});

When(/^Guest previews second item from marketplace$/, function () {
    console.log("\n> Guest previews second item from marketplace");
    marketplacePage.openSecondProductPreview();
});

When(/^Guest previews third item from marketplace$/, function () {
    console.log("\n> Guest previews third item from marketplace");
    marketplacePage.openThirdProductPreview();
});

When(/^Guest adds item to cart from product detail modal$/, function () {
    console.log("\n> Guest adds item to cart from product detail modal");
    marketplacePage.addToCartFromPreviewModal();
    marketplacePage.closePreviewModal();
});

When(/^Guest navigates to cart page$/, function () {
    console.log("\n> Guest navigates to cart page");
    cartPage.go();
});

Then(/^Verify item count in cart to be "([^"]*)"$/, function (expectedCount) {
    console.log("\n> Verify item count in cart to be "+expectedCount);
    let itemCount = cartPage.getCartItemCount();
    expect(itemCount.toString(),"Cart count is as expected").to.equal(expectedCount);
});

When(/^Guest removes item "([^"]*)" from cart$/, function (n) {
    console.log("\n> Guest removes item "+n+" from cart");
    cartPage.removeNthItem(n);
});

When(/^Guest clicks on checkout button$/, function () {
    console.log("\n> Guest clicks on checkout button");
    cartPage.checkout();
    browser.pause(10000);
});

Given(/^Guest clicks on sign-up option in header$/, function () {
    console.log("\n> Guest clicks on sign-up option in header");
    homePage.clickSignUp();
});

Given(/^Guest clicks on Log In option in header$/, function () {
    console.log("\n> Guest clicks on Log In option in header");
    homePage.clickSignIn();
});

Given(/^Guest signs up with email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
    console.log("\n> Guest signs up with email '"+email+ "' and password '"+password+"'");
    homePage.signUpModalCreateAccount(email, password);
});

Given(/^Guest logs in with email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
    console.log("\n> Guest logs in with email '"+email+ "' and password '"+password+"'");
    homePage.signUpModalSignIn(email, password);
});

Then(/^Verify guest is "([^"]*)"$/, async function (logInState) {
    console.log("\n> Verify guest is " + logInState);

    let state = await homePage.isSignedIn();

    switch (logInState) {
        case 'Logged In':
            expect(state).toBeTruthy();
            break;

        case 'Not Logged In':
            expect(state).toBeFalsy();
            break;

        default:
            console.log("\t\tUnknown Login state. Please check your arguments");
    }
});

Given(/^Clear cart for the user$/, function () {
    console.log("\n> Clear cart for the user");
    cartPage.go();
    cartPage.clearCart();
});

Then(/^Verify guest is in address page$/, function () {
    console.log("\n> Verify guest is in address page");
    expect(browser.isVisible(addressPage.progressStep), 'Address page loaded').to.equal(true);
});

When(/^Guest clicks on next button$/, function () {
    console.log("\n> Guest clicks on next button");
    addressPage.clickNext();
});

Then(/^Verify guest is in delivery page$/, function () {
    console.log("\n> Verify guest is in delivery page");
    expect(browser.isVisible(deliveryPage.progressStep), 'Delivery page loaded').to.equal(true);
});

