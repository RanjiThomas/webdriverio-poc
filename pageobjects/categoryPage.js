const Page = require('./_basePage');

class CategoryPage extends Page{

    path = "/";

    get facetsContainer () { return $('ul.image-facets-pills') };

    get firstProductShelf () { return $('div.productShelf') };
    get firstProductListContainer () { return this.firstProductShelf.$('ul.productList') };
    get firstProductTile () { return this.firstProductListContainer.$('li') };
    get firstProductA2C () { return this.firstProductTile.$(':nth-child(1) div.controls') };
    get secondProductA2C () { return this.firstProductTile.$(':nth-child(2) div.controls') };
    get thirdProductA2C () { return this.firstProductTile.$(':nth-child(3) div.controls') };

    addFirstProductToCart(){
        browser.click(this.firstProductA2C);
    }

    addSecondProductToCart(){
        browser.click(this.secondProductA2C);
    }
    addThirdProductToCart(){
        browser.click(this.thirdProductA2C);
    }
    verify(){
        browser.isVisible(this.facetsContainer);
    }

}

module.exports = new CategoryPage();