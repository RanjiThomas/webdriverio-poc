"use strict";

const Page = require('./_basePage');

class HomePage extends Page{

    path = "/";
    get pageContainer () { return $('#NLIHomepage') };
    get heroImage () { return $('#liHpCarouselHero1') };

    async verify(){
        await this.pageContainer.waitForExist();
    }

}

module.exports = new HomePage();