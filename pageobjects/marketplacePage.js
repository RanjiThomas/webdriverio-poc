const Page = require('./_basePage');

class MarketplacePage extends Page{

    path = '/marketplace';
    get pageContainer () { return $('#marketPlaceLanding') };

    get firstProductShelf () { return this.pageContainer.$(' div.marketplaceShelf') };
    get firstProductPreview () { return this.firstProductShelf.$(' li.productPreview')};

    get firstProductPreviewInfo () { return this.firstProductPreview.$(':nth-child(1) div.productInformation') };
    get secondProductPreviewInfo () { return this.firstProductPreview.$(':nth-child(2) div.productInformation') };
    get thirdProductPreviewInfo () { return this.firstProductPreview.$(':nth-child(3) div.productInformation') };

    get productDetailFlyoutContainer () { return $( '#lightboxContent') };
    get productDetailFlyoutProductSection () { return $( this.productDetailFlyoutContainer + ' section.product') };
    get productDetailFlyoutA2C () { return $( this.productDetailFlyoutProductSection + ' a[class*=AtcButton]') };
    get productDetailFlyoutClose () { return $( this.productDetailFlyoutContainer + ' button.close') };

    get cartNotification () { return $( 'section.itemsInCart') };
    get cartNotificationContainer () { return $( '#notifications .notification') };

    addToCartFromPreviewModal(){
        browser.waitForVisible(this.productDetailFlyoutContainer);
        browser.click(this.productDetailFlyoutA2C);
        browser.waitForVisible(this.cartNotification);
    }

    closePreviewModal(){
        browser.waitForVisible(this.productDetailFlyoutClose);
        while(browser.isVisible(this.cartNotification)){
            browser.pause(1000);
            browser.execute('$("#notifications div.notification").hide()');
            browser.pause(1000);
        }
        browser.click(this.productDetailFlyoutClose);
    }

    openFirstProductPreview(){
        browser.click(this.firstProductPreviewInfo);
    }

    openSecondProductPreview(){
        browser.click(this.secondProductPreviewInfo);
    }

    openThirdProductPreview(){
        browser.click(this.thirdProductPreviewInfo);
    }

    verify(){
        browser.waitForExist(this.pageContainer);
    }
}

module.exports = new MarketplacePage();