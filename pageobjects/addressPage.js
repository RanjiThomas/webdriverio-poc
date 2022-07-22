const Page = require('./_basePage');

class AddressPage extends Page{
    path = '/cart/checkout/address';
    get progressStep () { return $('div.addressStep') };
    get nextButton () { return $('.controls a.button') };

    async clickNext(){
        await this.nextButton.waitForExist();
        await this.nextButton.click();
        await browser.pause(3000);
    }

    async verify(){
        await browser.waitForExist(this.progressStep);
    }
}

module.exports = new AddressPage();