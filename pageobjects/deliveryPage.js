const Page = require('./_basePage');

class DeliveryPage extends Page{

    path = '/cart/checkout/delivery';

    get progressStep () { return $('div.deliveryStep') };

    async verify(){
        await this.progressStep.waitForExist();
    }

}

module.exports = new DeliveryPage();