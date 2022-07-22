'use strict';

class Page{
    path = "";
    iWait = 1000;

    get headerContainer () { return $('#navbar') };
    get headerMenu ()  { return this.headerContainer.$('#showMenu') };
    get signUpButton ()  { return $('//*[@id="NAVBAR_SIGNUP_BTN"]/..') };
    get logInButton ()  { return $('//*[@id="NAVBAR_SIGNIN_BTN"]/..') };
    get accountPreview () { return $('#accountPreview') };

    // Sign Up Modal
    get modalContainer () { return $('#modal') };
    get signUpEmail () { return this.modalContainer.$(' input[name() { returnemail]') };
    get signUpPassword () { return this.modalContainer.$(' input[name=password])') };
    get signUpConfirmPassword () { return this.modalContainer.$(' input[name=confirmPassword]') };
    get signUpSignUpButton () { return this.modalContainer.$(' div[class*=signup_button] div') };
    get signUpSignInButton () { return this.modalContainer.$(' div[class*=login_button] div') };

    // Sign In Modal

    go(param) {
        if (!this.path)
            console.log('WARNING: Page path not specified...');

        let url = param ? this.path + param : this.path;

        browser.pause(5 * this.iWait);
        browser.url(url);
        browser.pause(5 * this.iWait);
        this.verify();
    }

    async clickSignUp(){
        await browser.pause(5 * this.iWait);
        if(await browser.isVisible(this.signUpButton)){
            await browser.click(this.signUpButton);
        }else{
            console.log("Sign up button is missing");
        }
    }

    clickSignIn(){
        browser.pause(5 * this.iWait);
        if(browser.isVisible(this.logInButton)){
            browser.click(this.logInButton);
        }else{
            console.log("Log In button is missing");
        }
    }

    async isSignedIn(){
        return await this.isVisibleBefore(this.accountPreview, this.signUpButton);
    }

    // This function accepts two elements and polls for visibility of both
    // If the first element is visible before the second, it returns true
    async isVisibleBefore(first, second) {
        for (let i = 0; i < 20; i++) {
            if (await first.isExisting())
                return true;
            else if (await second.isExisting())
                return false;
            await browser.pause(5 * this.iWait);
        }
    }

    async signUpModalCreateAccount(email, password){
        browser.setValue(this.signUpEmail, email);
        browser.setValue(this.signUpPassword, password);
        browser.setValue(this.signUpConfirmPassword, password);
        await browser.pause(10000);
    }

    signUpModalSignIn(email, password){
        browser.setValue(this.signUpEmail, email);
        browser.setValue(this.signUpPassword, password);
        browser.pause(1000);
        browser.click(this.signUpSignInButton);
        browser.pause(10000);
    }

    verify() {
        console.log('WARNING: Page validation not specified...');
    }

}

module.exports = Page;