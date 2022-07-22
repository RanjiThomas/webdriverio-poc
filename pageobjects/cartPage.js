const Page = require('./_basePage');

class cartPage extends Page{

    path = "/cart";
    get cartContainer () { return $('section.cart') };

    get cartItemListContainer () { return this.cartContainer.$('div.productList') };
    get productContainer () { return this.cartItemListContainer.$('div.productContainer') };

    get orderSummaryContainer () { return $('#ordersummary') };
    get checkoutButton () { return this.orderSummaryContainer.$(' .showInCart div.orderSummaryCheckoutBtn') };

    clearCart(){
        while (browser.isVisible(this.productContainer)){
            this.removeNthItem(1);
            browser.pause(3000);
        }
    }

    getCartItemCount(){
        let elems = browser.elements(this.productContainer);
        console.log("Number of elements : " + elems.value.length);
        return elems.value.length;
    }

    removeNthItem(n){
        let buttonLocator = this.productContainer.$(':nth-child(' + n.toString().trim() + ') button.remove');
        browser.click(buttonLocator);
        browser.pause(5000);
    }

    checkout(){
        browser.click(this.checkoutButton);
    }

    verify(){
        browser.waitForExist(this.cartContainer);
    }

}

module.exports = new cartPage();