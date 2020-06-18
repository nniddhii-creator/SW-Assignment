import { element, by } from 'protractor';

module.exports = {
    get input() {
      return element(by.id('query'));
    },
    get searchBtn() {
      return element(by.css('button'));
    },
    get firstCharacterName() {
      return element(by.css('app-character h6'));
    },
    get title() {
      return element(by.css('h1'));
    },
    get gender() {
      return element(by.css('div.row:nth-child(2) .col-sm-10'));
    },
    get birthYear() {
      return element(by.css('div.row:nth-child(3) .col-sm-10') );
    },
    get eyeColor() {
      return element(by.css('div.row:nth-child(4) .col-sm-10') );
    },
    get skinColor() {
      return element(by.css('div.row:nth-child(5) .col-sm-10') );
    },
    get population() {
      return element(by.css('div.row:nth-child(2) .col-sm-10') );
    },
    get climate() {
      return element(by.css('div.row:nth-child(3) .col-sm-10') );
    },
    get gravity() {
      return element(by.css('div.row:nth-child(4) .col-sm-10') );
    },
    get notFound() {
      return element(by.css('div:nth-child(5)'));
    },
    get planetSelector() {
      return element(by.id('planets'));
    },
    get firstPlanetName() {
      return element(by.css('app-planet h6'));
    },
    get peopleSearchResults() {
      return element.all(by.css('div.container div.row div.col div:nth-child(5) > div:nth-child(1)'));
    },
    get planetSearchResults() {
      return element.all(by.css('div.container div.row div.col div:nth-child(5) div:nth-child(1) > div:nth-child(1)'));
    },
};
